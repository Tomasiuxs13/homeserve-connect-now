
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export const useProviderBookings = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['provider-bookings', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user ID');
      
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          services!inner(
            title,
            price,
            service_providers!inner(
              user_id
            )
          )
        `)
        .eq('services.service_providers.user_id', user.id)
        .order('booking_date', { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });
};

export const useProviderServices = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['provider-services', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user ID');
      
      const { data, error } = await supabase
        .from('services')
        .select(`
          *,
          service_categories(name),
          service_providers!inner(
            user_id
          )
        `)
        .eq('service_providers.user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });
};

export const useProviderStats = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['provider-stats', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user ID');
      
      // Get provider's service provider record first
      const { data: providerData, error: providerError } = await supabase
        .from('service_providers')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (providerError) throw providerError;
      if (!providerData) throw new Error('Provider not found');

      // Get bookings count for this week
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      weekStart.setHours(0, 0, 0, 0);

      const { data: bookingsData, error: bookingsError } = await supabase
        .from('bookings')
        .select('id')
        .eq('provider_id', user.id)
        .gte('booking_date', weekStart.toISOString());

      if (bookingsError) throw bookingsError;

      // Get reviews and calculate average rating
      const { data: reviewsData, error: reviewsError } = await supabase
        .from('reviews')
        .select('rating')
        .eq('provider_id', user.id);

      if (reviewsError) throw reviewsError;

      const avgRating = reviewsData.length > 0 
        ? reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length
        : 0;

      // Get earnings for this month
      const monthStart = new Date();
      monthStart.setDate(1);
      monthStart.setHours(0, 0, 0, 0);

      const { data: earningsData, error: earningsError } = await supabase
        .from('bookings')
        .select('total_price')
        .eq('provider_id', user.id)
        .eq('status', 'completed')
        .gte('booking_date', monthStart.toISOString());

      if (earningsError) throw earningsError;

      const totalEarnings = earningsData.reduce((sum, booking) => sum + Number(booking.total_price), 0);

      return {
        activeBookings: bookingsData.length,
        rating: avgRating,
        reviewCount: reviewsData.length,
        monthlyEarnings: totalEarnings,
      };
    },
    enabled: !!user?.id,
  });
};

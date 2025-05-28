
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { AuthPage } from "@/components/auth/AuthPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProviderDashboard from "./pages/ProviderDashboard";
import BookingPage from "./pages/BookingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<Index />} />
            <Route 
              path="/provider-dashboard" 
              element={
                <AuthGuard>
                  <ProviderDashboard />
                </AuthGuard>
              } 
            />
            <Route 
              path="/book" 
              element={
                <AuthGuard>
                  <BookingPage />
                </AuthGuard>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

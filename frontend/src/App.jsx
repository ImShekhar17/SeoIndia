import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import * as Markets from './pages/markets';
import Audit from './pages/Audit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { PERMISSION_IDS } from './utils/permissions';

const ProtectedRoute = ({ children, adminOnly = false, requiredPermission = null, requireAnyPermission = [] }) => {
  const { user, loading, hasPermission } = useAuth();

  if (loading) return null; // Or a loading spinner
  if (!user) return <Navigate to="/login" />;

  // Super-admin always has access
  if (user.role === 'admin') return children;

  // Legacy adminOnly check (deprecate eventually)
  if (adminOnly && user.role !== 'admin') {
    // If adminOnly is true, but we are not admin, check if we have specific permissions
    // If no specific permissions are required, strict admin check fails
    if (!requiredPermission && requireAnyPermission.length === 0) {
      return <Navigate to="/" />;
    }
  }

  // Check specific permission
  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <Navigate to="/" />;
  }

  // Check if user has AT LEAST ONE of the required permissions
  if (requireAnyPermission.length > 0) {
    const hasAccess = requireAnyPermission.some(permission => hasPermission(permission));
    if (!hasAccess) return <Navigate to="/" />;
  }

  return children;
};

import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />

              {/* Market Specific SEO Pages */}
              <Route path="/case-studies/automotive-seo" element={<Markets.AutomotiveSEO />} />
              <Route path="/case-studies/construction-seo" element={<Markets.ConstructionSEO />} />
              <Route path="/case-studies/dental-seo" element={<Markets.DentalSEO />} />
              <Route path="/case-studies/hvac-seo" element={<Markets.HVACSEO />} />
              <Route path="/case-studies/healthcare-seo" element={<Markets.HealthcareSEO />} />
              <Route path="/case-studies/insurance-seo" element={<Markets.InsuranceSEO />} />
              <Route path="/case-studies/lawyer-seo" element={<Markets.LawyerSEO />} />
              <Route path="/case-studies/real-estate-seo" element={<Markets.RealEstateSEO />} />
              <Route path="/case-studies/plumbing-seo" element={<Markets.PlumbingSEO />} />
              <Route path="/case-studies/aviation-seo" element={<Markets.AviationSEO />} />
              <Route path="/case-studies/home-remodeling-seo" element={<Markets.HomeRemodelingSEO />} />
              <Route path="/case-studies/cleaning-seo" element={<Markets.CleaningSEO />} />
              <Route path="/case-studies/furniture-seo" element={<Markets.FurnitureSEO />} />
              <Route path="/case-studies/entertainment-seo" element={<Markets.EntertainmentSEO />} />
              <Route path="/case-studies/logistic-seo" element={<Markets.LogisticSEO />} />
              <Route path="/case-studies/appliance-repair-seo" element={<Markets.ApplianceRepairSEO />} />
              <Route path="/case-studies/restaurant-seo" element={<Markets.RestaurantSEO />} />
              <Route path="/case-studies/agriculture-seo" element={<Markets.AgricultureSEO />} />
              <Route path="/case-studies/fitness-seo" element={<Markets.FitnessSEO />} />
              <Route path="/case-studies/kitchen-remodeler-seo" element={<Markets.KitchenRemodelerSEO />} />
              <Route path="/case-studies/therapist-seo" element={<Markets.TherapistSEO />} />
              <Route path="/case-studies/catering-seo" element={<Markets.CateringSEO />} />
              <Route path="/case-studies/yoga-seo" element={<Markets.YogaSEO />} />
              <Route path="/case-studies/pharma-seo" element={<Markets.PharmaSEO />} />
              <Route path="/case-studies/daycare-seo" element={<Markets.DaycareSEO />} />
              <Route path="/case-studies/contractors-seo" element={<Markets.ContractorsSEO />} />
              <Route path="/case-studies/fire-protection-seo" element={<Markets.FireProtectionSEO />} />
              <Route path="/case-studies/financial-seo" element={<Markets.FinancialSEO />} />
              <Route path="/case-studies/pest-control-seo" element={<Markets.PestControlSEO />} />
              <Route path="/case-studies/salons-seo" element={<Markets.SalonsSEO />} />
              <Route path="/case-studies/veterinary-seo" element={<Markets.VeterinarySEO />} />
              <Route path="/case-studies/education-seo" element={<Markets.EducationSEO />} />
              <Route path="/case-studies/jewelry-seo" element={<Markets.JewelrySEO />} />
              <Route path="/case-studies/retail-seo" element={<Markets.RetailSEO />} />
              <Route path="/case-studies/hospitality-seo" element={<Markets.HospitalitySEO />} />
              <Route path="/case-studies/tree-service-seo" element={<Markets.TreeServiceSEO />} />
              <Route path="/case-studies/photography-seo" element={<Markets.PhotographySEO />} />
              <Route path="/case-studies/movers-seo" element={<Markets.MoversSEO />} />
              <Route path="/case-studies/cannabis-seo" element={<Markets.CannabisSEO />} />
              <Route path="/case-studies/travel-seo" element={<Markets.TravelSEO />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/audit/:id" element={<Audit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:resettoken" element={<ResetPassword />} />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute adminOnly={false} requireAnyPermission={PERMISSION_IDS}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

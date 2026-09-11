import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import BookingModal from './components/BookingModal';
import ReviewList from './components/ReviewList';
import { AuthProvider } from './context/AuthContext';
import { fetchServices } from './services/api';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [services, setServices] = useState([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchServices().then(data => setServices(data));
  }, []);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          onOpenBooking={() => {
            setSelectedService(services[0] || null);
            setIsBookingOpen(true);
          }}
        />

        <main className="flex-1">
          {activePage === 'home' && (
            <>
              <HomePage
                services={services}
                onSelectService={handleSelectService}
                onOpenBooking={() => setIsBookingOpen(true)}
              />
              <ReviewList />
            </>
          )}

          {activePage === 'services' && (
            <ServicesPage
              services={services}
              onSelectService={handleSelectService}
            />
          )}

          {activePage === 'dashboard' && (
            <DashboardPage
              onNewBooking={() => setIsBookingOpen(true)}
            />
          )}

          {activePage === 'admin' && (
            <AdminPage />
          )}
        </main>

        <Footer />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          services={services}
          preSelectedService={selectedService}
        />
      </div>
    </AuthProvider>
  );
}

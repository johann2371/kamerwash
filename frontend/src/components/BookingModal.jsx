import React, { useState } from 'react';
import StepFormula from './booking/StepFormula';
import StepDateTime from './booking/StepDateTime';
import StepAddress from './booking/StepAddress';
import { createBooking } from '../services/api';

export default function BookingModal({ isOpen, onClose, services, preSelectedService }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preSelectedService || services[0]);
  const [vehicleType, setVehicleType] = useState('berline');
  const [scheduledDate, setScheduledDate] = useState('2026-09-15');
  const [timeSlot, setTimeSlot] = useState('10:00 - 12:00');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const payload = {
      service_id: selectedService.id,
      vehicle_type: vehicleType,
      scheduled_date: scheduledDate,
      time_slot: timeSlot,
      address,
      city,
      postal_code: postalCode,
      notes,
    };

    const res = await createBooking(payload);
    setIsSubmitting(false);
    if (res.success || res.data) {
      setSuccessData(res.data || res);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-100">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">Réservation à domicile</span>
            <h3 className="text-xl font-black text-slate-900">
              {successData ? 'Réservation confirmée !' : `Étape ${step} sur 3`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {successData ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl font-black">
                ✓
              </div>
              <h4 className="text-2xl font-bold text-slate-900">C'est réservé !</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Votre réservation <strong>{successData.booking_reference || 'AQW-REF'}</strong> a été enregistrée. Notre technicien se présentera le <strong>{scheduledDate}</strong> à <strong>{timeSlot}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand-600 text-white font-bold text-sm rounded-xl"
                >
                  Fermer et voir mes réservations
                </button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <StepFormula
                  services={services}
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  vehicleType={vehicleType}
                  setVehicleType={setVehicleType}
                  onNext={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <StepDateTime
                  scheduledDate={scheduledDate}
                  setScheduledDate={setScheduledDate}
                  timeSlot={timeSlot}
                  setTimeSlot={setTimeSlot}
                  onPrev={() => setStep(1)}
                  onNext={() => setStep(3)}
                />
              )}
              {step === 3 && (
                <StepAddress
                  address={address}
                  setAddress={setAddress}
                  city={city}
                  setCity={setCity}
                  postalCode={postalCode}
                  setPostalCode={setPostalCode}
                  notes={notes}
                  setNotes={setNotes}
                  onPrev={() => setStep(2)}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

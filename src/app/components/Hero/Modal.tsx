"use client";

import { useState } from "react";
import { Calendar, X } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ use full international format (example: Nigeria +234)
    const phoneNumber = "2349130199317"; // replace with your real WhatsApp #
    const message = `📌 New Nail Salon Booking:
- Name: ${form.name}
- Email: ${form.email}
- Phone: ${form.phone}
- Service: ${form.service}
- Date: ${form.date}
- Time: ${form.time}
- Notes: ${form.notes}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Open WhatsApp
    setIsOpen(false); // close modal after submit
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={toggleModal}
        className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-pink-400/50 flex items-center space-x-2 relative overflow-hidden group transform hover:scale-105"
      >
        <Calendar className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Book Appointment</span>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Book Your Appointment
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Please fill in your details to book a nail salon appointment.
            </p>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 812 345 6789"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option>Classic Manicure</option>
                  <option>Gel Polish</option>
                  <option>Acrylic Nails</option>
                  <option>Nail Art</option>
                  <option>Pedicure</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any special requests?"
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-pink-400/50 transition-all"
              >
                Confirm Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

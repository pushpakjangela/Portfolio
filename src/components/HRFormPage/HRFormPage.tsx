import { useState } from "react";

const HRFormPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    position: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Offer details submitted successfully!");
    // Later: integrate EmailJS, Nodemailer, or API to send data
  };

  return (
    <div className="h-full flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-2xl shadow-xl border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          HR Offer / Collaboration Form
        </h2>

        {/* Grid layout for two fields per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Company Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Official Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Official Email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Phone Number"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Position Offered
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Position Offered"
              required
            />
          </div>
        </div>

        {/* Notes Area */}
        <div className="mt-6">
          <label className="block text-white font-semibold mb-1">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Any message or instructions"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300"
        >
          Send Offer Details
        </button>
      </form>
    </div>
  );
};

export default HRFormPage;

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const subject = "New Inquiry - Peace Abounds";

      const body = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `;

      const mailtoLink = `mailto:pwambui93@gmail.com.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      // simulate slight UX delay for polish
      setTimeout(() => {
        window.location.href = mailtoLink;

        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setLoading(false);

        setTimeout(() => setSubmitted(false), 3000);
      }, 500);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 max-w-3xl">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-brand-text leading-tight mb-4 flex items-center gap-4">
          <i className="fa-solid fa-dove text-brand-sage/50 text-3xl"></i>
          Get in Touch
        </h1>
        <p className="text-brand-muted text-lg font-light max-w-xl">
          We're here to answer any questions you have about our care,
          facilities, or scheduling a visit.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[12px] p-8 md:p-10 shadow-soft border border-brand-sage/20 relative">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div
            className={
              submitted
                ? "opacity-0 pointer-events-none transition-all duration-300"
                : "opacity-100 transition-all duration-300"
            }
          >
            {/* Section */}
            <div>
              <div className="section-header mb-6">
                <h2 className="font-sans text-xl font-medium text-brand-text">
                  Your Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="First Name *"
                />

                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Last Name"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="form-input"
                  placeholder="Email *"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Message */}
            <div className="pt-6 pb-7">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input resize-y"
                placeholder="Your message *"
                rows="4"
              />
            </div>

            {/* Button */}
            <div className="pt-6 border-t border-brand-sage/20 flex items-center justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-brand-sage text-white rounded-[6px] font-medium shadow-sm hover:shadow-md hover:bg-brand-muted transition-all flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Opening email...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <i className="fa-solid fa-arrow-right text-sm"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* SUCCESS */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[12px]"
            >
              <div className="w-16 h-16 rounded-full bg-brand-sage/10 flex items-center justify-center mb-4">
                <i className="fa-solid fa-check text-brand-sage text-2xl"></i>
              </div>
              <p className="text-brand-text font-medium text-lg">
                Email ready to send
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;

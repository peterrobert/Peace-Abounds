const ContactForm = () => {
  return (
    <div class="w-full lg:w-2/3 max-w-3xl">
      {/* <!-- Hero Section for Contact --> */}
      <div class="mb-12">
        <h1 class="font-serif text-4xl md:text-5xl font-medium text-brand-text leading-tight mb-4 flex items-center gap-4">
          <i class="fa-solid fa-dove text-brand-sage/50 text-3xl"></i>
          Get in Touch
        </h1>
        <p class="text-brand-muted text-lg font-light max-w-xl">
          We're here to answer any questions you have about our care,
          facilities, or scheduling a visit. Let's start the conversation.
        </p>
      </div>

      {/* <!-- Form Container with Reference Styling --> */}
      <div class="bg-white rounded-[12px] p-8 md:p-10 shadow-soft border border-brand-sage/20">
        <form action="#" method="POST" class="space-y-10">
          {/* <!-- Section 1: Personal Info --> */}
          <div>
            <div class="section-header">
              <div class="w-6 h-6 rounded-full border border-brand-sage flex items-center justify-center text-brand-sage">
                <i class="fa-solid fa-user text-xs"></i>
              </div>
              <div>
                <h2 class="font-sans text-xl font-medium text-brand-text">
                  Your Information
                </h2>
                <p class="text-brand-muted text-sm mt-1">
                  How can we reach you?
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="form-input"
                  placeholder="e.g. Sarah"
                />
              </div>
              <div>
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-input"
                  placeholder="e.g. Jenkins"
                />
              </div>
              <div>
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input"
                  placeholder="sarah.j@example.com"
                />
              </div>
              <div>
                <label for="phone" class="form-label">
                  Phone Number{" "}
                  <span class="form-label-optional">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form-input"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* <!-- Section 2: Inquiry Details --> */}
          <div>
            <div class="section-header">
              <div class="w-6 h-6 rounded-full border border-brand-sage flex items-center justify-center text-brand-sage">
                <i class="fa-solid fa-clipboard-list text-xs"></i>
              </div>
              <div>
                <h2 class="font-sans text-xl font-medium text-brand-text">
                  Inquiry Details
                </h2>
                <p class="text-brand-muted text-sm mt-1">
                  What can we help you with?
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <label class="form-label">Preferred Contact Method</label>
                <div class="flex flex-wrap gap-4 mt-2">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      class="w-4 h-4 text-brand-sage border-brand-sage/30 focus:ring-brand-sage"
                      checked
                    />
                    <span class="text-sm text-brand-text">Email</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      class="w-4 h-4 text-brand-sage border-brand-sage/30 focus:ring-brand-sage"
                    />
                    <span class="text-sm text-brand-text">Phone</span>
                  </label>
                </div>
              </div>

              <div>
                <label for="visitTime" class="form-label">
                  Preferred Time for a Visit{" "}
                  <span class="form-label-optional">(If applicable)</span>
                </label>
                <select
                  id="visitTime"
                  name="visitTime"
                  class="form-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239db5a8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10"
                >
                  <option value="" disabled selected>
                    Select a preferred time window
                  </option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                  <option value="evening">Evening (5 PM - 7 PM)</option>
                  <option value="weekend">Weekend (Flexible)</option>
                </select>
              </div>

              <div>
                <label for="message" class="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="form-input resize-y"
                  placeholder="Tell us a little about your needs or questions..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Action Area --> */}
          <div class="pt-6 border-t border-brand-sage/20 flex items-center justify-end">
            <button
              type="button"
              class="px-8 py-3 bg-brand-sage text-white rounded-[6px] font-medium shadow-sm hover:shadow-md hover:bg-brand-muted transition-all flex items-center gap-2"
            >
              Send Inquiry
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

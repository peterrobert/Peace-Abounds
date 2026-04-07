const ScheduleForm = () => {
  return (
    <div class="w-full lg:w-2/3 max-w-3xl">
      {/* <!-- Hero Section for Schedule --> */}
      <div class="mb-12">
        <h1 class="font-serif text-4xl md:text-5xl font-medium text-brand-text leading-tight mb-4 flex items-center gap-4">
          <i class="fa-regular fa-calendar-check text-brand-sage/50 text-3xl"></i>
          Schedule a Visit
        </h1>
        <p class="text-brand-muted text-lg font-light max-w-xl">
          Select a convenient time to meet our care team, explore the home, and
          see how we can support your family's needs.
        </p>
      </div>

      {/* <!-- Scheduling Container --> */}
      <div class="bg-white rounded-[12px] p-8 md:p-10 shadow-soft border border-brand-sage/20">
        <form action="#" method="POST" class="space-y-10">
          {/* <!-- Section 1: Visit Type --> */}
          <div>
            <div class="section-header">
              <div class="w-6 h-6 rounded-full border border-brand-sage flex items-center justify-center text-brand-sage">
                <i class="fa-solid fa-handshake-angle text-xs"></i>
              </div>
              <div>
                <h2 class="font-sans text-xl font-medium text-brand-text">
                  Visit Type
                </h2>
                <p class="text-brand-muted text-sm mt-1">
                  How would you like to meet?
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="visit-type-pill active">
                <i class="fa-solid fa-house-chimney mr-2"></i> In-Person Visit
              </div>
            </div>
          </div>

          {/* <!-- Section 2: Date & Time --> */}
          <div>
            <div class="section-header">
              <div class="w-6 h-6 rounded-full border border-brand-sage flex items-center justify-center text-brand-sage">
                <i class="fa-regular fa-clock text-xs"></i>
              </div>
              <div>
                <h2 class="font-sans text-xl font-medium text-brand-text">
                  Date & Time
                </h2>
                <p class="text-brand-muted text-sm mt-1">
                  Select your preferred slot
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Calendar Picker --> */}
              <div class="bg-brand-cream/30 p-4 rounded-lg border border-brand-sage/10">
                <div class="flex items-center justify-between mb-4 px-2">
                  <button
                    type="button"
                    class="text-brand-muted hover:text-brand-sage"
                  >
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <span class="font-medium text-brand-text">October 2023</span>
                  <button
                    type="button"
                    class="text-brand-muted hover:text-brand-sage"
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
                <div class="calendar-grid mb-2">
                  <div class="text-xs font-medium text-brand-muted">Su</div>
                  <div class="text-xs font-medium text-brand-muted">Mo</div>
                  <div class="text-xs font-medium text-brand-muted">Tu</div>
                  <div class="text-xs font-medium text-brand-muted">We</div>
                  <div class="text-xs font-medium text-brand-muted">Th</div>
                  <div class="text-xs font-medium text-brand-muted">Fr</div>
                  <div class="text-xs font-medium text-brand-muted">Sa</div>
                </div>
                <div class="calendar-grid">
                  <div class="calendar-day disabled">24</div>
                  <div class="calendar-day disabled">25</div>
                  <div class="calendar-day disabled">26</div>
                  <div class="calendar-day disabled">27</div>
                  <div class="calendar-day disabled">28</div>
                  <div class="calendar-day disabled">29</div>
                  <div class="calendar-day disabled">30</div>
                  <div class="calendar-day">1</div>
                  <div class="calendar-day">2</div>
                  <div class="calendar-day">3</div>
                  <div class="calendar-day">4</div>
                  <div class="calendar-day">5</div>
                  <div class="calendar-day">6</div>
                  <div class="calendar-day">7</div>
                  <div class="calendar-day">8</div>
                  <div class="calendar-day">9</div>
                  <div class="calendar-day">10</div>
                  <div class="calendar-day">11</div>
                  <div class="calendar-day active">12</div>
                  <div class="calendar-day">13</div>
                  <div class="calendar-day">14</div>
                  <div class="calendar-day">15</div>
                  <div class="calendar-day">16</div>
                  <div class="calendar-day">17</div>
                  <div class="calendar-day">18</div>
                  <div class="calendar-day">19</div>
                  <div class="calendar-day">20</div>
                  <div class="calendar-day">21</div>
                </div>
              </div>

              {/* <!-- Time Slots --> */}
              <div>
                <h3 class="text-sm font-medium text-brand-text mb-3">
                  Available Times for Oct 12
                </h3>
                <div class="grid grid-cols-2 gap-3">
                  <div class="time-slot">09:00 AM</div>
                  <div class="time-slot active">10:00 AM</div>
                  <div class="time-slot">11:00 AM</div>
                  <div class="time-slot">01:00 PM</div>
                  <div class="time-slot">02:30 PM</div>
                  <div class="time-slot">04:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Section 3: Visitor Details & Notes --> */}
          <div>
            <div class="section-header">
              <div class="w-6 h-6 rounded-full border border-brand-sage flex items-center justify-center text-brand-sage">
                <i class="fa-solid fa-address-card text-xs"></i>
              </div>
              <div>
                <h2 class="font-sans text-xl font-medium text-brand-text">
                  Visitor Details
                </h2>
                <p class="text-brand-muted text-sm mt-1">
                  Who will be attending?
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="visitorName" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="visitorName"
                  name="visitorName"
                  class="form-input"
                  placeholder="e.g. Sarah Jenkins"
                />
              </div>
              <div>
                <label for="visitorEmail" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="visitorEmail"
                  name="visitorEmail"
                  class="form-input"
                  placeholder="sarah.j@example.com"
                />
              </div>
              <div>
                <label for="visitorPhone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="visitorPhone"
                  name="visitorPhone"
                  class="form-input"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label for="attendees" class="form-label">
                  Number of Attendees
                </label>
                <select
                  id="attendees"
                  name="attendees"
                  class="form-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239db5a8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10"
                >
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4+">4+ people</option>
                </select>
              </div>
            </div>

            <div>
              <label for="specialNotes" class="form-label">
                Special Notes or Questions{" "}
                <span class="form-label-optional">(Optional)</span>
              </label>
              <textarea
                id="specialNotes"
                name="specialNotes"
                rows="4"
                class="form-input resize-y"
                placeholder="Are there specific care needs or amenities you'd like us to focus on during the tour?"
              ></textarea>
            </div>
          </div>

          {/* <!-- Privacy & Confirmation --> */}
          <div class="bg-brand-cream/40 p-5 rounded-[8px] border border-brand-sage/20">
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-shield-halved text-brand-sage mt-1"></i>
              <div>
                <h4 class="text-sm font-medium text-brand-text mb-1">
                  Privacy Reassurance
                </h4>
                <p class="text-xs text-brand-muted leading-relaxed">
                  Your information is strictly confidential. We only use these
                  details to prepare for your visit and ensure we provide the
                  most relevant information for your family's care needs.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Action Area --> */}
          <div class="pt-6 border-t border-brand-sage/20 flex items-center justify-between">
            <a
              href="#"
              class="text-sm text-brand-muted hover:text-brand-sage transition-colors font-medium"
            >
              <i class="fa-solid fa-arrow-left mr-1"></i> Back
            </a>
            <button
              type="button"
              class="px-8 py-3 bg-brand-sage text-white rounded-[6px] font-medium shadow-sm hover:shadow-md hover:bg-brand-muted transition-all flex items-center gap-2"
            >
              Confirm Visit
              <i class="fa-solid fa-check text-sm"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;

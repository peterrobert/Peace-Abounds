const InfoCard = () => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="sticky top-32 space-y-8">
        {/*                     
                    <!-- Prep Card --> */}
        <div className="bg-white rounded-[12px] shadow-card border border-brand-sage/20 overflow-hidden p-6 md:p-8">
          <h3 className="font-serif text-xl text-brand-text font-medium mb-4">
            Preparing for Your Visit
          </h3>
          <p className="text-sm text-brand-muted mb-6 leading-relaxed">
            We want your tour to be as helpful as possible. Here's what to
            expect and how to prepare.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-brand-sage text-xs font-bold">1</span>
              </div>
              <p className="text-sm text-brand-text">
                <strong>Duration:</strong> Tours typically last 45-60 minutes.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-brand-sage text-xs font-bold">2</span>
              </div>
              <p className="text-sm text-brand-text">
                <strong>Questions:</strong> Bring a list of questions regarding
                care, meals, and daily routines.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-brand-sage text-xs font-bold">3</span>
              </div>
              <p className="text-sm text-brand-text">
                <strong>Meet the Team:</strong> You'll have the chance to speak
                directly with our lead caregivers.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

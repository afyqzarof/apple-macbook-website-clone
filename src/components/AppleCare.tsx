import appleCare from "../assets/images/apple-care.jpeg";

const AppleCare = () => {
  return (
    <section className="flex flex-col items-center p-12 gap-4">
      <img src={appleCare} alt="apple care" className="w-32 md:mb-12" />
      <h4 className="text-2xl md:text-4xl">AppleCare+ for Mac</h4>
      <p className="text-sm max-w-6xl">
        Every Mac comes with a one-year limited warranty(opens in a new window)
        and up to 90 days of complimentary technical support(opens in a new
        window). AppleCare+ for Mac extends your coverage to three years from
        your AppleCare+ purchase date and adds unlimited incidents of accidental
        damage protection, each subject to a service fee of RM 469 for screen
        damage or external enclosure damage, or RM 1,429 for other accidental
        damage. In addition, you‘ll get 24/7 priority access to Apple experts by
        chat or phone through getsupport.apple.com(opens in a new window). For
        complete details, see the terms(opens in a new window).
      </p>
      <p className="cursor-pointer text-xs text-blue hover:underline">
        Learn more about AppleCare+
      </p>
    </section>
  );
};

export default AppleCare;

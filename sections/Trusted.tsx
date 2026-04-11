export default function Trusted() {
  const logos = [
    "airbnb",
    "booking",
    "vrbo",
    "tripadvisor",
    "agoda",
    "expedia",
    "hometogo",
  ];

  return (
    <section className="bg-gray-100 py-[40px] border-y border-gray-200">
      <div className="container-custom text-center">
        <p className="text-gray-600 text-[16px] mb-[24px]">
          Trusted by leaders in 50+ industries
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[40px] opacity-80">
          {logos.map((logo, i) => (
            <div key={i} className="text-gray-500 text-[18px] font-semibold">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

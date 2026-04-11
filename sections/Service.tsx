const services = [
  {
    title: "Manage Property Listings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "📋",
  },
  {
    title: "Manage Customer Bookings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "📅",
  },
  {
    title: "Schedule House Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🧺",
  },
  {
    title: "Monitor Guest Reviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "👍",
  },
  {
    title: "Track & Report Expenses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "📊",
  },
  {
    title: "Guest Inquiry & Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "💬",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F9FAFB] px-28 py-[80px]">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-bold text-gray-900">
            Our <span className="text-[#FF385C]">Service</span>
          </h2>

          <p className="mt-[16px] text-gray-600 max-w-[600px] mx-auto text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Grid */}
        <div className=" grid md:grid-cols-3 gap-[24px]">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-[28px] rounded-[16px] border border-[#FFD6DC] hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="text-[40px] mb-[20px]">{item.icon}</div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-gray-900 mb-[12px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[14px] leading-relaxed">
                {item.desc}
              </p>

              {/* Button */}
              <button className="mt-[20px] text-[#FF385C] border border-[#FF385C] px-[16px] py-[6px] rounded-full text-[14px] hover:bg-[#FF385C] hover:text-white transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

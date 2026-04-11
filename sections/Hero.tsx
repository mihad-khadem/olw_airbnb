export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 rotate-[-15deg] bg-red-500 text-white px-4 py-3 rounded-xl shadow-lg">
        Airbnb
      </div>

      <div className="absolute top-24 right-24 rotate-[15deg] bg-blue-600 text-white px-4 py-3 rounded-xl shadow-lg">
        B.
      </div>

      <div className="absolute bottom-32 left-32 rotate-[10deg] bg-black text-white px-4 py-3 rounded-xl shadow-lg">
        V
      </div>

      <div className="absolute bottom-28 right-32 rotate-[-10deg] bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg">
        Trip
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Airbnb Assistants For
          <br />
          <span className="text-gray-700">Property Management</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Automate your bookings, guest communication, and daily operations with
          smart virtual assistants tailored for short-term rentals.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md transition">
            Schedule A Meeting →
          </button>

          <button className="text-gray-700 hover:text-black underline">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
}

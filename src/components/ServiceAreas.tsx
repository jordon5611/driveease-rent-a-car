const areas = [
  "DHA",
  "Clifton",
  "Gulshan",
  "Saddar",
  "North Karachi",
  "Korangi",
  "Malir",
  "Bahria Town",
  "Scheme 33",
  "PECHS",
  "Nazimabad",
  "Landhi",
];

export default function ServiceAreas() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Car Rental Service Across Karachi
          </h2>
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-center">
            DriveEase provides reliable rent a car services across all major areas
            of Karachi, Pakistan. Whether you need a car for daily use, a family
            trip, corporate travel or airport pickup, our fleet is available
            throughout the city. We serve areas including DHA Karachi, Clifton,
            Gulshan e Iqbal, Saddar, North Karachi, Korangi, Malir, Bahria Town
            Karachi, Scheme 33 and surrounding localities. Our cars are available
            for short term daily rentals, weekly hire and long term monthly car
            rental packages in Karachi. Contact us today to inquire about
            availability.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { COUNTRIES, RIDE_MODE_LABEL } from "@/config/countries";

// The four countries, what kind of ride each offers, and how you pay.
const WhereWeRide = () => (
  <section className="md:my-16 my-10 w-full">
    <div className="flex flex-col items-center gap-3 text-center mb-10">
      <p className="text-xl font-NeuePlakSemibold text-black/30">Where we ride</p>
      <h2 className="md:text-4xl text-2xl font-NeuePlakExtendedBlack text-primary">
        Four Countries, More Ways to Ride
      </h2>
      <p className="max-w-2xl">
        <strong>On-demand rides</strong> in the UK and Sweden: a ride when you
        need it, at a price you agree with the driver — private, or shared with
        other passengers going your way to pay less.{" "}
        <strong>Carpool ride-sharing</strong> in Nigeria and Canada: planned
        journeys with drivers already heading your way, at a fraction of the
        cost.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {COUNTRIES.map((country) => (
        <div
          key={country.key}
          className="rounded-2xl bg-[#F3F5F7] p-6 flex flex-col gap-3 text-left"
        >
          <span className="text-4xl" aria-hidden>
            {country.flag}
          </span>
          <h3 className="text-xl font-NeuePlakBold">{country.name}</h3>
          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-NeuePlakSemibold ${
              country.mode === "on-demand"
                ? "bg-primary/10 text-primary"
                : "bg-secondary/10 text-secondary"
            }`}
          >
            {RIDE_MODE_LABEL[country.mode]}
          </span>
          <dl className="text-sm text-black/60 flex flex-col gap-1">
            <div>
              <dt className="inline font-NeuePlakSemibold text-black/80">Currency: </dt>
              <dd className="inline">{country.currency}</dd>
            </div>
            <div>
              <dt className="inline font-NeuePlakSemibold text-black/80">Pay with: </dt>
              <dd className="inline">{country.payment}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  </section>
);

export default WhereWeRide;

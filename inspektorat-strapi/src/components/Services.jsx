import Service from "./Service";

function Services({ services }) {
  const numServices = services.data.length;

  return (
    <section className="services bg-[#f6f8f7] px-0 md:px-8">
      <div className="my-container-sm text-center">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800">
          Layanan
        </h2>
        <div
          className={`grid ${
            numServices === 1
              ? "grid-cols-1 max-w-[273px]"
              : numServices === 2
              ? "grid-cols-2 max-w-[642px]"
              : "grid-cols-2 md:grid-cols-3"
          } mx-auto gap-3 md:gap-x-24 md:gap-y-12 text-start my-7 md:my-9`}
        >
          {services.data.map((service) => (
            <Service services={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

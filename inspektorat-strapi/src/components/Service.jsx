import divider from "../assets/divider.svg";
import BASE_URL from "../services/apiConfig";

function Service({ services }) {
  const { attributes } = services;
  const { link, logo, nama } = attributes;

  return (
    <a href={link}>
      <div className="bg-white text-primary rounded shadow-md p-3 md:p-9 hover:shadow-2xl hover:bg-primary hover:text-white duration-300">
        <div className="overflow-hidden">
          <div className="grid place-items-center gap-5 mb-5">
            <img
              src={`${BASE_URL}${
                logo.data.attributes.formats.small?.url ||
                logo.data.attributes.url
              }`}
              className="h-[40px] rounded"
            />
            <img src={divider} alt="divider" className="h-[2px] " />
          </div>
          <h3 className="font-semibold text-sm lg:text-xl text-center line-clamp-1">
            {nama}
          </h3>
        </div>
      </div>
    </a>
  );
}

export default Service;

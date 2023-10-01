import { Link } from "react-router-dom";

function Docs() {
  return (
    <section className="docs bg-contact bg-cover bg-center">
      <div className="my-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-14 text-white text-center md:text-start">
          <div>
            <h2 className="font-bold text-2xl lg:text-4xl mb-4 md:mb-7">
              Dokumen Inspektorat
            </h2>
            <div className="text-base lg:text-xl">
              <Link to="/documents" className="hover:underline">
                Dokumen atau berkas yang berisi <u>informasi publik</u>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/documents">
              <button className="btn border-solid border border-white whitespace-nowrap hover:bg-white hover:text-neutral800">
                Lihat Dokumen
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Docs;

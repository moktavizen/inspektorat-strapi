import about from "../assets/insp2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <div className="my-container flex flex-col md:flex-row justify-center items-center">
        <img
          className="rounded w-full md:w-[74.5%] object-cover shadow-xl"
          src={about}
        />
        <div className="w-[90%] bg-primary p-4 sm:p-8 lg:p-10 rounded mt-[-14.5%] md:mt-0 md:ml-[-14.5%] shadow-xl">
          <div className="content text-white">
            <h2 className="font-bold text-2xl lg:text-4xl">Profil</h2>
            <p className="mt-2 lg:mt-6 mb-4 sm:mb-8 lg:mb10 text-sm lg:text-xl">
              Inspektorat Daerah merupakan unsur pengawas penyelenggaraan
              pemerintahan daerah, yang dipimpin oleh seorang Inspektur yang
              dalam melaksanakan tugas dan fungsinya bertanggung jawab kepada
              Bupati melalui Sekretaris Daerah.
            </p>
            <Link to="/profile">
              <button className="btn bg-white text-secondary hover:bg-white/80">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

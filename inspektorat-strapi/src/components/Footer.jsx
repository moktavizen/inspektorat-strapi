import { Link } from "react-router-dom";
import logo from "../assets/logo-text.svg";
import WebLink from "./WebLink";

function Footer({ contact, links }) {
  const { data: dataContact } = contact;
  const { attributes } = dataContact;
  const { alamat, telepon, email } = attributes;

  return (
    <footer>
      <section>
        <div className="my-container flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-start">
          <img className="h-8 mt-[-2px]" src={logo} alt="logo inspektorat" />

          <div className="box max-w-[320px]">
            <div className="text-neutral800 mb-2 font-medium text-base lg:text-xl">
              Kontak
            </div>
            <ul className="text-neutral-500 flex flex-col gap-2  text-sm lg:text-base">
              <li>
                <a
                  href="https://www.google.com/maps/search/inspektorat+gresik/@-7.1708937,112.5970578,17z?entry=ttu"
                  target="blank"
                  className="hover:text-primary"
                >
                  Alamat:
                  <br />
                  {alamat}
                </a>
              </li>
              <li>
                <a href={`tel:+62${telepon}`} className="hover:text-primary">
                  Telepon: <br />
                  {telepon}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-primary">
                  Email: <br />
                  {email}
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="text-neutral800 mb-2 font-medium  text-base lg:text-xl">
              Tautan Terkait
            </div>
            <ul className="text-neutral-500 flex flex-col gap-2  text-sm lg:text-base">
              {links.data.map((link) => (
                <WebLink link={link} key={link.id} />
              ))}
            </ul>
          </div>
          <div className="box">
            <div className="text-neutral800 mb-2 font-medium  text-base lg:text-xl">
              Navigasi
            </div>
            <ul className="text-neutral-500 flex flex-col gap-2  text-sm lg:text-base">
              <li>
                <Link to="/" className="hover:text-primary">
                  Beranda
                </Link>
              </li>

              <li>
                <Link to="/documents" className="hover:text-primary">
                  Dokumen
                </Link>
              </li>
              <li>
                <Link to="/all-post" className="hover:text-primary">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-primary">
                  Profile
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Layanan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="py-5 px-4 text-center bg-primary text-white text-sm lg:text-base">
        Dinas Komunikasi dan Informatika © 2023. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

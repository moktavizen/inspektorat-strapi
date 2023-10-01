/* eslint-disable react-refresh/only-export-components */
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import ReactMarkdown from "react-markdown";
import BASE_URL from "../services/apiConfig";

function OrgStructure({ profile, scrollPosition }) {
  const { data: dataProfile } = profile;
  const { attributes } = dataProfile;
  const { profilPimpinan, strukturOrganisasi, penjelasanStrukturOrganisasi } =
    attributes;

  const modifiedContent = penjelasanStrukturOrganisasi.replace(
    /\/uploads\//g,
    `${BASE_URL}/uploads/`
  );

  return (
    <section>
      <div className="my-container">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800 text-center mb-7 md:mb-9">
          Struktur Organisasi
        </h2>
        <div className="rounded-xl shadow flex flex-col max-w-[405px] lg:max-w-none lg:flex-row mb-7 md:mb-9 border border-gray-900/10 overflow-hidden">
          <LazyLoadImage
            className="max-h-[720px] w-full "
            scrollPosition={scrollPosition}
            src={`${BASE_URL}${
              profilPimpinan.data.attributes.formats.xlarge?.url ||
              profilPimpinan.data.attributes.url
            }`}
            alt="pimpinan organisasi"
            effect="blur"
          />
          <LazyLoadImage
            className="max-h-[720px] w-full"
            scrollPosition={scrollPosition}
            src={`${BASE_URL}${
              strukturOrganisasi.data.attributes.formats.xlarge?.url ||
              strukturOrganisasi.data.attributes.url
            }`}
            alt="struktur organisasi"
            effect="blur"
          />
        </div>
        <ReactMarkdown className="prose prose-img:rounded-xl prose-img:border prose-img:border-neutral-500 prose-img:w-full max-w-none">
          {modifiedContent}
        </ReactMarkdown>
      </div>
    </section>
  );
}

export default trackWindowScroll(OrgStructure);

import ReactMarkdown from "react-markdown";
import BASE_URL from "../services/apiConfig";

function OrgVision({ profile }) {
  const { data: dataProfile } = profile;
  const { attributes } = dataProfile;
  const { visiMisi } = attributes;

  const modifiedContent = visiMisi.replace(
    /\/uploads\//g,
    `${BASE_URL}/uploads/`
  );

  return (
    <section>
      <div className="my-container">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800 text-center mb-7 md:mb-9">
          Visi & Misi
        </h2>
        <ReactMarkdown className="prose prose-img:rounded-xl prose-img:border prose-img:border-neutral-500 prose-img:w-full max-w-none">
          {modifiedContent}
        </ReactMarkdown>
      </div>
    </section>
  );
}

export default OrgVision;

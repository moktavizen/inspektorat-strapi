import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import profile from "../assets/profile.jpg";
import BASE_URL from "../services/apiConfig";

function PostContent({ posts }) {
  const { id } = useParams();

  const post = posts.data.find((post) => post.id == id) || {};

  // console.log("Blog Object");
  // console.log(post);

  const { attributes } = post;
  const { cover, title, content, createdAt, nama, email } = attributes;

  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const modifiedContent = content.replace(
    /\/uploads\//g,
    `${BASE_URL}/uploads/`
  );

  return (
    <div className="overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 pt-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <main>
            <article className="relative pt-10 pb-16">
              <h1 className="text-2xl font-extrabold tracking-tight text-neutral800 sm:text-3xl">
                {title}
              </h1>
              <div className="text-sm leading-6">
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="absolute top-0 inset-x-0 text-neutral800">
                    <time dateTime={createdAt}>{formatDate(createdAt)}</time>
                  </dd>
                </dl>
              </div>
              <div className="mt-6">
                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                  <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                    <img
                      className="mr-3 w-9 h-9 rounded-full"
                      src={profile}
                      alt="profile"
                    />
                    <div className="text-sm leading-4">
                      <div className="text-neutral800">{nama}</div>
                      <div className="mt-1">
                        <div className="text-sky-700">{email}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                className="w-full aspect-video object-cover my-12 rounded-xl border border-gray-900/10"
                src={`${BASE_URL}${
                  cover.data.attributes.formats.medium?.url ||
                  cover.data.attributes.url
                }`}
                alt="cover"
              />
              <ReactMarkdown className="prose prose-img:rounded-xl prose-img:border prose-img:border-gray-900/10 prose-img:w-full max-w-none">
                {modifiedContent}
              </ReactMarkdown>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PostContent;

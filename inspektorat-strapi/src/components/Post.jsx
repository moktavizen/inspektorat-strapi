/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BASE_URL from "../services/apiConfig";

function Post({ post, scrollPosition }) {
  const { attributes, id } = post;
  const { cover, title, createdAt, slug } = attributes;

  function formatDate(dateTimeString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(dateTimeString);
    return date.toLocaleDateString("id-ID", options);
  }

  return (
    <Link to={`/post/${id}/${slug}`}>
      <div className="bg-primary overflow-hidden shadow-md rounded-lg max-w-[384px] hover:shadow-2xl border border-primary">
        <LazyLoadImage
          effect="blur"
          className="w-[384px] aspect-video object-cover"
          scrollPosition={scrollPosition}
          src={`${BASE_URL}${
            cover.data.attributes.formats.small?.url ||
            cover.data.attributes.url
          }`}
        />
        <div className="pt-1 pb-3 px-3">
          <h3 className="font-semibold text-sm lg:text-xl mb-1 md:mb-3 line-clamp-2 md:min-h-[56px]">
            {title}
          </h3>
          <div className="text-sm lg:text-lg md:mb-1">
            Diterbitkan:{" "}
            <span className="whitespace-nowrap">{formatDate(createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default trackWindowScroll(Post);

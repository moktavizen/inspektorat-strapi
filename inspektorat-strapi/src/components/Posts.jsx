import { Link } from "react-router-dom";
import Post from "./Post";

function Posts({ posts }) {
  const limitedPosts = posts.data.slice(0, 3);

  return (
    <section className="posts">
      <div className="my-container text-center">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800">
          Kegiatan
        </h2>
        <div
          className={`${
            limitedPosts.length > 2
              ? "grid grid-cols-1 md:grid-cols-3 place-items-center"
              : "flex flex-col md:flex-row w-fit mx-auto"
          } text-white text-start my-7 md:my-9 gap-3 md:gap-8`}
        >
          {limitedPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
        <Link to="/all-post">
          <button className="btn bg-neutral800 text-white hover:bg-neutral800/80">
            Selengkapnya
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Posts;

import Post from "./Post";

function AllPosts({ posts }) {
  return (
    <section className="bg-gray-50">
      <div className="my-container text-center">
        <h2 className="font-bold text-2xl lg:text-4xl text-neutral800">
          Semua Kegiatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 text-white text-start mt-7 md:mt-9">
          {posts.data.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllPosts;

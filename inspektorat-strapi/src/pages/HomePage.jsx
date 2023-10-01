import About from "../components/About";
import Contact from "../components/Contact";
import Docs from "../components/Docs";
import Hero from "../components/Hero";
import Job from "../components/Job";
import Posts from "../components/Posts";
import Services from "../components/Services";

function HomePage({ posts, contact, services }) {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Job />
      <About />
      <Services services={services} />
      <Docs />
      <Posts posts={posts} />
      <Contact contact={contact} />
    </div>
  );
}

export default HomePage;

import HomePage from "./pages/HomePage";
import PostContentPage from "./pages/PostContentPage";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AllPostPage from "./pages/AllPostPage";
import AboutPage from "./pages/AboutPage";
import DocumentsPage from "./pages/DocumentsPage";
import BASE_URL from "./services/apiConfig";

export default function App() {


  const {
    loading: loadingPost,
    error: errorPost,
    data: dataPost,
  } = useFetch(
    `${BASE_URL}/api/posts?populate=*&sort=createdAt:desc&pagination[pageSize]=9999`
  );

  const {
    loading: loadingContact,
    error: errorContact,
    data: dataContact,
  } = useFetch(`${BASE_URL}/api/contact?populate=*`);

  const {
    loading: loadingService,
    error: errorService,
    data: dataService,
  } = useFetch(`${BASE_URL}/api/services?populate=*`);

  const {
    loading: loadingProfile,
    error: errorProfile,
    data: dataProfile,
  } = useFetch(`${BASE_URL}/api/profile?populate=*`);

  const {
    loading: loadingDocs,
    error: errorDocs,
    data: dataDocs,
  } = useFetch(`${BASE_URL}/api/documents?populate=*&pagination[pageSize]=9999`);

  const {
    loading: loadingStaffs,
    error: errorStaffs,
    data: dataStaffs,
  } = useFetch(`${BASE_URL}/api/staffs?populate=*&pagination[pageSize]=9999`);

  const {
    loading: loadingLink,
    error: errorLink,
    data: dataLink,
  } = useFetch(`${BASE_URL}/api/tautans?populate=*`);

  if (
    loadingPost ||
    loadingContact ||
    loadingService ||
    loadingProfile ||
    loadingDocs ||
    loadingStaffs ||
    loadingLink
  )
    return console.log("Loading data...");
  if (
    errorPost ||
    errorContact ||
    errorService ||
    errorProfile ||
    errorDocs ||
    errorStaffs ||
    errorLink
  )
    return console.log("Error fetching data!");

  return (
    <>
      <Nav services={dataService} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              posts={dataPost}
              contact={dataContact}
              services={dataService}
            />
          }
        ></Route>
        <Route
          path="/documents"
          element={<DocumentsPage documents={dataDocs} />}
        ></Route>
        <Route
          path="/profile"
          element={<AboutPage profile={dataProfile} staffs={dataStaffs} />}
        ></Route>
        <Route
          path="/all-post"
          element={<AllPostPage posts={dataPost} />}
        ></Route>
        <Route
          path="/post/:id/:slug"
          element={<PostContentPage posts={dataPost} />}
        ></Route>
      </Routes>
      <Footer contact={dataContact} links={dataLink} />
    </>
  );
}

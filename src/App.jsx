import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header.jsx";

const Home = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));
const Cast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));
const Reviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews.jsx")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

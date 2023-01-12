import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../components/Main";

export default function Home({ movies }) {
  const [page, setPage] = useState([]);
  const [lastPage, setLastPage] = useState();
  const [count, setCount] = useState(1);

  /*   async function getData() {
    const res = await axios(
      `https://api.cinerama.uz/api-test/movie-list?page=${count}&items=10`
    );
    const movies = res.data.data.movieList;
    setLastPage(res.data.data.lastPage);
    setPage(movies);
  } */

  /*  useEffect(() => {
    getData();
  }, [count]);
 */
  return (
    <div className="bg-gray-700">
      <Main movies={movies.data.movieList} />
      <div className="flex justify-center">
        {count === 1 ? (
          ""
        ) : (
          <button
            onClick={() => setCount(count - 1)}
            className="bg-white px-2 py-1"
          >
            {"<<"}
          </button>
        )}

        <span className="bg-white px-2 py-1">{count}</span>
        {count === lastPage ? (
          ""
        ) : (
          <button
            onClick={() => setCount(count + 1)}
            className="bg-white px-2 py-1"
          >
            {">>"}
          </button>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    "https://api.cinerama.uz/api-test/movie-list?&items=10"
  );
  const movies = res.data;
  return {
    props: { movies },
  };
}

/* **`https://api.cinerama.uz/api-test/movie-list?page=1&items=20`** */

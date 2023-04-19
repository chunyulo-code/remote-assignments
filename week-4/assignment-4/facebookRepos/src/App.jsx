import { useState, useEffect, useRef } from "react";
import Repo from "./components/Repo";
import "./styles/app.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
  const newReposRef = useRef(null);

  const repoElements = repos.map((repo, index) => {
    return <Repo repo={repo} key={index} />;
  });

  async function fetchRepos() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (page == 1) {
        setRepos(data);
      } else {
        setRepos((prev) => [...prev, ...data]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function getMoreRepos() {
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    fetchRepos();
  }, [page]);

  return (
    <div className="main">
      <div className="repos" ref={newReposRef}>
        {repoElements}
      </div>
      <div>
        <button className="moreButton" onClick={getMoreRepos}>
          More
        </button>
      </div>
    </div>
  );
}

export default App;

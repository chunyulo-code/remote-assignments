import { useState, useEffect } from "react";
import Repo from "./components/Repo";
import "./styles/app.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [repoCounts, setRepoCounts] = useState(5);
  const url = `https://api.github.com/orgs/facebook/repos?per_page=${repoCounts}&page=1`;

  const repoElements = repos.map((repo, index) => {
    return <Repo repo={repo} key={index} />;
  });

  function getMoreRepos() {
    setRepoCounts((prevCount) => prevCount + 5);
  }

  async function fetchRepos() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchRepos();
  }, [repoCounts, url]);

  return (
    <div className="main">
      <div className="repos">{repoElements}</div>
      <div>
        <button className="moreButton" onClick={getMoreRepos}>
          More
        </button>
      </div>
    </div>
  );
}

export default App;

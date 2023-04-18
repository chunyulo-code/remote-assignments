import React, { useState, useEffect } from "react";

function Repo({ repo }) {
  const repoTopics = (
    <div className="topics">
      {repo.topics.map((topic) => (
        <span className="topic">{topic}</span>
      ))}
    </div>
  );

  return (
    <div className="repo">
      <div className="row-1">
        <a href={repo.html_url} className="repoName">
          {repo.name}
        </a>
        <span className="repoStatus">
          {repo.private ? "Private" : "Public"}
        </span>
      </div>
      <p className="repoDesc">{repo.description}</p>
      {!!repo.topics.length && repoTopics}
    </div>
  );
}

export default Repo;

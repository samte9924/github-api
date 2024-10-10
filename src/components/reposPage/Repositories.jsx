import "../../styles/reposPage/Repositories.css";

function Repositories({ repos }) {
  return (
    <div className="repos-list">
      {repos.length === 0 ? (
        <div>No repository was found</div>
      ) : (
        repos.map((repo) => (
          <div key={repo.id} className="repo">
            {repo.name} {repo.description || "none"} {repo.stargazers_count}{" "}
            {repo.language}
          </div>
        ))
      )}
    </div>
  );
}

export default Repositories;

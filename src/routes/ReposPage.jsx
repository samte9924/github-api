import "../styles/reposPage/ReposPage.css";
import { useEffect, useState } from "react";
import Repositories from "../components/reposPage/Repositories";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

function ReposPage() {
  const { username, page } = useParams();
  const navigate = useNavigate();

  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const reposPerPage = 6;
  const offset = Number(page) == 0 ? 0 : reposPerPage * (Number(page) - 1);
  const renderedRepos = page == 0 ? 6 : reposPerPage * Number(page);
  const prevPage = Number(page) - 1;
  const nextPage = Number(page) + 1;

  useEffect(() => {
    const fetchUserRepositories = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Error fetching user's repositories.");
        }

        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserRepositories();
  }, [username]);

  const goToPrevPage = () => {
    navigate(`/users/${username}/repos/${prevPage}`);
  };

  const goToNextPage = () => {
    navigate(`/users/${username}/repos/${nextPage}`);
  };

  return (
    <>
      {!isLoading && repos ? (
        <div className="repos-wrapper">
          <Repositories
            repos={repos.slice(
              offset,
              repos.length < renderedRepos ? repos.length : renderedRepos
            )}
          />
          <div className="pagination">
            <button
              onClick={goToPrevPage}
              disabled={page - 1 <= 0}
              className="previous"
            >
              Prev
            </button>
            <button
              onClick={goToNextPage}
              disabled={repos.length < renderedRepos}
              className="next"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ReposPage;

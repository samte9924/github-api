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
  const offset = page == 0 ? 0 : reposPerPage * (page - 1);
  const renderedRepos = page == 0 ? 6 : reposPerPage * page;
  const prevPage = page - 1;
  const nextPage = page + 1;

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
    navigate(`users/${username}/repos/${prevPage}`);
  };

  const goToNextPage = () => {
    navigate(`users/${username}/repos/${nextPage}`);
  };

  return (
    <>
      {!isLoading && repos ? (
        <>
          <Repositories
            repos={repos.slice(
              offset,
              repos.length < renderedRepos ? repos.length : renderedRepos
            )}
          />
          <div>
            <button onClick={goToPrevPage} disabled={page - 1 <= 0}>
              Prev
            </button>
            <button
              onClick={goToNextPage}
              disabled={repos.length < renderedRepos}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ReposPage;

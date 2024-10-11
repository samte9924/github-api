import "../styles/reposPage/ReposPage.css";
import { useEffect, useState } from "react";
import Repositories from "../components/reposPage/Repositories";
import Spinner from "../components/global/Spinner";
import Pagination from "../components/global/Pagination";
import { useNavigate, useParams } from "react-router-dom";

function ReposPage() {
  const { username, page } = useParams();
  const navigate = useNavigate();

  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /*
    < How the pagination works >

    - A page loads a maximum of 6 repos.
    - When the page has an invalid value, 
    "No repository was found" will show up
    - To calculate the range of repos to load from the "repos" array,
    the slice() method is used. By doing this, it is possible to retrieve
    the necessary repos without having to fetch them every time.
    - "Next Page" will be disabled when repos.length < renderedRepos.

    e.g page = 2
    offset = 6 * (2 - 1) = 6
    renderedRepos = 6 * 2 = 12
    The range goes from 6 to 12 in the repos array.

    If the array size is < renderedRepos then renderedRepos = array size.
    This is because if the array size doesn't exceed the maximum number of
    repos, then there won't be a new page and the new maximum number is set
    to be the array length.

  */
  const reposPerPage = 6;
  const offset = reposPerPage * (Number(page) - 1);
  const renderedRepos = reposPerPage * Number(page);

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

  const handlePageChange = (newPage) => {
    navigate(`/users/${username}/repos/${newPage}`);
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
          <Pagination
            currentPage={Number(page)}
            totalPages={Math.ceil(repos.length / reposPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ReposPage;

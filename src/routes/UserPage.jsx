import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../components/userPage/Profile";
import Spinner from "../components/Spinner";

function UserPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
          },
        });
        if (!res.ok) {
          throw new Error("Error fetching user.");
        }

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  const handleClick = () => {
    navigate(`/users/${username}/repos/1`);
  };

  const showRecentActivities = () => {
    navigate(`/users/${username}/events`);
  };

  return (
    <>
      {!isLoading && user ? (
        <Profile
          user={user}
          onClick={handleClick}
          showRecentActivities={showRecentActivities}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default UserPage;

import "../../styles/userPage/Profile.css";
import { IoMdPeople } from "react-icons/io";

function Profile({ user, onClick, showRecentActivities }) {
  return (
    <div className="card">
      <div className="card-header">
        <h1>{user.login}</h1>
        <img src={user.avatar_url} alt="avatar" />
      </div>
      <div className="card-body">
        <h3>{user.bio}</h3>
        <p>
          <IoMdPeople />
          <span>Followers: {user.followers}</span> |{" "}
          <span>Following: {user.following}</span>
        </p>
        <div>
          <span>Public repositories: {user.public_repos}</span>
          <button onClick={onClick}>See more</button>
        </div>
        <button onClick={showRecentActivities}>Attività recenti</button>
      </div>
    </div>
  );
}

export default Profile;

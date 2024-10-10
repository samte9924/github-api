import "../../styles/userPage/Profile.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function Profile({ user, onClick, showRecentActivities }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h1>{user.login}</h1>
          <div className="links">
            <a href={user.html_url} target="_blank" className="github-link">
              <SiGithub size={32} />
            </a>
          </div>
        </div>
        <img src={user.avatar_url} alt="avatar" />
      </div>
      <div className="card-body">
        <p>{user.bio || "Empty bio."}</p>
        <h3>
          <IoMdPeople size={20} />
          <span>
            Followers: {user.followers} - Following: {user.following}
          </span>
        </h3>
        <div>
          <h3>
            <GoRepo size={20} />
            <span>Public repositories: {user.public_repos}</span>
          </h3>
          <button onClick={onClick}>
            <BsBoxArrowUpRight size={20} />
          </button>
        </div>
        <button onClick={showRecentActivities} style={{ gap: "0.5rem" }}>
          <FiActivity size={20} />
          <span>Eventi recenti</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;

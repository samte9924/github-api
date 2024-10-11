import "../../styles/root/Breadcrumbs.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";

function Breadcrumbs() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const urlParams = location.pathname.slice(1).split("/");

  const buildBreadcrumbUrl = (index) => {
    const url = urlParams.slice(0, index).join("/");
    return url;
  };

  const navigateToUrl = (url) => {
    navigate(url);
  };

  return (
    <div className="breadcrumbs">
      {urlParams.map((param, index) => (
        <React.Fragment key={index}>
          <span>/</span>
          {Object.values(params).includes(param) ? (
            <span
              onClick={() => navigateToUrl(buildBreadcrumbUrl(index + 1))}
              className="breadcrumb"
            >
              {param}
            </span>
          ) : (
            <span>{param}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumbs;

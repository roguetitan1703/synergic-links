import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link to="/" className="hover:text-gray-700">
        Home
      </Link>
      {pathnames.length > 0 && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="w-4 h-4 text-gray-400"
        />
      )}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <div key={to} className="flex items-center space-x-2">
            <Link
              to={to}
              className={`hover:text-gray-700 ${
                isLast ? "text-gray-700 font-medium" : ""
              }`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
            {!isLast && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-4 h-4 text-gray-400"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

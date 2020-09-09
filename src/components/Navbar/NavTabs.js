import React from "react";

function NavTabs(props) {
  return (
   
   
      <ul className="nav nav-tabs  bg-dark w-100">
         <h2 className="my-name mr-auto"> Logo</h2>
          <li className="nav-item">
        <a
          href="home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
         <li className="nav-item">
        <a
          href="about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About us
        </a>
      </li>
        <li className="nav-item">
        <a
          href="sponsors"
          onClick={() => props.handlePageChange("sponsors")}
          className={props.currentPage === "Sponsors" ? "nav-link active" : "nav-link"}
        >
          Sponsors
        </a>
      </li>
    
    
     
      </ul>

  );
}

export default NavTabs;

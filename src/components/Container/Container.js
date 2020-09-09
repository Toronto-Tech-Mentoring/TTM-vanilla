import React, { Component } from "react";
import NavTabs from "../Navbar/NavTabs";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About"
import Sponsors from "../../pages/Sponsors/Sponsors"



class Container extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
    renderPage = () => {
      if (this.state.currentPage === "home") {
        return <Home />;
      } else if (this.state.currentPage === "about") {
        return <About/>;
      } else{
        return <sponsors />;
      } 
    };

  render() {
    return (
      <div className={"wrapper " +this.state.backgroundClass}>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Container;
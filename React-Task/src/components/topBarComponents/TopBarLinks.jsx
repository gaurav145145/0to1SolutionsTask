import React from "react";
import { NavLink } from "react-router-dom";
import { TopBarLinkTypes } from "../../constants";

class TopBarLinks extends React.Component {
  componentDidMount() {
    this.setState({
      active: window.location.href
    });
  }
  state = {
    active: ""
  };

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        {TopBarLinkTypes.map(link => {
          return (
            <li
              className={
                this.state.active.includes(link.path) ? "active" : null
              }
            >
              <NavLink
                onClick={() => this.setState({ active: link.path })}
                to={link.path}
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TopBarLinks;

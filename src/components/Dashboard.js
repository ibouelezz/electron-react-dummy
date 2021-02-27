import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  handleLogin = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="active item">
            Home
          </Link>
          <a className="item">Messages</a>
          <a className="item">Friends</a>
          <div className="right menu">
            <Link to="/login" className="ui item" onClick={this.handleLogin}>
              Login
            </Link>
          </div>
        </div>
        <div className="ui segment">
          <p></p>
        </div>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;

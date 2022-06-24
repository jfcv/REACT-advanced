import React, { Component } from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import MoviePage from "./context/MoviePage";
import Login from "./context/Login";
import UserContext from "./context/userContext";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log(`Getting the username: ${username}`);
    const currentUser = { name: "Mosh" };
    this.setState({ currentUser });
  };

  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <MoviePage />
        <Login />
      </UserContext.Provider>
    );
  }
}

export default App;

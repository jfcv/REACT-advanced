import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const context = useContext(UserContext);
  console.log(context);
  return <div>Movie Row</div>;
}

export default MovieRow;

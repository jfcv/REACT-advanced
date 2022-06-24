import { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {" "}
        {name} has clicked {count} times!
      </div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </Fragment>
  );
};

export default Counter;

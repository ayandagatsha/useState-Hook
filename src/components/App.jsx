import React from "react";

function App() {
  // const state = React.useState(3);
  const [count, setCount] = React.useState(0);


  function increase() {
    // count++;
setCount(count +1)
    // console.log(state);
  }

  function decrease() {
    // count++;
setCount(count -1)
    // console.log(state);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;

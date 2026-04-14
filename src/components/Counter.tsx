import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decremnet = () => setCount(count + 1);
  const reset = () => setCount(0);
  const styles = {
    container: {
      display: "flex",
      gap: 5,
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Counter
        <button>{count}</button>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decremnet}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;

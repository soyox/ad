import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(1);
  return (
    <div>
      <h1 className="title">Hi React({num})</h1>
      <button onClick={() => setnum((num) => num + 1)}>add</button>
    </div>
  );
};

export default App;

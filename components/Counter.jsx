import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="section">
      <h2>Simple JavaScript Project</h2>
      <p>This is a simple JavaScript counter project.</p>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)} className="btn">Increase</button>
      <button onClick={() => setCount(0)} className="btn">Reset</button>
    </div>
  );
}

export default Counter;
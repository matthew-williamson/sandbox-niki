import { useState } from "react";

const Stopwatch = () => {
  // Finish writing this component, I've given you a small clue/headstart.
  const [time, setTime] = useState(0);
  return (
    <div>
      <h3>Stopwatch</h3>
      {time}
    </div>
  );
};

export default Stopwatch;

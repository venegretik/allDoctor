import { useEffect, useState } from "react";

const Timer = (props) => {
  const [timer, settimer] = useState(props.time ? props.time : 59);

  useEffect(() => {
    const interval = timer > 0 && setInterval(() => settimer(timer - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return <> {timer > 0 ? "через " + timer : ""}</>;
};

export default Timer;

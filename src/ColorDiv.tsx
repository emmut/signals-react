import { useMemo } from "react";

export default function ColorDiv() {
  const randomColor = () =>
    `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;

  const color1 = useMemo(randomColor, []);
  const color2 = useMemo(randomColor, []);

  return (
    <div
      style={{
        backgroundColor: color1,
        color: color2,
      }}
    >
      Did I change color?
    </div>
  );
}

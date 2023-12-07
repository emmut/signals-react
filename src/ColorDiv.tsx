const randomColor = () =>
  `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;

const color1 = randomColor();
const color2 = randomColor();

export default function ColorDiv() {
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

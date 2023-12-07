export default function ColorDiv() {
  const randomColor = () =>
    `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
  return (
    <div
      style={{
        backgroundColor: randomColor(),
        color: randomColor(),
      }}
    >
      Did I change color?
    </div>
  );
}

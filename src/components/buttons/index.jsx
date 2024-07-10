import "./index.css";

export default function Button({ text, ...args }) {
  return (
    <button {...args} className="button">
      {text}
    </button>
  );
}

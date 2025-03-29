/* eslint-disable react/prop-types */
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="btn-primary">
      {children}
    </button>
  );
}

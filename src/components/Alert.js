export default function Alert({ type, header, children }) {
  return (
    <div className={`alert alert-${type}`}>
      <h4>{header}</h4>
      {children}
    </div>
  );
}

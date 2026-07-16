export default function Container({ children, className = "", maxWidth = "1200px" }) {
  return (
    <div className={`mx-auto px-5 ${className}`} style={{ maxWidth }}>
      {children}
    </div>
  );
}

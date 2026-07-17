export default function Container({
  children,
  className = "",
  rightGutter = true,
  maxWidth,
}) {
  const gutterClasses = rightGutter
    ? "px-5 sm:px-8 lg:px-20"
    : "pl-5 pr-0 sm:pl-8 lg:pl-20";

  return (
    <div
      className={`mx-auto ${gutterClasses} ${className}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {children}
    </div>
  );
}

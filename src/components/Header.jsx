export function Header({ children }) {
  let title = children;
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

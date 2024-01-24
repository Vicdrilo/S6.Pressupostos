export function Summary({ children }) {
  return (
    <div className="sum-container">
      <h1 className="sum-h1-preu-total">Preu pressupostat: {children}€</h1>
    </div>
  );
}

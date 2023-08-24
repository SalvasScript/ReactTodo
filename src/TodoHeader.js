import "./css/Todoheader.css";
function Todoheader(props) {
  return (
    <div className="header">
      <h1 className="header__title">Mercado</h1>
      <h2 className="header__account">
        Has completado <span className="header__bold">{props.completed}</span>{" "}
        de <span className="header__bold">{props.total}</span> TODOs
      </h2>
    </div>
  );
}

export { Todoheader };

import "./css/Todosearch.css";

function Todosearch(props) {
  return (
    <div className="search">
      <label className="search__label" htmlFor="searchlabel">
        Buscar
      </label>
      <input
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
        className="search__input"
        placeholder="Cortar cebolla"
        id="searchlabel"
        value={props.searchValue}
      />
    </div>
  );
}

export { Todosearch };

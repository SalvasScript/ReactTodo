import React from "react";
import { ReactComponent as CheckSvg } from "./img/Check.svg";
import { ReactComponent as DeleteSvg } from "./img/Delete.svg";

const icons = {
  check: CheckSvg,
  delete: DeleteSvg,
};

function IconTodo({ type }) {
  const IconComponent = icons[type]; // Obtén el componente de acuerdo al tipo

  return <IconComponent />; // Renderiza el componente
}

export { IconTodo };

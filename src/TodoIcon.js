import { ReactComponent as CheckSVG } from "./img/Check.svg";
import { ReactComponent as DeleteSVG } from "./img/Delete.svg";

const iconTypes = {
  check: <CheckSVG />,
  delete: <DeleteSVG />,
};

function TodoIcon({ type }) {
  return <>{iconTypes[type]}</>;
}

export { TodoIcon };

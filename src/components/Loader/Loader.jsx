import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const ComponentLoader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="#2196f3" />
    </div>
  );
};

export default ComponentLoader;

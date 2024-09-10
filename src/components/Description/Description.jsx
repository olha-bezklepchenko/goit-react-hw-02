import css from "./Description.module.css";
import { IoCafe } from "react-icons/io5";

const Description = () => {
  return (
    <div className={css.description}>
      <h1 className={css.title}>
        Sip Happens Café <IoCafe className={css.icon} size="60" />
      </h1>

      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;

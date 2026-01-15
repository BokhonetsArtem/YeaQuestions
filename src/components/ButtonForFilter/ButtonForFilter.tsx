import { useState, type ReactNode } from "react";
import styles from "./ButtonForFilter.module.css";

interface ButtonForFilterProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonForFilter = ({ children, onClick }: ButtonForFilterProps) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prevState) => !prevState);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={
        selected
          ? `${styles.button} ${styles.buttonActive}`
          : `${styles.button}`
      }
    >
      {children}
    </button>
  );
};

export default ButtonForFilter;

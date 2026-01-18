import { type ReactNode } from "react";
import styles from "./ButtonForFilter.module.css";

interface ButtonForFilterProps {
  children: ReactNode;
  onClick: () => void;
  selected: boolean;
}

const ButtonForFilter = ({
  children,
  onClick,
  selected,
}: ButtonForFilterProps) => {
  const handleClick = () => {
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

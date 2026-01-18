import { QuestionsList } from "@/3_widgets/QuestionsList";
import styles from "./MainPage.module.css";
import { Filters } from "@/3_widgets/Filters";

const MainPage = () => {
  return (
    <div className={styles.content}>
      <QuestionsList />
      <Filters />
    </div>
  );
};

export default MainPage;

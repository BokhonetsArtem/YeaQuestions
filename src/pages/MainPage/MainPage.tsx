import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Filters from "../../components/Filters/Filters";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.content}>
      <QuestionsList />
      <Filters />
    </div>
  );
};

export default MainPage;

import QuestionInfo from "../../components/QuestionInfo/QuestionInfo";
import QuestionSidebar from "../../components/QuestionSidebar/QuestionSidebar";
import styles from "./QuestionDetails.module.css";

const QuestionDetails = () => {
  return (
    <div className={styles.content}>
      <QuestionInfo />
      <QuestionSidebar />
    </div>
  );
};

export default QuestionDetails;

import ButtonBack from "../../components/ButtonBack/ButtonBack";
import QuestionInfo from "../../components/QuestionInfo/QuestionInfo";
import QuestionSidebar from "../../components/QuestionSidebar/QuestionSidebar";
import { useParams, Link } from "react-router-dom";
import { useGetQuestionByIdQuery } from "../../store/services/questionApi";
import styles from "./QuestionDetails.module.css";
import Loading from "../../components/Loading/Loading";

const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: question, isLoading } = useGetQuestionByIdQuery(id ?? "", {
    skip: !id,
  });

  if (isLoading || !question) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <Link to={"/"}>
        <ButtonBack />
      </Link>

      <div className={styles.content}>
        <QuestionInfo question={question} />
        <QuestionSidebar question={question} />
      </div>
    </div>
  );
};

export default QuestionDetails;

import { useParams, Link } from "react-router-dom";
import styles from "./QuestionDetails.module.css";
import { useGetQuestionByIdQuery } from "@/5_entities/question";
import { ButtonBack, Loading } from "@/6_shared/UI";
import { QuestionInfo } from "@/3_widgets/QuestionInfo";
import { QuestionSidebar } from "@/3_widgets/QuestionSidebar";

const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: question, isLoading } = useGetQuestionByIdQuery(id ?? "", {
    skip: !id,
  });

  return (
    <div className={styles.wrapper}>
      <Link to={"/"}>
        <ButtonBack />
      </Link>

      <div className={styles.content}>
        {isLoading || !question ? (
          <Loading />
        ) : (
          <>
            <QuestionInfo question={question} />
            <QuestionSidebar question={question} />
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionDetails;

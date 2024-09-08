import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "../cards/AnswerCard";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

async function AnswersTab({ searchParams, userId, clerkId }: Props) {
  const result = await getUserAnswers({ userId, page: 1 });
  return (
    <>
      {result?.answers.map((items) => (
        <AnswerCard
          key={items._id}
          clerkId={clerkId}
          _id={items._id}
          question={items.question}
          author={items.author}
          upvotes={items.upvotes}
          createdAt={items.createdAt}
        />
      ))}
    </>
  );
}

export default AnswersTab;

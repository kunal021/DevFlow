import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "../cards/AnswerCard";
import Pagination from "./Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

async function AnswersTab({ searchParams, userId, clerkId }: Props) {
  const result = await getUserAnswers({
    userId,
    page: searchParams?.page ? +searchParams?.page : 1,
  });
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
      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams?.page : 1}
          isNext={result?.isNext!}
        />
      </div>
    </>
  );
}

export default AnswersTab;

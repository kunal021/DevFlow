import { getUserQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import QuestionCard from "../cards/QuestionCard";
import Pagination from "./Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

async function QuestionsTab({ searchParams, userId, clerkId }: Props) {
  const result = await getUserQuestions({
    userId,
    page: searchParams?.page ? +searchParams?.page : 1,
  });
  return (
    <>
      {result?.questions.map((items) => (
        <QuestionCard
          key={items._id}
          _id={items._id}
          clerkId={clerkId!}
          title={items.title}
          tags={items.tags}
          author={items.author}
          upvotes={items.upvotes}
          views={items.views}
          answers={items.answers}
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

export default QuestionsTab;

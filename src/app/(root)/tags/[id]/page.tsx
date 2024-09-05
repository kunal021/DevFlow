import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { getQuestionsByTagId } from "@/lib/actions/tag.action";
import { URLProps } from "@/types";

async function Page({ params, searchParams }: URLProps) {
  const result = await getQuestionsByTagId({
    tagId: params.id,
    searchQuery: searchParams.q,
  });
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result?.tagTitle}</h1>

      <div className="mt-11 w-full">
        <LocalSearch
          route={"/"}
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
      </div>

      <div className="mt-6 flex w-full flex-col gap-6">
        {result && result.questions.length > 0 ? (
          result?.questions.map((items: any) => (
            <QuestionCard
              key={items._id}
              _id={items._id}
              title={items.title}
              tags={items.tags}
              author={items.author}
              upvotes={items.upvotes}
              views={items.views}
              answers={items.answers}
              createdAt={items.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no tag question saved to show"
            description="Be the first to break the silence! 🚀 Ask a question and kickstart the
              discussion. Our query could be the next big thing others learn from. Get
              Involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}

export default Page;

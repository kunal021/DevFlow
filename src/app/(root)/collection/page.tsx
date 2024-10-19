import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { QuestionFilters } from "@/constants/filter";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";

async function Collection({ searchParams }: SearchParamsProps) {
  const { userId } = auth();
  if (!userId) return null;
  const result = await getSavedQuestions({
    clerkId: userId,
    searchQuery: searchParams?.q,
    filter: searchParams?.filter,
    page: searchParams?.page ? +searchParams?.page : 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div className="mt-6 flex justify-between gap-3 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={"/"}
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={QuestionFilters}
          otherClass="min-h-[56px] sm:min-w-[176px]"
          // containerClass="hidden max-md:flex"
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
            title="There's no question saved to show"
            description="Be the first to break the silence! 🚀 Ask a question and kickstart the
              discussion. Our query could be the next big thing others learn from. Get
              Involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams?.page : 1}
          isNext={result?.isNext!}
        />
      </div>
    </>
  );
}

export default Collection;

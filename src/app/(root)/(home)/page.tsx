import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import HomeFilter from "@/components/shared/home/HomeFilter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import { getQuestions } from "@/lib/actions/question.action";
import { SearchParamsProps } from "@/types";
import Link from "next/link";

async function Home({ searchParams }: SearchParamsProps) {
  const result = await getQuestions({ searchQuery: searchParams?.q });
  // console.log(result);
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !test-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-6 flex justify-between gap-3 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={"/"}
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClass="min-h-[56px] sm:min-w-[176px]"
          containerClass="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-6 flex w-full flex-col gap-6">
        {result && result.questions.length > 0 ? (
          result?.questions.map((items) => (
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
            title="There's no question to show"
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

export default Home;

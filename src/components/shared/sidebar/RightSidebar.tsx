import Image from "next/image";
import Link from "next/link";
import RenderTags from "../RenderTags";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getPopularTags } from "@/lib/actions/tag.action";

async function RightSidebar() {
  const hotQuestions = await getHotQuestions();
  const popularTags = await getPopularTags();
  return (
    <section className="background-light900_dark200 flex flex-col gap-16 light-border sticky top-0 right-0 h-screen overflow-y-auto border-l p-4 pt-24 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[300px] custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col w-full gap-[30px]">
          {hotQuestions?.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron right"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex flex-col mt-6 gap-4">
          {popularTags?.map((tag: any) => (
            <RenderTags
              key={tag._id}
              _id={tag._id.toString()}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;

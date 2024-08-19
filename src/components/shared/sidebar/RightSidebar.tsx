import Image from "next/image";
import Link from "next/link";
import RenderTags from "../RenderTags";

function RightSidebar() {
  const hotQuestions = [
    {
      _id: 1,
      title: "How do I express as a custom server in NextJS?",
    },
    {
      _id: 2,
      title: "Cascading Delets in SQLAlchemy?",
    },
    {
      _id: 3,
      title: "How to perfectly center a div using Tailwind CSS?",
    },
    {
      _id: 4,
      title:
        "Best practices for data fetching in a NextJS application with Server-Side Rendering (SSR)?",
    },
    {
      _id: 5,
      title: "Redux Toolkit not updating state as expected?",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "ReactJS",
      totalQuestions: 10,
    },
    {
      _id: 2,
      name: "JavaScript",
      totalQuestions: 12,
    },
    {
      _id: 3,
      name: "NextJS",
      totalQuestions: 5,
    },
    {
      _id: 4,
      name: "VueJS",
      totalQuestions: 8,
    },
    {
      _id: 5,
      name: "SQL",
      totalQuestions: 2,
    },
  ];
  return (
    <section className="background-light900_dark200 flex flex-col gap-16 light-border sticky top-0 right-0 h-screen overflow-y-auto border-l p-4 pt-24 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[300px] custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col w-full gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
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
          {popularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id.toString()}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;

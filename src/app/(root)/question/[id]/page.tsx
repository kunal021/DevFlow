import AllAnswers from "@/components/shared/AllAnswers";
import Answer from "@/components/shared/form/Answer";
import Metric from "@/components/shared/Metric";
import ParseHTML from "@/components/shared/ParseHTML";
import RenderTags from "@/components/shared/RenderTags";
import Votes from "@/components/shared/Votes";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function page({ params }: { params: { id: string } }) {
  const result = await getQuestionById({ questionId: params.id });
  const { userId: clerkId } = auth();

  let mongoUser;
  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:text-center sm:gap-2">
          <Link
            href={`/profile/${result?.author?.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result?.author?.picture}
              alt={"profile"}
              width={22}
              height={22}
              className="rounded-full"
            />
            <p className="paragraph-semibold text-dark300_loght700">
              {result?.author?.name}
            </p>
          </Link>
          <div className="flex justify-end">
            <Votes />
          </div>
        </div>
        <h2 className="h2-bold text-dark200_light900 mt-3.5 w-full text-left">
          {result?.title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl={"/assets/icons/clock.svg"}
          alt={"clock"}
          value={` asked ${getTimeStamp(result?.createdAt)}`}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl={"/assets/icons/message.svg"}
          alt={"messages"}
          value={formatNumber(result?.answers?.length)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl={"/assets/icons/eye.svg"}
          alt={"eyes"}
          value={formatNumber(result?.views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
      <ParseHTML data={result?.content} />
      <div className="mt-8 flex flex-wrap gap-2">
        {result?.tags &&
          result?.tags?.map((tag: any) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              showCount={false}
            />
          ))}
      </div>

      <AllAnswers
        questionId={result?._id}
        userId={mongoUser?._id}
        totalAnswers={result?.answers?.length}
      />

      <Answer
        question={result?.content}
        questionId={JSON.stringify(result?._id)}
        authorId={JSON.stringify(mongoUser?._id)}
      />
    </>
  );
}

export default page;

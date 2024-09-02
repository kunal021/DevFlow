import { AnswerFilters } from "@/constants/filter";
import Filter from "./Filter";
import { getAnswers } from "@/lib/actions/answer.action";
import Link from "next/link";
import Image from "next/image";
import { getTimeStamp } from "@/lib/utils";
import ParseHTML from "./ParseHTML";
import Votes from "./Votes";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: string;
  page?: number;
  filter?: number;
}

async function AllAnswers({
  questionId,
  userId,
  totalAnswers,
  page,
  filter,
}: Readonly<Props>) {
  const result = await getAnswers({ questionId });
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">{totalAnswers} Answers</h3>
        <Filter filters={AnswerFilters} />
      </div>
      <div>
        {result?.answers &&
          result.answers.map((answer) => (
            <div
              key={answer._id}
              className="light-border border-b py-10 w-full"
            >
              <div className="flex items-center justify-between w-full">
                <div className="w-full mb-8 flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center sm:gap-2">
                  <Link
                    href={`/profile/${answer?.author?.clerkId}`}
                    className="flex flex-1 items-start gap-1 sm:items-center"
                  >
                    <Image
                      src={answer?.author?.picture}
                      alt={"profile"}
                      width={18}
                      height={18}
                      className="rounded-full object-cover max-sm:mt-0.5"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <p className="body-semibold text-dark300_light700">
                        {answer?.author?.name}
                      </p>
                      <p className="small-regular text-dark400_light500 mt-0.5 line-clamp-1">
                        {" "}
                        <span className="max-sm:hidden">-</span> answered{" "}
                        {getTimeStamp(answer?.createdAt)}
                      </p>
                    </div>
                  </Link>
                  <div className="flex justify-end">
                    <Votes
                      type={"Answer"}
                      itemId={JSON.stringify(answer?._id)}
                      userId={JSON.stringify(userId)}
                      upvotes={answer?.upvotes?.length}
                      hasUpvoted={answer?.upvotes?.includes(userId)}
                      downvotes={answer?.downvotes?.length}
                      hasDownvoted={answer?.downvotes?.includes(userId)}
                    />
                  </div>
                </div>
              </div>
              <ParseHTML data={answer?.content} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllAnswers;

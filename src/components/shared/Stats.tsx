import { formatNumber } from "@/lib/utils";
import { BadgeCounts } from "@/types";
import Image from "next/image";

interface StatsCardProps {
  imgUrl: string;
  value: number;
  title: string;
}

const StatsCard = ({ imgUrl, value, title }: StatsCardProps) => {
  return (
    <div className="light-border border background-light900_dark300 flex flex-wrap items-center justify-evenly rounded-md gap-4 p-6 shadow-light-300 dark:shadow-dark-200">
      <Image src={imgUrl} alt={title} width={40} height={40} />
      <div>
        <p className="paragraph-semibold text-dark200_light900">{value}</p>
        <p className="body-medium text-dark400_light700">{title}</p>
      </div>
    </div>
  );
};

interface Props {
  totalQuestions?: number;
  totalAnswers?: number;
  badges?: BadgeCounts;
  reputation?: number;
}

function Stats({ totalQuestions, totalAnswers, badges, reputation }: Props) {
  return (
    <div className="mt-10">
      <h3 className="h3-semibold text-dark300_light900">
        Stats - {reputation}
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div className="light-border border background-light900_dark300 flex flex-wrap items-center justify-evenly rounded-md gap-4 p-6 shadow-light-300 dark:shadow-dark-200">
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatNumber(totalQuestions!)}
            </p>
            <p className="body-medium text-dark400_light700">Questions</p>
          </div>
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatNumber(totalAnswers!)}
            </p>
            <p className="body-medium text-dark400_light700">Answers</p>
          </div>
        </div>
        <StatsCard
          imgUrl={"/assets/icons/gold-medal.svg"}
          value={badges?.GOLD || 0}
          title="Gold Badges"
        />
        <StatsCard
          imgUrl={"/assets/icons/silver-medal.svg"}
          value={badges?.SILVER || 0}
          title="Silver Badges"
        />
        <StatsCard
          imgUrl={"/assets/icons/bronze-medal.svg"}
          value={badges?.BRONZE || 0}
          title="Bronze Badges"
        />
      </div>
    </div>
  );
}

export default Stats;

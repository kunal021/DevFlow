import { SearchParamsProps } from "@/types";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

async function AnswersTab({ searchParams, userId, clerkId }: Props) {
  return <div>AnswersTab</div>;
}

export default AnswersTab;

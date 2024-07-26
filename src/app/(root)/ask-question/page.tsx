import Question from "@/components/shared/form/Question";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
}

export default page;

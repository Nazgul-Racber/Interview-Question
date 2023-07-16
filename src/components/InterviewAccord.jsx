import React from "react";
import Question from "./Question";

const InterviewAccord = (props) => {
  const { data } = props;
  console.log("data", props);

  return (
    <div className="row">
      {
        // data.map(item => <Question key={item.id} id={item.id} question={item.quastion} answer={item.answer} />)
        data.map((item) => (
          <Question key={item.id} {...item} />
        )) //import et Q. //Q.da clg ile bak veri gelmişmi.
      }
    </div>
  );
};

export default InterviewAccord;

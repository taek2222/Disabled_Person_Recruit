import React from "react";
import AIimage from "../../../image/ai/ai.png";

const ChatBubble = ({ text, isUser, image }) => (
  <div
    className={`flex items-center ${
      isUser ? "justify-start" : "justify-end"
    } my-2`}
  >
    {isUser && image && (
      <img
        src={image}
        alt="User avatar"
        className="w-12 h-12 rounded-full mr-4"
      />
    )}
    <div
      className={`text-2xl font-bold ${
        isUser ? "text-black" : "text-gray-600"
      }`}
    >
      {text}
    </div>
  </div>
);

const OptionButton = ({ text }) => (
  <button className="bg-white border-2 border-gray-300 rounded-2xl px-6 py-5 text-base font-semibold shadow-sm focus:outline-none hover:border-gray-400 text-gray-400 hover:text-black transition-colors duration-150">
    {text}
  </button>
);

function AI() {
  return (
    <div className="w-max p-12">
      <ChatBubble text="무엇을 도와드릴까요?" isUser image={AIimage} />
      <div className="flex justify-normal items-center my-4 ml-14 gap-4">
        <OptionButton text="학교 성적표와 다르게 학점이 나왔어요" />
        <OptionButton text="자소서 코칭을 받고 싶어요" />
        <OptionButton text="장애유형별 취업 성공 직업이 궁금해요" />
      </div>
    </div>
  );
}

export default AI;

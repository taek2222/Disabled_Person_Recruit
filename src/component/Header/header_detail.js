import React from "react";

import center from "../../image/header/center.png"
import notice from "../../image/header/notice.png"
import event from "../../image/header/event.png"
import question from "../../image/header/question.png"

const HeaderDetail = () => {
    return (
        <div className="flex">
            <div className="flex border-r-2 px-12 py-5">
                <div className="mr-2">
                    <p className="font-bold text-md">채용정보</p>
                    <p className="text-sm mt-5 text-zinc-500 hover:cursor-pointer">장애유형별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">지역별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">직업별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">기업별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">TOP100</p>
                    <div className="flex mt-7">
                        <img src={center} alt="center" className="w-5 h-5" />
                        <p className="text-sm ml-2 text-zinc-500 hover:cursor-pointer">고객센터</p>
                    </div>
                    <div className="flex mt-3">
                        <img src={notice} alt="notice" className="w-5 h-5" />
                        <p className="text-sm ml-2 text-zinc-500 hover:cursor-pointer">공지사항</p>
                    </div>
                    <div className="flex mt-3">
                        <img src={event} alt="event" className="w-5 h-5" />
                        <p className="text-sm ml-2 text-zinc-500 hover:cursor-pointer">이벤트</p>
                    </div>
                </div>
                <div className="ml-20">
                    <p className="font-bold text-md">인재정보</p>
                    <p className="text-sm mt-5 text-zinc-500 hover:cursor-pointer">장애유형별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">전공별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">자격증별</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">학력별</p>
                </div>
                <div className="ml-24 mr-3">
                    <p className="font-bold text-md">기업 • 연봉</p>
                    <p className="text-sm mt-5 text-zinc-500 hover:cursor-pointer">기업리뷰</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">연봉</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">기업분석</p>
                </div>
                <div className="ml-24">
                    <p className="font-bold text-md">커뮤니티</p>
                    <p className="text-sm mt-5 text-zinc-500 hover:cursor-pointer">장애유형별 합격수기</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">직업별 합격수기</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">자소서 멘토링</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">취업특강</p>
                </div>
                <div className="ml-9 mr-28">
                <p className="font-bold text-md">AI pick</p>
                    <p className="text-sm mt-5 text-zinc-500 hover:cursor-pointer">AI 기업 매칭</p>
                    <p className="text-sm mt-3 text-zinc-500 hover:cursor-pointer">AI 톡톡</p>
                </div>
            </div>
            <div className="bg-slate-200">
                <div className="flex mt-5 ml-7 mr-72">
                    <img src={question} alt="question" className="w-10 h-10" />
                    <p className="ml-2 mt-1 font-bold text-lg text-blue-600">굿잡이 처음이신가요?</p>
                </div>
                <p className="text-sm mt-5 ml-20 text-zinc-500 hover:cursor-pointer">직업능력평가</p>
                <p className="text-sm mt-5 ml-20 text-zinc-500 hover:cursor-pointer">학점계산기</p>
                <p className="text-sm mt-5 ml-20 text-zinc-500 hover:cursor-pointer">현직자 인터뷰</p>
                <p className="text-sm mt-5 ml-20 text-zinc-500 hover:cursor-pointer">사이버연수원 바로가기</p>
                <p className="text-sm mt-5 ml-20 text-zinc-500 hover:cursor-pointer">KEAD 디지털능력개발원 바로가기</p>
            </div>
        </div>
    )
}

export default HeaderDetail;
import React from "react";

import goodjob from "../../image/header/goodjob.png";
import search from "../../image/header/search.png";

const header = () => {
    const categories = ["채용정보", "인재정보", "기업•연봉", "커뮤니티", "AI pick"];

    return (
        <header className="sticky top-0 w-full bg-white z-10">
            <div className="space-x-6 pt-3 mb-3 mt-2">
                <div className="flex">
                    <img src={goodjob} alt="goodjob" className="w-44 ml-10" />
                    <div className="flex w-[700px] h-12 mt-4 mx-24 border-4 rounded-md border-blue-600">
                        <input placeholder="기업, 채용공고를 검색해보세요." className="w-[680px] px-3" />
                        <img src={search} alt="search" className="w-10 h-10 hover:cursor-pointer" />
                    </div>
                    <div className="flex mt-7 font-bold">
                        <a href="" className="ml-24"><p>로그인</p></a>
                        <a href="" className="ml-10"><p>회원가입</p></a>
                        <a href="" className="ml-10"><p>기업서비스</p></a>
                    </div>
                </div>
                    <div className="flex mt-7 font-bold text-lg">
                        <a href="" className="ml-6"><p>{categories[0]}</p></a>
                        <a href="" className="ml-20"><p>{categories[1]}</p></a>
                        <a href="" className="ml-20"><p>{categories[2]}</p></a>
                        <a href="" className="ml-20"><p>{categories[3]}</p></a>
                        <a href="" className="ml-20"><p>{categories[4]}</p></a>
                    </div>
                <div>

                </div>
            </div>
            <div className="w-full h-px bg-gray-400 mt-5"></div>
        </header>
    )
}

export default header;
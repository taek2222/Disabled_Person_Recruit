import React, {useState} from "react";

import goodjob from "../../image/header/goodjob.png";
import search from "../../image/header/search.png";
import HeaderDetail from "./header_detail";

const Header = ({ setActiveMainContent }) => {
    const categories = ["채용정보", "인재정보", "기업 • 연봉", "커뮤니티", "AI pick"];
    const components = ["Main", "", "", "", "AI"];
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryToggle = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setActiveMainContent(components[categories.indexOf(category)])
    };

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
                        <p className="ml-24 hover:cursor-pointer">로그인</p>
                        <p className="ml-10 hover:cursor-pointer">회원가입</p>
                        <p className="ml-10 hover:cursor-pointer">기업서비스</p>
                    </div>
                    </div>
                        <div className="flex mt-7 font-bold text-lg">
                            {categories.map((category, index) => (
                                <p 
                                    key={index}
                                    className={`${index > 0 ? 'ml-24' : 'ml-6'} ${selectedCategory === category ? 'text-blue-600' : 'text-black'} hover:text-blue-600 hover:cursor-pointer`}
                                    onMouseEnter={handleCategoryToggle}
                                    onClick={() => {
                                        handleCategoryClick(category);
                                    }}
                                >
                                    {category}
                                </p>
                            ))}
                        </div>
                    <div>

                </div>
            </div>
            <div className="w-full h-px bg-gray-400 mt-5"></div>
            {isCategoryOpen && (
                    <div
                        className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg"
                        onMouseLeave={() => setIsCategoryOpen(false)}
                    >
                        <HeaderDetail />
                    </div>
            )}
        </header>
    )
}

export default Header;
import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import chat from '../../../image/content/chat.png';

const Main = () => {
    const info_categories = ["장애유형별 공고", "지역별 공고", "직업별 공고", "오늘의 HOT 기업", "AI 기업 매칭", "장애인고용장려금"];
    const [selectedCategory, setSelectedCategory] = useState(info_categories[0]);
    const disableTypes = [
        {
            type: '청각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '시각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '청각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '시각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '청각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '시각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '청각 장애인',
            title: '제목',
            content: '내용',
        },
        {
            type: '시각 장애인',
            title: '제목',
            content: '내용',
        },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className="flex mt-10">
                <div className="mx-24">
                    {info_categories.map((info_category, index) => (
                        <p key={index} 
                            className={`text-md font-bold hover:cursor-pointer ${selectedCategory === info_category ? 'text-white p-2 -ml-3 shadow-lg bg-blue-600 rounded-full' : 'hover:text-blue-600'} ${index > 0 ? 'mt-6' : ''}`}
                            onClick={() => handleCategoryClick(info_category)}>
                            {info_category}
                        </p>
                    ))}
                </div>
                <div>
                    {selectedCategory === "장애유형별 공고" && (
                        <Swiper
                            slidesPerView={4}
                            slidesPerGroup={4}
                            scrollbar={true}
                            modules={[Scrollbar]}
                            className='w-[1100px]'
                        >
                            {disableTypes.map((disableType, index) => (
                                <SwiperSlide>
                                    <div key={index} className="flex justify-center mb-8">
                                        <div className="w-[250px] h-[250px] border-2 flex items-center justify-center rounded-3xl shadow-md">
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {selectedCategory === "지역별 공고" && (
                        <p>Content for 지역별 공고</p>
                    )}
                    {selectedCategory === "직업별 공고" && (
                        <p>Content for 직업별 공고</p>
                    )}
                    {selectedCategory === "오늘의 HOT 기업" && (
                        <p>Content for 오늘의 HOT 기업</p>
                    )}
                    {selectedCategory === "AI 기업 매칭" && (
                        <p>Content for AI 기업 매칭</p>
                    )}
                    {selectedCategory === "장애인고용장려금" && (
                        <p>Content for 장애인고용장려금</p>
                    )}
                </div>
            </div>
            <div className="w-full h-px bg-gray-400 mt-10"></div>
            <div className="bg-slate-200">
                <p className="px-20 py-10 font-bold text-xl">인턴 채용관</p>
                <Swiper
                    slidesPerView={4}
                    slidesPerGroup={4}
                    scrollbar={true}
                    modules={[Scrollbar]}
                    className='w-[1400px]'
                >
                    {disableTypes.map((disableType, index) => (
                        <SwiperSlide>
                            <div key={index} className="flex justify-center mb-10">
                                <div className="w-[300px] h-[300px] border-2 border-slate-400 flex items-center justify-center rounded-3xl shadow-md">
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="p-5"></div>
            </div>
            <div
                className="fixed bottom-0 right-0 text-white flex items-center justify-center rounded-full z-10"
            >
                <img src={chat} alt="chat" className="w-44 h-44 hover:cursor-pointer" 
                    onClick={() => {

                    }}
                />
            </div>
        </div>
    )
}

export default Main;
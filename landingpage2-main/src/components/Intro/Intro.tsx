'use client'

import MyLayout from "../Layout/Layout";
import SlickCustom from "../Slick/Slick";

export default function Intro() {
    return <div className="intro-container">
       <MyLayout>
       <div className="px-[10px] md:px-[74px] xl:px-[200px] py-[35px]">
        <SlickCustom />
        </div>
       </MyLayout>
    </div>
}
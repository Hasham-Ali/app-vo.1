import React from "react";
import sliderStyle from "./slider.module.css";
import sliderimg1 from "./slider images/avengers.jpeg";
import sliderimg2 from "./slider images/black-panther.jpg";
import sliderimg3 from "./slider images/main.jpg";
import sliderimg4 from "./slider images/tanhaji.jpg";


function Slider() {



    let flag = 0;

    function counter (a){

        flag = flag + a;
        console.log(flag)
        slider(flag);
    }

    function slider (num){

        let slides = document.getElementsByClassName(sliderStyle.slide);

        if (flag === slides.length){
            flag = 0;
            num = 0;
        };

        if(flag < 0){
            flag = slides.length-1 ;
            num = slides.length-1;
        };

        
        for (let y of slides){
            y.style.display = "none";
        };

        slides[num].style.dispaly = "block";


    };
    slider(flag);







    return (

        <div className={sliderStyle.sliderContainer}>

            <div className={sliderStyle.slide}>
                <img src={sliderimg1} alt=""></img>
                <h3>images 1</h3>
            </div>

            <div className={sliderStyle.slide}>
                <img src={sliderimg2} alt=""></img>
                <h3>images 2</h3>
            </div>

            <div className={sliderStyle.slide}>
                <img src={sliderimg3} alt=""></img>
                <h3>images 3</h3>
            </div>

            <div className={sliderStyle.slide}>
                <img src={sliderimg4} alt=""></img>
                <h3>images 4</h3>
            </div>

            <span onClick={counter(-1)} className={sliderStyle.arrowPrev}>	&#8592;</span>
            <span onClick={counter(1)} className={sliderStyle.arrowNext}>  &#8594;</span>

        </div>
    );
};


export default Slider;
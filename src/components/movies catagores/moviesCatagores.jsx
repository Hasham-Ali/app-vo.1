import React from "react";
import moviesCatStyle from "./moviesCatagores.module.css";


function MoviesCatagores({changeCatDetail, catDetail}) {



    return (

        <div className={moviesCatStyle.body}>
            <div className={moviesCatStyle.movies}>

                <div className={moviesCatStyle.hollywoodContainer}>

                <div className={moviesCatStyle.hollywood}></div>
                <div className={moviesCatStyle.hollywoodDetail}>asdasd</div>
                <button onClick={()=>{changeCatDetail("hollywood")}}>
                    {catDetail? "off" : "on"}
                </button>

                </div>

                <div className={moviesCatStyle.hollywoodContainer}>
                <div className={moviesCatStyle.bollywood}></div>
                <button onClick={()=>{changeCatDetail("bollywood")}}>
                    {catDetail? "off" : "on"}
                </button>
                </div>

                <div className={moviesCatStyle.hollywoodContainer}>
                <div className={moviesCatStyle.lollywood}></div>
                <button onClick={()=>{changeCatDetail("lollywood")}}>
                    {catDetail? "off" : "on"}
                </button>
                </div>
            </div>

        </div>
    )
}

export default MoviesCatagores;
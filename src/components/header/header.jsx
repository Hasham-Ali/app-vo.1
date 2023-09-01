import React from "react";
import HeaderStyle from "./header.module.css"

function Header ({changePageName, currentPage}){

    var pages = ["Home", "Movies", "Games", "Softwares"];

    return(

        <header className={HeaderStyle.header}>

            <h2 className={HeaderStyle.logo}>FunWeb</h2>

            <ul>
                {pages.map((page, index)=>(
                    <li 
                    key={index}
                    onClick={()=>{changePageName(page)}}
                    className={currentPage === page ? "Header-li-active" : ""}
                    >

                        {page}
                        {console.log(page)}
                    </li>
                ))}
            </ul>

        </header>
    )
}


export default Header;
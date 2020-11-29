import React from 'react';
import Link from 'next/link'

import style from '../../../styles/Header.module.css';

export default () =>{
    return (
        <div id={style.bgheader}>
            <div  className={"containerHeader"}>
                <ul className={style.headerul}>
                    <li  className={style.headerli}>
                        <div>
                            <Link href={"#"} >ABOUT US</Link>
                        </div>
                        {/* <hr className={style.hrheader} /> */}
                    </li>
                    <li  className={style.headerli}>
                        <div>
                            <Link href={"#"} >SUPPORT</Link>
                        </div>
                    </li>
                    <li  className={style.headerli}>
                        <div>
                            <Link href={"#"} >ACCOUNT</Link>
                        </div>
                    </li>
                    <li>
                        <div className={style.headerlogo}>
                            <img src="image/Group75.png" alt={""} />
                        </div>
                    </li>
                    <li  className={style.headerli}>
                        <div>
                            <Link href={"#"} >PROMO</Link>
                        </div>
                    </li>
                    <li  className={style.headerli}>
                        <div>
                            <Link href={"#"} >TOURNOMENT</Link>
                        </div>
                    </li>
                    <li  className={style.headerli}>
                        <div>
                            <Link href={"#"} >PAYMENT</Link>
                        </div>
                    </li>

                
                
                    
                    
                    
                    <li>
                        <div className={style.langheader}></div>
                    </li>
                </ul>
                <div className={style.bottomdice}>
                    <img src={"/image/Dices.png"} />
                </div>
                
            </div>
        </div>
    );
}
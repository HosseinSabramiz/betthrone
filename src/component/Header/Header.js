import React from 'react';
import Link from 'next/link'

import style from '../../../styles/Header.module.css';

export default () =>{

    // const UnderHeader = useRef(null);
    // const executeScroll = () => myRef.current.scrollIntoView()  




    return (
        <div id={style.bgheader}>
            <div className={style.imageback}>
                <img src="/image/MaskGroup1.png" />
                <div className={style.bottomdice}>
                    <img src={"/image/Dices.png"} />
                </div>
                <div className={style.scrollDown}>
                    <Link href="#underheader">
                    &#8212;SCROLL
                    </Link>
                </div>
                </div>
                    <div className={style.absoluteheader}>
                        <div  className={"containerHeader"}>
                        <ul className={style.headerul}>

                            <li  className={style.searchheaderli}>
                                <div>
                                    <Link href={"#"} >
                                        <img src="/image/search.png" />
                                    </Link>
                                </div>
                                {/* <hr className={style.hrheader} /> */}
                            </li>


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
                        
                    </div>
                </div>
        </div>
    );
}
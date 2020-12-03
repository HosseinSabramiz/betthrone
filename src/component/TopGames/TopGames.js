import Link from 'next/link';
import React from 'react';

const TopGames = () => {
    return ( 
        <div className={"w-100 float-left"}>
            <div className={"container"}>
                <div className={"col-lg-12 headerTopGame float-left mt-3 mb-3 pl-0 d-flex justify-content-between"}>
                    <div className={"col-lg-4"}>
                        <div className={"topgamestitle pl-3"}>
                            TOP GAMES
                            <div className={"topgamesHblur"}></div>
                        </div>
                    </div>
                    <div className={"col-lg-6 float-right px-0"}>
                        <ul className={"d-flex justify-content-between topgamesul"}>
                        <li className={"headerTopGames activetopG"}>
                                <Link href="#">ALL</Link>
                            </li>
                            <li className={"headerTopGames"}>
                                <Link href="#">TABLE</Link>
                            </li>
                            <li className={"headerTopGames"}>
                                <Link href="#">JACKPOT</Link>
                            </li>
                            <li className={"headerTopGames"}>
                                <Link href="#">ROULLETTE</Link>
                            </li>
                            <li className={"headerTopGames"}>
                                <Link href="#">SLOTS</Link>
                            </li>
                        
                            <li className={"headerTopGames"}>
                                <Link href="#">LIVE</Link>
                            </li>
                        
                            
                            
                            
                        </ul>
                    </div>
                </div>
                <div className={"col-lg-12 float-left"}>
                    <div className={"row d-flex justify-content-center"}>
                        <div className={"col-lg-4"}>
                            <img src="/image/top1.png"  className={"img-fluid rightTopGames"}/>
                        </div>
                        <div className={"col-lg-8"}>
                            <div className={"row"}>
                                <div className={"col-lg-4 col-6 float-left lefttopgames12"}>
                                    <img src="/image/top2.png" className={"img-fluid lefttopgames mb-3"} />
                                </div>
                                <div className={"col-lg-4 col-6 float-left parentTGimg"}>
                                    <div className={"lefttopgames12"}></div>
                                    <img src="/image/top2.png" className={"img-fluid lefttopgames mb-3"} />
                                </div>
                                <div className={"col-lg-4 col-6 float-left"}>
                                    <img src="/image/top2.png" className={"img-fluid lefttopgames mb-3"} />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-lg-4 col-6 float-left"}>
                                    <img src="/image/top2.png" className={"img-fluid lefttopgames mb-0"} />
                                </div>
                                <div className={"col-lg-4 col-6 float-left"}>
                                    <img src="/image/top2.png" className={"img-fluid lefttopgames mb-0"} />
                                </div>
                                <div className={"col-lg-4 col-6 float-left"}>
                                    <img src="/image/top2.png" className={"img-fluid lefttopgames mb-0"} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

     );
}
 
export default TopGames;
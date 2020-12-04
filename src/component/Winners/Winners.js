import Link from 'next/link';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Winners = () => {
    return ( 

        <div className={"w-100 float-left  pt-5 margintopminus"}>
            <div className={"container"}>
                <div className={"w-100 d-flex justify-item-cener Winners"}>
                    <div className={"col-lg-9 col-md-9 mx-auto"}>
                    <Tabs defaultIndex={1}>
                        {/* <ul className={"col-lg-8 col-md-8 d-flex justify-content-between align-items-center mx-auto winnerheader"}> */}
                                {/* <li className={"winheaderli "}>
                                    <Link href="#">LAST WINNERS</Link>
                                </li>
                                <li className={"winheaderli winheaderactive"}>
                                    <Link href="#">TOP WINNERS</Link>
                                </li>
                                <li className={"winheaderli "}>
                                    <Link href="#">TOURNAMENT</Link>
                                </li> */}

                            <TabList
                                className={"col-lg-8 col-md-8 d-flex justify-content-between align-items-center mx-auto winnerheader"}
                            >
                                <Tab
                                    className={"winheaderli"}
                                    selectedClassName={"winheaderactive"}
                                >
                                    {/* <li className={"winheaderli"}> */}
                                        <div>LAST WINNERS</div>
                                    {/* </li> */}
                                </Tab>
                                <Tab
                                    className={"winheaderli"}
                                    selectedClassName={"winheaderactive"}
                                >
                                    {/* <li className={"winheaderli"}> */}
                                        <div>TOP WINNERS</div>
                                    {/* </li> */}
                                </Tab>
                                <Tab
                                    className={"winheaderli"}
                                    selectedClassName={"winheaderactive"}
                                >
                                    {/* <li className={"winheaderli "}> */}
                                        <div>TOURNAMENT</div>
                                    {/* </li> */}
                                </Tab>
                            </TabList>
                        {/* </ul> */}
                        <TabPanel>
                            <div>first</div>
                        </TabPanel>

                        <TabPanel>
                            <div className={"w-100 float-left d-flex justify-content-between align-items-center pb-3"}>
                                <div className={"col-lg-7 col-md-7"}>
                                    <div className={"w-100 float-left d-flex justify-content-between align-items-center mb-3"}>
                                        <div className={"col-lg-3 col-md-3 col-3  float-left position-relative"}>
                                            <img src="/image/top2.png" className={"img-fluid winnerimg"}/>
                                            <img src="/image/Gold.png" className={"medal"} />
                                        </div>
                                        <div className={"col-lg-9 col-md-9 float-left"}>
                                            <ul className={"d-flex justify-content-between pl-0 align-items-center plres"}>
                                                <li className={"colorwinner"}>
                                                    Reza won
                                                </li>
                                                <li className={"pricewinner1"}>
                                                    15.56<span>$</span>
                                                </li>
                                                <li className={"colorwinner"}>
                                                    in power god
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"w-100 float-left d-flex justify-content-between align-items-center mb-3"}>
                                        <div className={"col-lg-3 col-md-3 col-3  float-left position-relative"}>
                                            <img src="/image/top2.png" className={"img-fluid winnerimg"}/>
                                            <img src="/image/Silver.png" className={"medal"} />
                                        </div>
                                        <div className={"col-lg-9 col-md-9 float-left"}>
                                            <ul className={"d-flex justify-content-between pl-0 align-items-center plres"}>
                                                <li className={"colorwinner"}>
                                                    Reza won
                                                </li>
                                                <li className={"pricewinner1"}>
                                                    15.56<span>$</span>
                                                </li>
                                                <li className={"colorwinner"}>
                                                    in power god
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"w-100 float-left d-flex justify-content-between align-items-center mb-3"}>
                                        <div className={"col-lg-3 col-md-3 col-3  float-left position-relative"}>
                                            <img src="/image/top2.png" className={"img-fluid winnerimg"}/>
                                            <img src="/image/boronz.png" className={"medal"} />
                                        </div>
                                        <div className={"col-lg-9 col-md-9 float-left"}>
                                            <ul className={"d-flex justify-content-between pl-0 align-items-center plres"}>
                                                <li className={"colorwinner"}>
                                                    Reza won
                                                </li>
                                                <li className={"pricewinner1"}>
                                                    15.56<span>$</span>
                                                </li>
                                                <li className={"colorwinner"}>
                                                    in power god
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"w-100 float-left d-flex justify-content-between align-items-center mb-3"}>
                                        <div className={"col-lg-3 col-md-3 col-3  float-left position-relative"}>
                                            <img src="/image/top2.png" className={"img-fluid winnerimg"}/>
                                        </div>
                                        <div className={"col-lg-9 col-md-9 float-left"}>
                                            <ul className={"d-flex justify-content-between pl-0 align-items-center plres"}>
                                                <li className={"colorwinner"}>
                                                    Reza won
                                                </li>
                                                <li className={"pricewinner1"}>
                                                    15.56<span>$</span>
                                                </li>
                                                <li className={"colorwinner"}>
                                                    in power god
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"w-100 float-left d-flex justify-content-between align-items-center mb-3"}>
                                        <div className={"col-lg-3 col-md-3 col-3  float-left position-relative"}>
                                            <img src="/image/top2.png" className={"img-fluid winnerimg"}/>
                                        </div>
                                        <div className={"col-lg-9 col-md-9 float-left"}>
                                            <ul className={"d-flex justify-content-between pl-0 align-items-center plres"}>
                                                <li className={"colorwinner"}>
                                                    Reza won
                                                </li>
                                                <li className={"pricewinner1"}>
                                                    15.56<span>$</span>
                                                </li>
                                                <li className={"colorwinner"}>
                                                    in power god
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                                <div className={"col-lg-5 col-md-5 resrightmiddleW"}>
                                    <div className={"righttopwinner col-lg-12 py-3"}>

                                        <ul className={"d-flex justify-content-between pl-0 align-items-center"}>
                                            <li className={"pricewinner"}>
                                                25.5
                                                <span>$</span>
                                            </li>
                                            <li className={"colorwinner"}>
                                                Reza won
                                            </li>
                                            <li className={"rightbetname"}></li>
                                            <li className={"colorwinner"}>
                                                in power of god
                                            </li>
                                        </ul>
                                        

                                        <ul className={"d-flex justify-content-between pl-0 align-items-center"}>
                                            <li className={"pricewinner"}>
                                                25.5
                                                <span>$</span>
                                            </li>
                                            <li className={"colorwinner"}>
                                                Reza won
                                            </li>
                                            <li className={"rightbetname"}></li>
                                            <li className={"colorwinner"}>
                                                in power of god
                                            </li>
                                        </ul>
                                        

                                        <ul className={"d-flex justify-content-between pl-0 align-items-center"}>
                                            <li className={"pricewinner"}>
                                                25.5
                                                <span>$</span>
                                            </li>
                                            <li className={"colorwinner"}>
                                                Reza won
                                            </li>
                                            <li className={"rightbetname"}></li>
                                            <li className={"colorwinner"}>
                                                in power of god
                                            </li>
                                        </ul>
                                        

                                        <ul className={"d-flex justify-content-between pl-0 align-items-center"}>
                                            <li className={"pricewinner"}>
                                                25.5
                                                <span>$</span>
                                            </li>
                                            <li className={"colorwinner"}>
                                                Reza won
                                            </li>
                                            <li className={"rightbetname"}></li>
                                            <li className={"colorwinner"}>
                                                in power of god
                                            </li>
                                        </ul>
                                        

                                        <ul className={"d-flex justify-content-between pl-0 align-items-center"}>
                                            <li className={"pricewinner"}>
                                                25.5
                                                <span>$</span>
                                            </li>
                                            <li className={"colorwinner"}>
                                                Reza won
                                            </li>
                                            <li className={"rightbetname"}></li>
                                            <li className={"colorwinner"}>
                                                in power of god
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        
                        <TabPanel>
                            <div>third</div>
                        </TabPanel>
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Winners;
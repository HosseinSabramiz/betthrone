import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return ( 
        <React.Fragment>
            <div className={"col-lg-12 float-left footerbg"}>
                <div className={"rightfooter"}>
                    <img src="/image/rightFooter.png" />
                </div>
                <div className={"container"}>
                    <div className={"w-100 float-left "}>
                        <div className={"footerLogo text-center"}>
                            <img src="/image/Group75.png" />
                        </div>
                        <div className={"float-left w-100 mt-5"}>

                            <div className={"col-lg-3 col-md-3 float-left"}>
                                <ul className={"footermenu"}>
                                    <li>LINKS</li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Payments</Link></li>
                                    <li><Link href="#">Affiliates</Link></li>
                                    <li><Link href="#">Games max limits</Link></li>
                                </ul>
                            </div>
                            

                            <div className={"col-lg-3 col-md-3 float-left"}>
                                <ul className={"footermenu"}>
                                    <li>LINKS</li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Payments</Link></li>
                                    <li><Link href="#">Affiliates</Link></li>
                                    <li><Link href="#">Games max limits</Link></li>
                                </ul>
                            </div>
                            

                            <div className={"col-lg-3 col-md-3 float-left"}>
                                <ul className={"footermenu"}>
                                    <li>LINKS</li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Payments</Link></li>
                                    <li><Link href="#">Affiliates</Link></li>
                                    <li><Link href="#">Games max limits</Link></li>
                                </ul>
                            </div>
                            

                            <div className={"col-lg-3 col-md-3 float-left"}>
                                <ul className={"footermenu"}>
                                    <li>LINKS</li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Payments</Link></li>
                                    <li><Link href="#">Affiliates</Link></li>
                                    <li><Link href="#">Games max limits</Link></li>
                                </ul>
                            </div>
                            
                        </div>


                        <div className={"textbottomfooter"}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                        </div>

                        <div className={"footersocialmedia"}>
                            
                            <span>
                                <Link href="#">
                                    <div className="itensocialfooter">
                                        <img src="/image/twitter.png" />
                                    </div>
                                </Link>
                            </span>
                            
                            <span>
                                <Link href="#">
                                    <div className="itensocialfooter">
                                        <img src="/image/instagram.png" />
                                    </div>
                                </Link>
                            </span>
                            
                            <span>
                                <Link href="#">
                                    <div className="itensocialfooter">
                                        <img src="/image/telegram.png" />
                                    </div>
                                </Link>
                            </span>
                            
                            <span>
                                <Link href="#">
                                    <div className="itensocialfooter">
                                        <img src="/image/facebook.png" />
                                    </div>
                                </Link>
                            </span>
                            
                        </div>




                    </div>
                </div>
                <div className={"leftfooter"}>
                    <img src="/image/leftFooter.png" />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Footer;
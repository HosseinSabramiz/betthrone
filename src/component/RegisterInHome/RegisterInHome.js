import React from 'react';

const RegisterInHome = () => {
    return ( 
        <div className={"w-100 float-left  pt-5"}>
            <div className={"bgregister pb-5"}>
                <div className={"passorHR"}>
                    <img src="/image/Asset_2.png" />
                </div>
                <div className={"container"}>
                    <div className={"w-100 d-flex justify-item-cener"}>
                        <div className="w-100 text-center logoHregister">
                            <img src="/image/Group75.png" className={"img-fluid "} />
                        </div>
                    </div>
                    <div className={"w-100 float-left"}>
                        <div className={"text-center titlehomeregister"}>
                            JOIN NOW
                        </div>
                        <div className={"col-lg-8 col-md-8 mx-auto"}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="email" className={"form-control homeinput"} id="inputEmail" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="password" className={"form-control homeinput"} id="inputPassword" placeholder="Password" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className={"form-control homeinput"} id="inputName" placeholder="name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="tel" className={"form-control homeinput"} id="inputPhonenumber" placeholder="phonenumber" />
                                </div>
                            </div>
                            <div className={"w-100 text-center mt-4"}>
                                <button className="btn homebtnregister">Sign up</button>

                            </div>
                        </div>
                    </div>


                    <div className={"w-100 float-left bottomHR"}>
                        <div className={"col-lg-7 col-md-7 mx-auto"}>
                            <ul className={"d-flex justify-content-between align-items-center pl-0"}>
                                    <li className={"bottomHomeRegister"}>
                                        <div className={""}>PLAYER</div>
                                        <div className={""}>12548</div>
                                    </li>
                                    <li className={"bottomHomeRegister"}>
                                        <div className={""}>ONLINE</div>
                                        <div className={""}>425</div>
                                    </li>
                                    <li className={"bottomHomeRegister"}>
                                        <div className={""}>GAMES</div>
                                        <div className={""}>450</div>
                                    </li>
                            </ul>
                        </div>
                    </div>



                </div>
            </div>
        </div>
     );
}
 
export default RegisterInHome;
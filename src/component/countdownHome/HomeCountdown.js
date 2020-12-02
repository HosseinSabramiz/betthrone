import React from 'react';
import Timer from 'react-compound-timer/build';


const HomeCountdown = () => {
    return ( 
        <div className={"w-100 float-left  py-5 mb-5"}>
            <div className={"container"}>
                <div className={"col-md-6 float-left"}>
                    <div className={"w-100 float-left text-center divimagecoundown1"}>
                        <img src="/image/poker.png" className={"imagecoundown1"} />
                    </div>
                    <div className={"w-100 float-left timercountdown"}>
                    <Timer
                        initialTime={55505000}
                        direction="backward"
                    >
                        {() => (
                            <React.Fragment>
                                <Timer.Days /> : 
                                <Timer.Hours /> : 
                                <Timer.Minutes /> : 
                                <Timer.Seconds /> 
                            </React.Fragment>
                        )}
                    </Timer>
                    </div>
                </div>
                <div className={"col-md-6 float-left"}>
                    <div className={"w-100 float-left text-center"}>
                        <img src="/image/club.png" className={"imagecoundown2"} />
                    </div>
                    <div className={"w-100 float-left timercountdown"}>
                    <Timer
                        initialTime={60000000}
                        direction="backward"
                    >
                        {() => (
                            <React.Fragment>
                                <Timer.Days /> :
                                <Timer.Hours /> :
                                <Timer.Minutes /> :
                                <Timer.Seconds /> 
                            </React.Fragment>
                        )}
                    </Timer>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeCountdown;
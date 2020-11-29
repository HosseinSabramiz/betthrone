import React from 'react';
import Timer from 'react-compound-timer/build';
 

const HomeCountdown = () => {
    return ( 
        <div className={"w-100 float-left bg3d pt-5"}>
            <div className={"container"}>
                <div className={"col-md-6 float-left"}>
                    <div className={"w-100 float-left text-center"}>
                        <img src="/image/poker.png" />
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
                        <img src="/image/club.png" />
                    </div>
                    <div className={"w-100 float-left timercountdown"}>
                    <Timer
                        initialTime={22234}
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

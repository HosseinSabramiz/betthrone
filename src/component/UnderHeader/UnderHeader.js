import React, { useRef } from 'react';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'

const UnderHeader = (props) => {

    const onlyWidth = useWindowWidth();

    return ( 
        <React.Fragment>
            <div className={"w-100 float-left py-5"}>
                <div id="underheader" className={"container position-relative"}>
                    <div className={"float-left w-100"}>
                        <img src="/image/underheader.png" className={"imgUnderHeader"} />
                    </div>
                    <div className={"w-100 float-left mt-4 underheaderredlogo"}>
                        <img src="/image/RedAndBlue.png" className={"img-fluid"} />
                    </div>
                    <div className={"divunderheader col-md-12"} >
                        <div className={"itemUnderheader"}>
                            <img src="/image/underHeaderItem.png" />
                        </div>
                        <div className={"itemUnderheader"}>
                            <img src="/image/underHeaderItem.png" />
                        </div>
                        <div className={"itemUnderheader"}>
                            <img src="/image/underHeaderItem.png" />
                        </div>
                        <div className={"itemUnderheader"}>
                            <img src="/image/underHeaderItem.png" />
                        </div>
                        <div className={"itemUnderheader"}>
                            <img src="/image/underHeaderItem.png" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default UnderHeader;
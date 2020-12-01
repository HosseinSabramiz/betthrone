import React, { useRef } from 'react';

const UnderHeader = (props) => {


    return ( 
        <React.Fragment>
            <div className={"w-100 float-left py-5"}>
                <div id="underheader" className={"container position-relative"}>
                    <div className={"float-left w-100"}>
                        <img src="/image/underheader.png" className={"imgUnderHeader"} />
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
import React from 'react';
import $ from 'jquery';

const GotoTop = () => {


const goTOtop = () => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  }

    return ( 
        <div className={"gotoTopmain"} onClick={goTOtop}>
            <div>
            &#8593;
            </div>
        </div>
     );
}
 
export default GotoTop;
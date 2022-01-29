
import React, {  useState } from 'react';
const Minpopup = (props) => {
    const {
        closemin,
        toggvideo,
        isclose
      } = props;

    return (
        
            <div className={isclose?"narrow-box narrow-box2":"narrow-box "} >
                <button onClick={closemin} className="box-close">&times;</button>
                <div onClick={toggvideo} className="narrow_text-img">
                    <img src="https://staging-hiretual.kinsta.cloud/wp-content/uploads/2021/12/minimg.png" alt="" />
                    <p>
                        Start your
                        free trials
                    </p>
                </div>
            </div>
           
    );
}
export default Minpopup;
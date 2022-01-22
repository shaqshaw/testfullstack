import React from 'react';

const Skeleton = () => {

    return (
        //currently outputting loader instead of skeleton
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
}

export default Skeleton;
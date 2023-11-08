import React from 'react';
import {Image} from "react-bootstrap";

function Avatar(props) {
    return (
        <div className={"avatar"}>
            <Image src="img/IMG_9828.jpg" alt="" className={"card-img-top pt-1"} rounded />
        </div>
    );
}

export default Avatar;
import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.smallImg} src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=""/>
                <div>disc</div>
            </div>
        </div>
    )
};
export default ProfileInfo;
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.smallImg} src={props.profile.photos.large} alt="" />
        <div>disc</div>
      </div>
    </div>
  );
};
export default ProfileInfo;

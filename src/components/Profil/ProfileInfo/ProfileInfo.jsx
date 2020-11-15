import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div></div>
      <div className={s.descriptionBlock}>
        <img className={s.smallImg} src={props.profile.photos.large} alt="" />
        <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
      </div>
    </div>
  );
};
export default ProfileInfo;

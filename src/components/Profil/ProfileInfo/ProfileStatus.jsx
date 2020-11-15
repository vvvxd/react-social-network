import React from 'react';

function ProfileStatus(props) {
  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);
 
  const togleEditMode = () => {
    if (editMode) {
        props.updateStatus(status);
    }
    setEditMode(!editMode);
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
 

  return (
    <>
      {editMode ? (
        <div>
          <input autoFocus onBlur={togleEditMode} onChange={changeStatus} value={status}></input>
        </div>
      ) : (
        <div>
          <span  onDoubleClick={togleEditMode}>{props.status}1</span>
        </div>
      )}
    </>
  );
}

export default ProfileStatus;

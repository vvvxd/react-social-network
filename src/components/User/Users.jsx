import React from 'react';

import styles from './Users.module.css';
import userPhoto from '../../assets/imeges/em_avatar_default-user.png';
import { NavLink } from 'react-router-dom';

function Users({ pagesCount, onPageChanget, currentPage, users, follow, unfollow }) {
  return (
    <div>
      <div>
        {Array(pagesCount)
          .fill(0)
          .map((_, id) => ++id)
          .map((item, id) => (
            <span
              key={id}
              onClick={() => onPageChanget(item)}
              className={`${styles.pagination} ${currentPage === item && styles.active}`}>
              {item}{' '}
            </span>
          ))}
      </div>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  {' '}
                  <img src={userPhoto} alt="" className={styles.photo} />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => unfollow(user.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => follow(user.id)}>follow</button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name} </div>
                <div> {user.status}</div>
              </span>
              <span>
                <div>{'user.location.country'} </div>
                <div>{'user.location.city'} </div>
              </span>
            </span>
          </div>
        ))}
    </div>
  );
}

export default Users;

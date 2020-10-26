import React from "react";
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length===0) {
        props.setUsers([
            {id: '1',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: false, fullName: 'Dima', status: '5xdd', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: true, fullName: 'ASD', status: '5xdd', location: {city: 'Moscov', country: 'Belarus'}},
            {id: '3',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: false, fullName: 'cAHA', status: '5xdd', location: {city: 'Vologda', country: 'Belarus'}},
            {id: '4',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: false, fullName: 'VALENTIN', status: '5xdd', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '5',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: true, fullName: 'Dima', status: '5xdd', location: {city: 'Minsk', country: 'Belarus'}},
        ]);
    }


    return (
        props.users.map(user =>
            <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} alt="" className={styles.photo}/>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button onClick={()=>props.unfollow(user.id)}
                                >Unfollow</button>
                                :<button onClick={()=>props.follow(user.id)}>follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName} </div><div> {user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country} </div>
                        <div>{user.location.city} </div>
                    </span>
                </span>
            </div>
        )
    )

}
export default Users;
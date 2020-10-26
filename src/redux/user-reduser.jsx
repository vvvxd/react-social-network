const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []/*[
        {id: '1',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: false, fullName: 'Dima', status: '5xdd', location: {city: 'Minsk', country: 'Belarus'}},
        {id: '2',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: true, fullName: 'ASD', status: '5xdd', location: {city: 'Moscov', country: 'Belarus'}},
        {id: '3',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: false, fullName: 'cAHA', status: '5xdd', location: {city: 'Vologda', country: 'Belarus'}},
        {id: '4',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: false, fullName: 'VALENTIN', status: '5xdd', location: {city: 'Minsk', country: 'Belarus'}},
        {id: '5',photoUrl:'https://static.kinoafisha.info/k/articles/776/upload/articles/454077430623.jpg', followed: true, fullName: 'Dima', status: '5xdd', location: {city: 'Minsk', country: 'Belarus'}},
    ]*/,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, userId: id})

export const unFollowAC = (id) => ({type: UNFOLLOW, userId: id})

export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default userReducer;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: '1', message: 'Hi, how are you', liceCount: '5'},
        {id: '2', message: 'Its my first post', liceCount: '23'},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let nowPost = {
                id: '3',
                message: state.newPostText,
                liceCount: '0'
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(nowPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})

export const postChangeCreator = (newMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newMessage: newMessage})

export default profileReducer;
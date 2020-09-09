const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messageData: [
        {id: 1, message: 'h1sds'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo',}
    ],
    newMessage: '',
    dialogsData: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Viktor'},
        {id: '3', name: 'Sasha'},
        {id: '4', name: 'Sveta'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Maxim'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let nowMessage = {
                id: '3',
                message: state.newMessage,
            };
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(nowMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const postChangeMessageCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage});

export default dialogsReducer;
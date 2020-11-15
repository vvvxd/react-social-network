const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
  messageData: [
    { id: 1, message: 'h1sds' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Yo' },
  ],
  dialogsData: [
    { id: '1', name: 'Dima' },
    { id: '2', name: 'Viktor' },
    { id: '3', name: 'Sasha' },
    { id: '4', name: 'Sveta' },
    { id: '5', name: 'Valera' },
    { id: '6', name: 'Maxim' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messageData: [
          ...state.messageData,
          {
            id: '4',
            message: action.newMessage,
          },
        ],
      };
    }
  
    default:
      return state;
  }
};

export const addMessageCreator = (payload) => ({
  type: ADD_MESSAGE,
  newMessage: payload,
});


export default dialogsReducer;

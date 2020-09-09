import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {

            postData: [
                {id: '1', message: 'Hi, how are you', liceCount: '5'},
                {id: '2', message: 'Its my first post', liceCount: '23'},
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state change')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage =dialogsReducer(this._state.messagesPage,action);
        this._state.sidebar =sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}

export default store;

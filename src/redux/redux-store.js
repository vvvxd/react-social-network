import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-reduser";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sidebar:sidebarReducer,
    userPage:userReducer,
});

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
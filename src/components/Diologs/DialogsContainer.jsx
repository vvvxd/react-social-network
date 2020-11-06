import {addMessageCreator, postChangeMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage:state.messagesPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(text)=>{dispatch(postChangeMessageCreator(text));},
        sendMes:()=>{dispatch(addMessageCreator());}
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;

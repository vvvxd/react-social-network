import { addMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.messagesPage,
    messageData: state.messagesPage.messageData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMes: (payload) => {
      dispatch(addMessageCreator(payload));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

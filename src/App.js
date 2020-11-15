import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Settings';
import DialogsContainer from './components/Diologs/DialogsContainer';
import UsersContainer from './components/User/UsersContainer';
import ProfileComponent from './components/Profil/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reduser';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (this.props.initialized) {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() => <ProfileComponent />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/setting" render={() => <Setting />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from '../components/contacts/Contacts';
import AddContact from '../components/contacts/AddContact';
import Notfound from '../components/pages/Notfound';
import Header from '../components/layout/Header';
import Provider from '../Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { channels } from '../shared/constants';
// const { ipcRenderer } = window;

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     appName: '',
  //     appVersion: '',
  //   };
  //   ipcRenderer.send(channels.APP_INFO);
  //   ipcRenderer.on(channels.APP_INFO, (event, arg) => {
  //     ipcRenderer.removeAllListeners(channels.APP_INFO);
  //     const { appName, appVersion } = arg;
  //     this.setState({ appName, appVersion });
  //   });
  // }
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

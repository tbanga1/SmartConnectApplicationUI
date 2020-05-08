import React from "react";
import Navbar from "./components/navbarComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import ServicesPage from "./components/servicesComponent";
import HomePage from "./components/homeComponent";
import OffersPage from "./components/offersComponent";
import ServiceDetailsPage from "./components/serviceDetailsComponent";
import ServiceRequestPage from "./components/serviceRequestComponent";
import Notfound from "./components/notFound";
import TeamPage from "./components/teamComponent";
import Login from "./components/loginComponent";
import Register from "./components/registerComponent";
import LogoutPage from "./components/logoutComponent";
import ContactComponent from "./components/contactComponent";
import auth from "./services/userService";
import MapPage from "./components/map";

import "./App.css";

class App extends React.Component {
  state = {};
  componentDidMount = () => {
    try {
      this.setState({ user: auth.getCurrentUser() });
    } catch (ex) {}
  };

  render() {
    return (
      <div className="Container">
        <Navbar user={this.state.user} />
        <Switch>
          <Route exact path="/contactUs" component={ContactComponent} />
          <Route
            exact
            path="/Services/:userId"
            component={ServiceDetailsPage}
          />
          <Route
            exact
            path="/Services/request/:type?" //? is fo optional parameter       http://localhost:3000/Services/newRequest/0?userName=%27hhhh%27 for query string
            component={ServiceRequestPage}
          />
          <Route
            exact
            path="/Services/editRequest/:servObj?" //? is fo optional parameter       http://localhost:3000/Services/newRequest/0?userName=%27hhhh%27 for query string
            component={ServiceRequestPage}
          />
          <Route
            exact
            path="/Services/deleteRequest/:servObj?" //? is fo optional parameter       http://localhost:3000/Services/newRequest/0?userName=%27hhhh%27 for query string
            component={ServiceRequestPage}
          />
          <Route exact path="/login" component={Login} />} />
          <Route exact path="/register" component={Register} />} />
          <Route
            exact
            path="/"
            render={(props) => <HomePage sortBy="newest" {...props} />}
          />
          <Route exact path="/Services" component={ServicesPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/AboutUs" component={TeamPage} />
          <Route exact path="/Offers" component={OffersPage} />
          <Route exact path="/maps" component={MapPage} />
          <Route exact path="/not-found" component={Notfound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;

/*https://www.turtle-techies.com/post/react-navbar-with-bootstrap-4/*/

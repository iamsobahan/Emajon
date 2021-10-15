import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Authprovider from "./Components/Authprovider/Authprovider";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Header/Inventory/Inventory";
import Review from "./Components/Header/Review/Review";
import Shop from "./Components/Header/Shop/Shop";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import Placeorder from "./Placeorder/Placeorder";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/placeorder">
              <Placeorder></Placeorder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import {BrowserRouter, Route} from "react-router-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Currentrates from "./components/Currentrates";
import CoinPage from './components/CoinPage';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/currentrates' exact component={Currentrates} />
          <Route path='/currentrates/coins/:id' exact component={CoinPage} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/register' exact component={Register} />
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './components/Share/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Share/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import ServiceDetails from './components/Home/Service/ServiceDetails/ServiceDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error/Error';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/details/:id'>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

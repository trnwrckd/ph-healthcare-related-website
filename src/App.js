import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import NotFound from './components/Pages/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';
import ServiceDetails from './components/Pages/Services/Service/ServiceDetails/ServiceDetails';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Shop from './components/Pages/Shop/Shop';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <Header></Header>
          </div>
          <div>
            <Switch>
            <Route exact path='/'>
              <Home></Home>            
            </Route>
            <Route path='/home'>
              <Home></Home>      
            </Route>
            <PrivateRoute path = '/service/:serviceID'>
              <ServiceDetails> </ServiceDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path = '/shop'>
              <Shop></Shop>
            </Route>
            <Route path = '/contact'>
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          </div>
        </Router>
        <div><Footer></Footer></div>
      </AuthProvider>
    </div>
  );
}

export default App;

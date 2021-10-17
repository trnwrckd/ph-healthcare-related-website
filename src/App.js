import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Secret from './components/Secret/Secret';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';
import ServiceDetails from './components/Pages/Services/Service/ServiceDetails/ServiceDetails';

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
            <PrivateRoute path='/secret'>
              <Secret></Secret>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;

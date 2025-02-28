import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Charts } from './charts/charts';
import { Review } from './review/review';
import { AuthState } from './login/authState';



export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return(
    <BrowserRouter>
        <div>
            <header>
              <h1 className="header">AniGameReviews<sup>&reg;</sup></h1>
              <h3 className="username"><img className="username" src="/image_library/profile_pic.png" style={{ width: "100px", height: "100px" }} />Username</h3>
              <nav>
                <menu className="topnav">
                  <NavLink to="login">Home</NavLink>
                  <NavLink to="review">Review</NavLink>
                  <NavLink to="charts">Charts</NavLink>
                </menu>
              </nav>
              <hr />
            </header>

            <Routes>
            <Route
                path='/'
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                      setAuthState(authState);
                      setUserName(userName);
                    }}
                  />
                }
                exact
              />
             <Route
                path='/login'
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                      setAuthState(authState);
                      setUserName(userName);
                    }}
                  />
                }
                exact
              />
             <Route path='/review' element={<Review />} />
             <Route path='/charts' element={<Charts />} />
             <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
              <hr />
              <span className="text-reset">Author:</span>
              <br />
              <h5><a href="https://github.com/Rawlino/startup">Orion's GitHub</a></h5>
              <div>
                <button className="site_button" type="button">Give me a duck please. Placeholder for 3rd party service calls.</button>
              </div>
            </footer>
            <div className="parallax"/>
        </div>
    </BrowserRouter>
  ); 
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
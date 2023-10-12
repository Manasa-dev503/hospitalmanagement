import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Outlet } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import {getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebase';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Home></Home>
      <Outlet></Outlet>
      
    </div>

    </Provider>
    
  );
}

export default App;

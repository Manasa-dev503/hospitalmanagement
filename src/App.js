import logo from './logo.svg';
import './App.css';
import Header from './shared/Header'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Outlet } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import {getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebase';
import Home from './Home/Home';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      
    </div>

    </Provider>
    
  );
}

export default App;

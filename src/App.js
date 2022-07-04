import './App.css';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Login from './Login/Login'
import { Route } from 'react-router';
import Main from './Main/Main'
import My_Doctor from './My_Doctor/My_Doctor'
import Post_rewiew from './Post_review/Post_review';
import { Config_api } from './User_api/User-api';
import Consultation from './Consultation/Consultation';
import Doctor_list from './Doctor_list/Doctor_list'
function App() {
  return (
    <div>
      <div className='Container'>
        <Header/>
        <Route path='/Main' render={() => <Main />} />
        <Route path='/Consultation' render={() => <Consultation />} />
        <Route path='/My_Doctor' render={() => <My_Doctor />} />
        <Route path='Main/Doctor_list' render={() => <Doctor_list />} />
        <Login />
      </div>
    </div>
  );
}

export default App;

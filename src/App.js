import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Counter from './components/counter';
import Images from './components/Images';

const main = <div>
  <Header />
  <div className='d-flex' style={{height: '80vh'}}>
    <Navigation />
    <MainPage />
  </div>
  <Footer />
</div>

function App() {
  return (    
    <div>
      <Routes>
        <Route path='/' element = {main} ></Route>
        <Route path='count' element = {<Counter/>} ></Route>
        <Route path='img' element = {<Images/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;

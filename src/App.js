import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Calculatore from './components/Calculatore';
import TodoList from './components/TodoList';
import Api from './components/Api';
import { Routes, Route } from 'react-router-dom';
import notFound from './components/icon/notFound.jpg'

function App() {
  return (
    <div className="App">

          <Nav />

      <Routes>
        <Route path='/' element={<TodoList />}  />
        <Route path='/calculatore' element={<Calculatore />}  />
        <Route path='/sliderMain' element={<Slider />}  />
        <Route path='/api' element={<Api />}  />
        <Route path='*' element = {
          <img src={notFound} width={'300px'} height={'300px'} style={{marginTop:'30px'}}/>
        }/>
      </Routes>


      
    </div>
  );
}

export default App;

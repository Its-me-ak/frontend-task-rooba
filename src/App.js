import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CollectionComponent from './components/CollectionComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<CollectionComponent/>} />
      </Routes>
    </>
  );
}

export default App;

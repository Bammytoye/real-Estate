import {Routes, Route} from 'react-router';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';



function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/property/id:' element={<PropertyDetails />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

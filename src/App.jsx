import {Routes, Route} from 'react-router';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import SignupPage from './pages/SignUp';
import LoginPage from './pages/Login';



function App() {
  return (
    <div className='max-w-[1140px] mx-auto bg-white'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/property/:id' element={<PropertyDetails />}/>
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

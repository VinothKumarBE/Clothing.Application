// import Home from './components/category-item/Home/Home';
// import { Route,Routes } from 'react-router-dom';
// import About from './components/category-item/Home/About';
// // import Contact from './components/category-item/Home/Contact';
// import Directory  from './components/directory/directory.component'
import Home from './routes/home/home.component'
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component';
// import './categories.styles.scss';
import Shop from './routes/shop/shop.component'
const App = () =>{




  return (
  <Routes>
     <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route  path='shop' element={<Shop />}/>  
      <Route  path='auth' element={<Authentication />}/>  
   
    </Route> 
   
  
  </Routes>

  );
};

export default App;

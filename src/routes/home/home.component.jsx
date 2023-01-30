// import Home from './components/category-item/Home/Home';
// import { Route,Routes } from 'react-router-dom';
// import About from './components/category-item/Home/About';
// import Contact from './components/category-item/Home/Contact';
import Directory  from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom';
// import './categories.styles.scss';

const Home = () =>{

const categories = [
  {
    id:1,
    title:'Hats',
    imageurl:'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id:2,
    title:'Jackets',
    imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id:3,
    title:'Sneakers',
    imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id:4,
    title:'Womens',
    imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id:5,
    title:'mens',
    imageurl:'https://i.ibb.co/R70vBrQ/men.png',
  },
];



  return (
    <div>

      <Directory categories={categories}></Directory>   
      
      <Outlet></Outlet>  
    </div>
  
  

  );
};

export default Home;

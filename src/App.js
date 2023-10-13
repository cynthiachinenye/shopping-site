import { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import Navigator from './navigation/Nav'
import Products from './products/Products';
import Recommend from './recommendations/Recommend';

//database
import products from './database/Data'
import Cards from './components/Cards';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //input filter
  const [query,setQuery] = useState('')

 const handleInputChange = (e) =>{
  setQuery(e.target.value)
 }

 const filteredItems = products.filter((product) => product.title.toLocalLowerCase().indexOf(query.toLocaleLowerCase()!== -1));


 ///Radio filter
  const handleChange = e =>{
  setSelectedCategory(e.target.value)
 }

 //button filter
 const handleClick = e => {
  setSelectedCategory(e.target.value)
 }

 function filteredData (data,selected, query){

  let filteredProducts = data

  //filtering input items
  if(query){
    filteredProducts = filteredItems
  }

  //Selected filter
  if(selected){
    filteredProducts =filteredProducts.filter(({category,color,company,newPrice, name })=>
      category === selected ||color === selected || 
     company === selected ||newPrice === selected ||
      name === selected
    ) 

 }
  return filteredProducts.map(({img, name, star, reviews,newPrice, prevPrice})=>(
    <Cards
    key={Math.random()}
    img={img}
    name={name}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice} />
  ))

}

  return (
    <div className="App">
    <SideBar/>
    <Navigator/>
    <Recommend/>
    <Products/>
    
      
    </div>
  );
}

export default App;

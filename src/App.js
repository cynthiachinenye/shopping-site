import SideBar from './components/SideBar/SideBar';
import Navigator from './navigation/Nav'
import Products from './products/Products';
import Recommend from './recommendations/Recommend';

function App() {
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

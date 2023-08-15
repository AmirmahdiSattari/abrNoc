import './App.css';

import { FaBattleNet } from "react-icons/fa";
import { Header, Navbar, MainContainer, Cart } from './containers';
import { RegionProvider } from './context/RegionContext';
import { UpdateProvider } from './context/update';
import { QuantityProvider } from './context/QuantityContext';


function App() {
  return (
    <RegionProvider>
      <UpdateProvider>
        <QuantityProvider>
          <div className="App font-roboto w-[100%] h-[100vh]">
            <Header />
            <div className=' 
            flex
            w-[100%] h-[1599px]
            bg-[#F1F9FE]'>
            
            <Navbar /> 

              <div className='
              flex justify-around
               w-[80%] h-[100%]
              pt-5'>
                <MainContainer />
                <Cart />
              </div>
            </div>
          </div>
        </QuantityProvider>
      </UpdateProvider>
    </RegionProvider>
  );
}

export default App;

import logo from './lcsfood.png';
import logo2 from './lcshos.png';
import './App.css';
import Login from './components/Login' // . indicates the components is in the same folder in src folder
import Registration from './components/Registration'
import Navigation from './components/Navigation';
import Login1 from './components/Login1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //npm i react-router-dom to install react-router-dom package in client cmd
import VijayawadaHotels from './components/VijayawadaHotels';
import About from './components/About';
import City from './components/City';
import Minerva from './components/Minerva';
import Oriental from './components/Oriental';
import Tfl from './components/Tfl';
import Pick from './components/Pick';
import Orka from './components/Orka';
import Burger from './components/Burger';
import Contact from './components/Contact';
import HydrabadHotels from './components/HydrabadHotels';
import DelhiHotels from './components/DelhiHotels';
import VizagHotles from './components/VizagHotels';
import AhmedabadHotels from './components/AhmedabadHotels';
import BangloreHotels from './components/BangloreHotels';
import Lemon from './components/Lemon';
import Red from './components/Red';
import Radisson from './components/Radisson';
import Novotel from './components/Novotel';
import Taj from './components/Taj';
import Vivanta from './components/Vivanta';
import Ics from './components/Ics';
import TajPalce from './components/TajPlace';
import Lalit from './components/Lalit';
import Ashok from './components/Ashok';
import Pride from './components/Pride';
import Eros from './components/Eros';
import Oberoi from './components/Oberoi';
import Bloom from './components/Bloom';
import Royal from './components/Royal';
import Redstone from './components/Redstone';
import Chancery from './components/Chancery';
import Meridian from './components/Meridian';
import Gateway from './components/Gateway';
import Apna from './components/Apna';
import Capital from './components/Capital';
import Novotel2 from './components/Novotel2';
import Dolphin from './components/Dolphin';
import Faifield from './components/Faifield';
import LemonTree from './components/LemonTree';
import Novotel3 from './components/Novotel3';
import Artilla from './components/Artilla';
import ITC from './components/ITC';
import TajSkyline from './components/TajSkyline';
import Courtyard from './components/Courtyard';
import Hospitality from './components/Hospitality';
import ChatBot from './components/ChatBot';
//BrowserRouter, Routes and Route are used to route from one page to another like from signup to login etc. IF ERROR try this npm install --force react-router-dom
// import { Container, Toolbar, AppBar } from '@material-ui/core'; //npm i @material-ui/core --force to install @material-ui/core package in client cmd

function App({store}) {

  function Page(){
    // console.log("page componenet");
    if(store.getState().NavReducer==="Login"){
      console.log("page componenet login");
      return(
      <div>
        <Login store={store}/>
      </div>
      );
    }

    if(store.getState().NavReducer==="Registration"){
      console.log("Registration componenet login");
      return(
        <div>
          <Registration />
        </div>
      );
    }

    if(store.getState().NavReducer==="Admin"){
      // console.log("Registration componenet login");
      return(
        <div>
          <Login1 store={store}/>
        </div>
      );
    }
  }
  console.log(store.getState());
  return(
    <div className="App">
      {/* <video autoPlay loop muted playsInline className='video'> 
      <source src="https://www.youtube.com/watch?v=xPPLbEFbCAo" type="video/mp4"/>
      </video> */}

      <div className='App-header'>
        <img className="App-logo" style={{ height:"120px",width: "120px"}} src={logo} alt="" />
        <h1 className='App-food'>FOOD AND HOSPITALITY SYSTEM</h1>
        <img className="App-logo" style={{ height:"120px",width: "120px"}} src={logo2} alt="" />
      </div>
      <Navigation store={store}/>

      <div className='App-body' id="appBody">
        {/* <video autoPlay loop muted playsInline className='video'> 
      <source src="https://www.youtube.com/watch?v=xPPLbEFbCAo" type="video/mp4"/>
      </video> */}
        {/* <Page /> */}

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login store={store}/>} />
              <Route path='/log' element={<Login store={store}/>} />
              <Route path='/reg' element={<Registration />} />
              <Route path='/adm' element={<Login1 store={store}/>} />
              <Route path='/cit' element={<City/>} />
              <Route path='/abo' element={<About/>} />
              <Route path="/con" element={<Contact/>} />

              <Route path='/vij' element={<VijayawadaHotels/>} />
              <Route path="/hyd" element={<HydrabadHotels/>} />
              <Route path="/del" element={<DelhiHotels/>} />
              <Route path="/viz" element={<VizagHotles/>} />
              <Route path="/ahm" element={<AhmedabadHotels/>} />
              <Route path="/ban" element={<BangloreHotels/>} />

              <Route path='/min' element={<Minerva />} />
              <Route path="/ori" element={<Oriental/>} />
              <Route path="/tfl" element={<Tfl/>} />
              <Route path="/pic" element={<Pick/>} />
              <Route path="/ork" element={<Orka/>} />
              <Route path="/bur" element={<Burger/>} />

              <Route path="/Lem" element={<Lemon/>} />
              <Route path="/red" element={<Red/>} />
              <Route path="/rad" element={<Radisson/>} />
              <Route path="/nov" element={<Novotel/>} />
              <Route path="/taj" element={<Taj/>} />
              <Route path="/viv" element={<Vivanta/>} />

              <Route path="/ics" element={<Ics/>} />
              <Route path="/tajpalace" element={<TajPalce/>} />
              <Route path="/lal" element={<Lalit/>} />
              <Route path="/ash" element={<Ashok/>} />
              <Route path="/pri" element={<Pride/>} />
              <Route path="/ero" element={<Eros/>} />

              <Route path="/obe" element={<Oberoi/>} />
              <Route path="/blo" element={<Bloom/>} />
              <Route path="/roy" element={<Royal/>} />
              <Route path="/redstone" element={<Redstone/>} />
              <Route path="/cha" element={<Chancery/>} />
              <Route path="/mer" element={<Meridian/>} />

              <Route path="/gat" element={<Gateway/>} />
              <Route path="/apn" element={<Apna/>} />
              <Route path="/cap" element={<Capital/>} />
              <Route path="/novo" element={<Novotel2/>} />
              <Route path="/dol" element={<Dolphin/>} />
              <Route path="/fai" element={<Faifield/>} />

              <Route path="/lem2" element={<LemonTree/>} />
              <Route path="/novot" element={<Novotel3/>} />
              <Route path="/art" element={<Artilla/>} />
              <Route path="/itc" element={<ITC/>} />
              <Route path="/tajskyline" element={<TajSkyline/>} />
              <Route path="/cou" element={<Courtyard/>} />

              <Route path="/hosp" element={<Hospitality/>} />
              <Route path="/chat" element={<ChatBot/>} />

            </Routes>
          </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;

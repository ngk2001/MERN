// import MyComponents from './Components/MyComponents'
// import BioData from './Components/BioData'
// import Accordian from './Components/Accordian'

//import Companies from "./Components/Companies";
//import Alpha from "./Components/Alpha";'
//import Count from "./Components/Count";
//import Events from "./Components/Events";

//import Cards from "./Components/Cards";
//import ListOperation from "./Components/ListOperation";
//import Students from "./Components/Students";

// import AccordianChange from "./Components/AccordianChange";
// import ColorChanger from "./Components/ColorChanger";
// import DiceGame from "./Components/DiceGame";
// import HttpProto from "./Components/HttpProto";
// import LightDarkMode from "./Components/LightDarkMode";
// import UserDetailsRandomAPI from "./Components/UserDetailsRandomAPI";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Demo from "./Components/Demo";
import DemoParagh from "./Components/DemoParagh";
import DemoAbout from "./Components/DemoAbout"
import Navbar from "./Components/Navbar";
//import WordCount from "./Components/WordCount";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>


    /* <MyComponents name="kavin" email="kavinngm@gmail.com"/>
    <br/><br/><hr/>
    <BioData Name="Kavin" Age="25" purpose="learn react"/>
    <BioData Name="Antony" Age="22" purpose="learn vite"/>
    <BioData Name="Rahul" Age="22" purpose="learn Sql"/>
    <br/><br/><hr/>
    
    <Accordian/> */

    /* <ListOperation/>
    <Students/> 
    <Cards/>  */
    <>
      {/* <Companies/> */}
      {/* <Events/> */}

      {/* <Count/> */}
      {/* <Alpha/> */}
      {/* <WordCount/>  */}
      {/* <ColorChanger/> */}
      {/* <AccordianChange/> */}
      {/* <LightDarkMode/> */}
      {/* <DiceGame/> */}
      {/* <HttpProto/> */}
      {/* <UserDetailsRandomAPI/> */}

      <BrowserRouter>

      <Navbar/>
        <div>
          <nav>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <Link to="/about"><button>About</button></Link>
            
          </nav>
        </div>

        <Routes>
          <Route path="/home" element={<Demo />}></Route>
          <Route path="/contact" element={<DemoParagh />}></Route>
          <Route path="/about" element={<DemoAbout />}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;

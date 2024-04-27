import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import trailer from "/assets/trailer3.mp4";

function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <video autoPlay loop muted className="h-full w-full object-cover z-[-1]" >
        <source src={trailer} type="video/mp4"/>
      </video>
      <div className="absolute top-0 w-full h-full z-10">
        {" "}
        <Navbar />
        <Content />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
    </div>
  );
}

export default App;

import QRCode from "./components/qrCode";
import ldlogo from "./ld-light.png";
import srecon from "./srecon.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  const { qrcode, upperimage, logoversion } = useFlags();

  return (
<div className={`App h-screen bg-ldls grid grid-cols-3 grid-rows-3  bg-cover bg-no-repeat`}>
      <div className="body grid col-span-3 row-start-1 place-items-center">
        {logoversion ? (
          <img src={toggle} className="mx-auto h-28 lg:h-80" alt="logo" />  
        ) : (  
            <div className="bg-white">
            <img src={srecon} className="mx-auto h-28 lg:h-80" alt="logo" />
            </div>
        )}
        </div>
        <header className="App-header grid row-start-2 col-span-3">
        <Header />      
      </header>
        <div className="body grid row-start-3 col-span-3 place-items-center">
        {qrcode ? <QRCode /> : <Login />}
      </div>
    </div>
  );
}

export default App;

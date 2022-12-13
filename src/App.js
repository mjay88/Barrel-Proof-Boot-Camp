import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Authbox from "./components/Authbox";
import Home from "./routes/Home";
import Agave from "./routes/Agave";
import Amari from "./routes/Amari";
import Cocktology from "./routes/Cocktology";
import Cognac from "./routes/Cognac";
import Layout from "./components/Layout";
import Gin from "./routes/Gin";
import Liquers from "./routes/Liquers";
import Progress from "./routes/Progress";
import Rum from "./routes/Rum";
import Vermouth from "./routes/Vermouth";
import Vodka from "./routes/Vodka";
import Whiskey from "./routes/Whiskey";
import GetHelp from "./routes/GetHelp";
import PublicLayout from "./components/PublicLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/Authbox" element={<Authbox />} />
        </Route>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="progress" element={<Progress />} />
          <Route path="agave" element={<Agave />} />
          <Route path="amari" element={<Amari />} />
          <Route path="cocktology" element={<Cocktology />} />
          <Route path="cognac" element={<Cognac />} />
          <Route path="gin" element={<Gin />} />
          <Route path="liquers" element={<Liquers />} />
          <Route path="rum" element={<Rum />} />
          <Route path="vermouth" element={<Vermouth />} />
          <Route path="whiskey" element={<Whiskey />} />
          <Route path="getHelp" element={<GetHelp />} />
          <Route path="vodka" element={<Vodka />} />
          <Route
            path="history-of-vodka"
            element={<div>history-of-vodka</div>}
          />
          <Route
            path="production-of-vodka"
            element={<div>production-of-vodka</div>}
          />
        </Route>

        {/* ...*/}
      </Routes>
    </>
  );
};

export default App;

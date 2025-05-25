import { Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import LeftBar from "./Components/LeftBar";
import Dashboard from "./Components/Dashboard";
import History from "./Components/History";

const App = () => {
  return (
    <div className="main">
      <article className="top">
        <TopBar />
      </article>
      <article className="left">
        <section className="left-bar">
          <LeftBar />
        </section>
        <section className="left-route">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/his" element={<History />} />
          </Routes>
        </section>
      </article>
    </div>
  );
};

export default App;

import "./App.css";
import {
  NavBar,
  Welcome,
  Transactions,
  Services,
  Loader,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">

      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Loader />
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;

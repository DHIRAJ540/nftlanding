import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Review from "./components/Review";
import Trial from "./components/Trial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Products />
      <Review />
      <Trial />
      <Footer />
    </div>
  );
};

export default App;

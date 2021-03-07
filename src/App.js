import './App.css';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router basename="/rent-a-car">

        <Header />
        <Content />
        <Footer />
      </Router>

    </div>
  );
}

export default App;

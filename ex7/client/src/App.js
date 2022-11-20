import logo from './logo.svg';
import './App.css';
import "./Header.css";
import "./footer.css";
import "./sidebar.css";

// Components
import Header from "./Header";
import Footer from "./footer";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;

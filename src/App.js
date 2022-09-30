import logo from './logo.svg';
import './App.css';
import SideBar from './components/side-bar';
import Content from './components/content'
import Footer from './components/footer';
function App() {
  return (
    <div className="main">
      <SideBar></SideBar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;

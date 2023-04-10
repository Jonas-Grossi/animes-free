
import './App.css';
import Logo from '../components/template/Logo/Logo'
import Header from '../components/template/Header/Header'
import MainContent from '../components/template/MainContent/MainContent'
import Donate from '../components/template/Donate/Donate'
import Releases from '../components/template/Releases/Releases'
import Footer from '../components/template/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Logo />
      <Header/>    
      <MainContent />
      <Donate />
      <Releases />
      <Footer />

    </div>
  );
}

export default App;

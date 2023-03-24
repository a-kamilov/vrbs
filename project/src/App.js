import './App.scss';
import AboutTeam from './components/AboutTeam';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header/>      
      <Services/>
      <Content/>
      <AboutTeam/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;

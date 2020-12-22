import { Component } from 'react';
import Header from './components/Header'
import { BrowserRouter} from 'react-router-dom';
import Routes from './components/routes';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;

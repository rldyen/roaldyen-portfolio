import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
            <AnimatedRoutes />
          <Footer/>
        </Router>
      </div>
  )
}

export default App

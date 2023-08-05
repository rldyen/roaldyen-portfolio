import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
      <div className="App">
        <AnimatedCursor
          innerSize={12} 
          outerSize={12}
          color='209, 23, 138'/>

        <Router>
          <Navbar />
            <AnimatedRoutes />
          <Footer/>
        </Router>
      </div>
  )
}

export default App

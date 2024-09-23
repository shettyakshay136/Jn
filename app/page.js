import './app.css'
import Home from "./src/Pages/Home"
import Work from './src/Pages/Work';
import Footer from './src/Pages/Footer'

export default function App() {
  return (
    <div className="Page">
      <Home/>
      <Work/>
      <Footer/>
    </div>
  );
}

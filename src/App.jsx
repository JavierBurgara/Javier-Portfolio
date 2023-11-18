import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import './index.css'

const App = () => {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>

  );
};

export default App;


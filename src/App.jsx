import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import PassageAnswers from './Components/passage';
import Wrapper from './Components/wrapper';


function App() {
  return <div className="App">
    <BrowserRouter>
      <Sidebar />
      <Wrapper>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/passage" element={<PassageAnswers />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      </Wrapper>
    </BrowserRouter>
  </div>;
}

export default App;

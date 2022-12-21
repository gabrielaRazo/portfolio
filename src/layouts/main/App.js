import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import WrappContent from '../../pages/wrapp/wrapp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrappContent />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

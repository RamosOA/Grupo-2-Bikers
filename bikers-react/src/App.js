import Header from './components/Header.jsx'

import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={ <Header /> } />
        </Routes>
    </div>
  );
}

export default App;

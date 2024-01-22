import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './redux/features/themeSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './components/Pages/HomeScreen';
import ShowDetail from './components/Pages/ShowDetails';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className={theme}>
      <Header className={theme}/>
      {/* <div className='py-20 w-full'></div> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/show/:showId" element={<ShowDetail />} />
          
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './redux/features/themeSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/Pages/LoginForm'
import LogoutButton from './components/Pages/LogoutButton'
import ProtectedRoute from './components/Pages/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './components/Pages/HomeScreen';
import ShowDetail from './components/Pages/ShowDetails';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const authUser = useSelector((state) => state.auth.user);

  console.log("LoggedIn or ", loggedIn , " Details ", authUser);
  return (
    <div className={theme}>
      {/* <div className='py-20 w-full'></div> */}
      <Router>
        <Header className={theme}/>
        <Routes>
        
        { loggedIn ? 
                
                <Route path="/" element={<HomeScreen />} />
                : 
                <Route path="/login" element={ <LoginForm />} />
              }
        {/* <ProtectedRoute path="/show/:showId" element={<ShowDetail />} /> */}
        <Route path="/logout" element={ <LogoutButton /> } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
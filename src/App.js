// External Imports
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Internal Imports
import { useEffect, Suspense } from 'react';
import Routings from './routes';

// Components
import Layout from './components/Layout';

const App = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.UpdateLoginStatus);

  useEffect(
    () => {
      if (!isLoggedIn && window.location.pathname !== '/login') {
        // Redirect to login page when user tries accessing a protected route and not logged in
        // navigate('/login');
      }
    },
    // Including isLoggedIn && navigate as the useEffect dependency giving 1.6 ms FCP
    // Leaving it blank gives 1.5 ms FCP
    [navigate, isLoggedIn]
  );

  return (
    <Layout>
      <Suspense>
        <Routes>
          {Routings.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;

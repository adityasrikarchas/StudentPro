// Internal Imports
import { useEffect } from 'react';

// External Imports
// import { useNavigate } from 'react-router-dom';

// Components
import ModalWrapper from '../components/Modals/ModalWrapper/index';

// Assets
import Image14 from '../assets/images/image14.png';
import Image15 from '../assets/images/image15.png';
import Image16 from '../assets/images/image16.png';

const AuthPage = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    const location = window.location.pathname;
    if (location === '/login') {
    } else if (location === '/signup') {
    }
  }, []);

  return (
    <div id="auth-page">
      <img
        src={Image14}
        alt="image-14"
        className="auth-page-bg-image"
        id="image-14"
      />
      <img
        src={Image15}
        alt="image-16"
        className="auth-page-bg-image"
        id="image-15"
      />
      <img
        src={Image16}
        alt="image-16"
        className="auth-page-bg-image"
        id="image-16"
      />
      <ModalWrapper>
        <div id="auth-page-login-signup-form-container"></div>
      </ModalWrapper>
    </div>
  );
};

export default AuthPage;

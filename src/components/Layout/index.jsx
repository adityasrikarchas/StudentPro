// Importing Styles
import './styles.css';

// Components
import RoundedIconButton from '../Buttons/RoundedIconButton';

const Layout = ({ children }) => {
  const toggleSidebar = () => {};

  return (
    <div id="layout-wrapper">
      {/* Sidebar */}
      <div id="layout-wrapper-sidebar-container">
        {/* <div id="layout-wrapper-sidebar-toggle-button">
          <RoundedIconButton
            action={toggleSidebar}
            // style={{ zIndex: '30 !important' }}
          >
            <i
              className="fa-solid fa-bars"
              style={{ color: 'var(--color-white)', fontSize: '20px' }}
            ></i>
          </RoundedIconButton>
        </div> */}
      </div>

      {/* Page */}
      <div id="layout-wrapper-page-container">{children}</div>
    </div>
  );
};

export default Layout;

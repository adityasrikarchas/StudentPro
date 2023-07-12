// External Imports
import { Link } from 'react-router-dom';

// Importing Styles
import './styles.css';

// Components
import RoundedIconButton from '../Buttons/RoundedIconButton';
import Icon from '../Icon';

// Assets
import Logo from '../../assets/svgs/Logo.svg';
import User from '../../assets/svgs/User.svg';
import Logout from '../../assets/svgs/Logout.svg';
import Dashboard from '../../assets/svgs/Dashboard.svg';
import Book from '../../assets/svgs/Book.svg';
import Bot from '../../assets/svgs/Bot.svg';
import Mentoring from '../../assets/svgs/Mentoring.svg';
import Report from '../../assets/svgs/Report.svg';
import Settings from '../../assets/svgs/Settings.svg';
import Speech from '../../assets/svgs/Speech.svg';
import Course from '../../assets/svgs/Course.svg';
import Resume from '../../assets/svgs/Resume.svg';
import Crown from '../../assets/svgs/Crown.svg';

const RoutesTab = ({
  icon,
  label = 'Tab',
  route = '/',
  active = false,
  disable,
}) => {
  return (
    <Link to={route} style={{ textDecoration: 'none' }}>
      <div
        id="routes-tab"
        style={{
          background: active ? 'var(--color-primary-blue)' : 'transparent',
        }}
      >
        {icon && (
          <Icon
            icon={icon}
            style={{
              marginRight: '10px',
              color: active ? 'var(--color-white)' : 'var(--color-black)',
            }}
          />
        )}
        <p
          style={{
            color: disable
              ? 'var(--color-gray)'
              : active
              ? 'var(--color-white)'
              : 'var(--color-black)',
          }}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

const Layout = ({ children }) => {
  // const toggleSidebar = () => {};

  return (
    <div id="layout-wrapper">
      {/* Sidebar */}
      <div id="layout-wrapper-sidebar-container">
        {/* Sidebar Content */}
        <div id="sidebar-content-routes">
          {/* Header */}
          <div style={{ padding: '10px 15px' }}>
            <Icon
              icon={Logo}
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </div>

          {/* Routes */}
          <div id="layout-wrapper-sidebar-routes-container">
            <RoutesTab icon={Dashboard} label={'Dashboard'} />
            <RoutesTab icon={Mentoring} label={'1 on 1 mentor'} />
            <RoutesTab icon={Bot} label={'Mock Interviews'} />
            <RoutesTab icon={Speech} label={'Practice Test'} />
            <RoutesTab icon={Book} label={'Communication'} active={true} />
            <RoutesTab icon={Report} label={'Reports'} />
            <RoutesTab icon={Settings} label={'Settings'} />
            <RoutesTab icon={Crown} label={'Premium'} />
            <div
              style={{
                height: '2px',
                width: '100%',
                background: 'var(--color-gray)',
              }}
            />
            <RoutesTab icon={Resume} label={'Resume'} disable={true} />
            <RoutesTab icon={Course} label={'Course'} disable={true} />
          </div>
        </div>

        {/* Logout Button */}
        <div id="sidebar-content-logout-button">
          <div>
            <RoundedIconButton icon={User} />
            <p>Avinash Gupta</p>
          </div>
          <Icon icon={Logout} />
        </div>
      </div>

      {/* Page */}
      <div id="layout-wrapper-page-container">{children}</div>
    </div>
  );
};

export default Layout;

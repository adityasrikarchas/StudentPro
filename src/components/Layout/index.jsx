// External Imports
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Internal Imports
import { useState, useEffect } from 'react';

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
  full,
}) => {
  return (
    <Link to={route} style={{ textDecoration: 'none' }}>
      <div
        id="routes-tab"
        style={{
          background: active ? 'var(--color-primary-blue)' : 'transparent',
          justifyContent: !full ? 'center' : 'start',
          paddingLeft: !full ? '20px' : '15px',
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
        {full && (
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
        )}
      </div>
    </Link>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    console.log(currentRoute);
  }, [currentRoute]);

  const layout_visibilty = useSelector((state) => state.UpdateLayoutVisibility);
  if (layout_visibilty.visible === false) return <>{children}</>;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigations = {
    active: [
      {
        key: 'dashboard',
        label: 'Dashboard',
        icon: Dashboard,
        routes: '/',
      },
      {
        key: 'mentorship',
        label: '1 on 1 mentor',
        icon: Mentoring,
        routes: '/mentorship',
      },
      {
        key: 'mock-interviews',
        label: 'Mock Interviews',
        icon: Bot,
        routes: '/mock-interviews',
      },
      {
        key: 'practice-test',
        label: 'Practice Test',
        icon: Speech,
        routes: '/practice-test',
      },
      {
        key: 'communication',
        label: 'Communication',
        icon: Book,
        routes: '/communication',
      },
      {
        key: 'reports',
        label: 'Reports',
        icon: Report,
        routes: '/reports',
      },
      {
        key: 'settings',
        label: 'Settings',
        icon: Settings,
        routes: '/settings',
      },
      {
        key: 'premium-memborship',
        label: 'Premium',
        icon: Crown,
        routes: '/premium-memborship',
      },
    ],
    disabled: [
      {
        key: 'build-resume',
        label: 'Resume',
        icon: Resume,
        routes: '/build-resume',
        disabled: true,
      },
      {
        key: 'courses',
        label: 'Course',
        icon: Course,
        routes: '/courses',
        disabled: true,
      },
    ],
  };

  return (
    <div id="layout-wrapper">
      {/* Toggle Button */}
      <RoundedIconButton
        className="layout-wrapper-toggle-button"
        action={toggleSidebar}
        style={{
          left: isSidebarOpen ? '20%' : '8%',
        }}
      >
        <i
          className="fa-sharp fa-solid fa-bars"
          style={{ color: 'var(--color-white)' }}
        ></i>
      </RoundedIconButton>

      {/* Sidebar */}
      <div
        id="layout-wrapper-sidebar-container"
        style={{
          width: isSidebarOpen ? '20%' : '8%',
        }}
      >
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
            {navigations.active.map((navigation) => (
              <RoutesTab
                icon={navigation.icon}
                label={navigation.label}
                key={navigation.key}
                disable={navigation.disabled ? true : false}
                full={isSidebarOpen}
                route={navigation.routes}
                active={currentRoute === navigation.routes}
              />
            ))}
            <div
              style={{
                height: '2px',
                width: '100%',
                background: 'var(--color-gray)',
              }}
            />
            {navigations.disabled.map((navigation) => (
              <RoutesTab
                icon={navigation.icon}
                label={navigation.label}
                key={navigation.key}
                disable={navigation.disabled ? true : false}
                full={isSidebarOpen}
                route={navigation.routes}
                active={currentRoute === navigation.routes}
              />
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div
          id="sidebar-content-logout-button"
          style={{
            paddingLeft: !isSidebarOpen ? '25px' : '10px',
          }}
        >
          {isSidebarOpen && (
            <div>
              <RoundedIconButton icon={User} />
              <p>Avinash Gupta</p>
            </div>
          )}
          <Icon icon={Logout} />
        </div>
      </div>

      {/* Page */}
      <div id="layout-wrapper-page-container">{children}</div>
    </div>
  );
};

export default Layout;
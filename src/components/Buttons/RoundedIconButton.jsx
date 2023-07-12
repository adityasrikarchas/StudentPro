// Components
import Icon from '../Icon';

const RoundedIconButton = ({ icon, children, action = () => {}, style }) => {
  return (
    <div
      onClick={action}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'var(--color-primary-blue)',
        cursor: 'pointer',
        ...style,
      }}
    >
      {icon && <Icon icon={icon} />}
      {!icon && children}
    </div>
  );
};

export default RoundedIconButton;

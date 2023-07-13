const Icon = ({ icon, alt = 'icon-alt', style }) => {
  return (
    <div className="center fit-content">
      <img
        src={icon}
        alt={alt}
        style={{
          width: '25px',
          height: '25px',
          cursor: 'pointer',
          ...style,
        }}
      />
    </div>
  );
};

export default Icon;

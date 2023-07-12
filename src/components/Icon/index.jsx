const Icon = ({ icon, alt = 'icon-alt' }) => {
  return (
    <div>
      <img src={icon} alt={alt} />
    </div>
  );
};

export default Icon;

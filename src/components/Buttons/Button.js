import classes from './Button.module.css';

const Button = ({ size = 'small', text = '', onClick = () => {}, icon, iconPosition = 'left', ...props }) => {
  const styles = { ...props.style };
  delete props.style;
  return (
    <div
      role="button"
      className={classes.CreateButton}
      onClick={onClick}
      style={
        size === 'small'
          ? { height: '0.750vw', ...styles }
          : size === 'medium'
          ? { height: '1vw', ...styles }
          : { height: '1.3vw', ...styles }
      }
      {...props}
    >
      {iconPosition === 'left' && icon}
      {text}
      {iconPosition === 'right' && icon}
    </div>
  );
};

export default Button;

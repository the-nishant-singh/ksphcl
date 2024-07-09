import { UilPlus } from '@iconscout/react-unicons';
import classes from '../Button.module.css';
import Button from '../Button';

const CreateButton = ({ text = 'Create', onClick, size, ...props }) => {
  return (
    <Button text={text} size={size} onClick={onClick} icon={<UilPlus className={classes.ButtonIcon} />} {...props} />
  );
};

export default CreateButton;

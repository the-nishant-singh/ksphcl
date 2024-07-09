import { UilPen } from '@iconscout/react-unicons';
import classes from '../Button.module.css';
import Button from '../Button';

const EditButton = ({ text = 'Edit', onClick, size, ...props }) => {
  return (
    <Button text={text} size={size} onClick={onClick} icon={<UilPen className={classes.ButtonIcon} />} {...props} />
  );
};

export default EditButton;

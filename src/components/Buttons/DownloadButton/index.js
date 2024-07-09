import { UilImport } from '@iconscout/react-unicons';
import classes from '../Button.module.css';
import Button from '../Button';

const DownloadButton = ({ text = 'Download', onClick, size, ...props }) => {
  return (
    <Button text={text} size={size} onClick={onClick} icon={<UilImport className={classes.ButtonIcon} />} {...props} />
  );
};

export default DownloadButton;

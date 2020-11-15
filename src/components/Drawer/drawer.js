import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import '../drawer/Drawer.css';
import drawerData from '../../data/drawerData.json';

const Components = {
  happiness: InboxIcon,
  trending: MailIcon,
  transcription : LoyaltyIcon
};

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
    backgroundColor : 'black',
  },
});

export default function TemporaryDrawer(props){


  useEffect(() => {
    toggleDrawer(props.isClicked)
  },[props.isClicked])

  const classes = useStyles();

  const toggleDrawer = (anchor) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    props.clickHandler(anchor);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerData.map(data => (
            <a class='sprint-content' href={data.url}> 
            <ListItem button key={data.buttonText} >
        <ListItemIcon>{React.createElement(Components[data.component])}</ListItemIcon>
            <ListItemText primary={data.buttonText} />
            </ListItem>
            </a>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
        <React.Fragment key='left'>
          <Drawer anchor='left' open={props.isClicked} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

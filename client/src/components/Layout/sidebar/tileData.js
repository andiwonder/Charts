import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

import { Link } from 'react-router-dom';

import './sidebar.css';

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <InboxIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="Home" className="sidebar__text" />
    </ListItem>
    <ListItem button component={Link} to="/news">
      <ListItemIcon>
        <StarIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="News" className="sidebar__text" />
    </ListItem>
    <ListItem button component={Link} to="/schedule/all">
      <ListItemIcon>
        <SendIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="Schedule" className="sidebar__text" />
    </ListItem>
    <ListItem button component={Link} to="/roster">
      <ListItemIcon>
        <DraftsIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="Drafts" className="sidebar__text" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/charts">
      <ListItemIcon>
        <MailIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="All mail" className="sidebar__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="Trash" className="sidebar__text" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon className="sidebar__icon" />
      </ListItemIcon>
      <ListItemText primary="Spam" className="sidebar__text" />
    </ListItem>
  </div>
);

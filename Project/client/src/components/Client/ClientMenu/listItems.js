import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DeleteIcon from '@material-ui/icons/Delete';
import PlusOne from '@material-ui/icons/PlusOne';
import FolderSpecial from '@material-ui/icons/FolderSpecial';

const dashboardLink = props => <RouterLink to='/client' {...props} />
const historyLink = props => <RouterLink to='/client/history' {...props} />
const accountEditLink = props => <RouterLink to='/client/account/edit' {...props} />
const accountDeleteLink = props => <RouterLink to='/client/account/delete' {...props} />
const bookingCreateLink = props => <RouterLink to='/booking/new' {...props} />

export const mainListItems = (
  <div>
    <Link
      underline="none"
      component={dashboardLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    }
    </Link>
    <Link
      underline="none"
      component={historyLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <FolderSpecial />
      </ListItemIcon>
      <ListItemText primary="Booking History" />
    </ListItem>
    }
    </Link>
    <Link
      underline="none"
      component={bookingCreateLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <PlusOne />
      </ListItemIcon>
      <ListItemText primary="New Booking" />
    </ListItem>
    }
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Account</ListSubheader>
    <Link
      underline="none"
      component={accountEditLink}
    >
    {<ListItem button>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Edit account" />
    </ListItem>}
    </Link>
    <Link
      underline="none"
      component={accountDeleteLink}
    >
    {<ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Delete account" />
    </ListItem>}
    </Link>
  </div>
);
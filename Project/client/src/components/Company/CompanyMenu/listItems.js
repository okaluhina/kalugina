import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeleteIcon from '@material-ui/icons/Delete';
import PlusOne from '@material-ui/icons/PlusOne';
import FolderSpecial from '@material-ui/icons/FolderSpecial';
import CalendarToday from '@material-ui/icons/CalendarToday';
import BarChart from '@material-ui/icons/BarChart';
import Edit from '@material-ui/icons/Edit';
import StarRate from '@material-ui/icons/StarRate';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';

const dashboardLink = props => <RouterLink to='/company' {...props} />
const calendarLink = props => <RouterLink to='/company/calendar' {...props} />
const historyLink = props => <RouterLink to='/company/history' {...props} />
const statisticsLink = props => <RouterLink to='/company/statistics' {...props} />
const profileEditLink = props => <RouterLink to='/company/profile/edit' {...props} />
const profileDeleteLink = props => <RouterLink to='/company/profile/delete' {...props} />
const employeesLink = props => <RouterLink to='/company/employees' {...props} />
const employeeCreateLink = props => <RouterLink to='/company/employees/new' {...props} />
const reviewsLink = props => <RouterLink to='/company/reviews' {...props} />
// const MyLink = props => <RouterLink to="/open-collective" {...props} />
//<Link underline='none' component={}>


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
      component={calendarLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <CalendarToday />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
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
      component={statisticsLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Statistics" />
    </ListItem>
    }
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Profile</ListSubheader>
    <Link
      underline="none"
      component={profileEditLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <Edit />
      </ListItemIcon>
      <ListItemText primary="Edit profile" />
    </ListItem>
    }
    </Link>
    <Link
      underline="none"
      component={profileDeleteLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Delete profile" />
    </ListItem>
    }
    </Link>
    <ListSubheader inset>Employees</ListSubheader>
    <Link
      underline="none"
      component={employeesLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <SupervisorAccount />
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItem>
    }
    </Link>
    <Link
      underline="none"
      component={employeeCreateLink}
    >
    {
    <ListItem button>
      <ListItemIcon>
        <PlusOne />
      </ListItemIcon>
      <ListItemText primary="Add employee" />
    </ListItem>
    }
    </Link>
    <ListSubheader inset>Reviews</ListSubheader>
    <Link
      underline="none"
      component={reviewsLink}
    >
    {
    <ListItem button>
         <ListItemIcon>
           <StarRate />
         </ListItemIcon>
         <ListItemText primary="Reviews" />
       </ListItem>
    }
    </Link>
  </div>
);



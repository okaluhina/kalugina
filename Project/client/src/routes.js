import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Mockup from './components/Mockup';
import Header from './components/Header';
import Footer from './components/Footer';
import Promo from './components/Promo';
import authGuard from './components/HOCs/authGuard';

import CompanySignUp from './components/CompanySignUp/CompanySignUp';
import ClientSignUp from './containers/ClientSignUp';
import ClientVerification from './containers/Verification';
import CompanyVerification from './containers/CompanyVerification';
import SignIn from './containers/SignIn';

import ClientDashboard from './components/Client/ClientDashboard';
import ClientHistory from './components/Client/ClientHistory';
import ClientAccountEdit from './components/Client/ClientAccountEdit';
import ClientAccountDelete from './components/Client/ClientAccountDelete';

import CompaniesList from './components/Companies/CompaniesList';
import CompanyDetails from './components/Companies/CompanyDetails';
        
import CompanyDashboard from './components/Company/CompanyDashboard';
import CompanyCalendar from './components/Company/CompanyCalendar';
import CompanyHistory from './components/Company/CompanyHistory';
import CompanyStatistics from './components/Company/CompanyStatistics';
import CompanyEdit from './components/Company/CompanyEdit';
import CompanyDelete from './components/Company/CompanyDelete';
import Employees from './components/Company/Employees';
import EmployeeDelete from './components/Company/EmployeeDelete';
import EmployeeAdd from './components/Company/EmployeeAdd';
import CompanyReviews from './components/Company/CompanyReviews';

export default props => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Promo}/>
        <Route path='/booking/new' exact component={Mockup}/>
        <Route exact path='/company/signUp' component={CompanySignUp}/>
        <Route exact path='/company/verify/:id:token' component={CompanyVerification}/>
        <Route exact path='/client/signUp' component={ClientSignUp}/>
        <Route exact path='/signIn' component={SignIn}/>

        <Route exact path='/client' component={ClientDashboard}/>
        <Route exact path='/client/history' component={ClientHistory}/>
        <Route exact path='/client/account/verify/:id' component={ClientVerification}/>
        <Route exact path='/client/account/edit' component={ClientAccountEdit}/>
        <Route exact path='/client/account/delete' component={authGuard(ClientAccountDelete, 'client')}/>
        
        <Route exact path='/companies' component={CompaniesList}/>
        <Route exact path='/companies/:id' component={CompanyDetails}/>
        
        <Route exact path='/company' component={CompanyDashboard}/>
        <Route exact path='/company/calendar' component={CompanyCalendar}/>
        <Route exact path='/company/history' component={CompanyHistory}/>
        <Route exact path='/company/statistics' component={CompanyStatistics}/>
        <Route exact path='/company/profile/edit' component={CompanyEdit}/>
        <Route exact path='/company/profile/delete' component={CompanyDelete}/>
        <Route exact path='/company/employees' component={Employees}/>
        <Route exact path='/company/employees/delete/:id' component={EmployeeDelete}/>
        <Route exact path='/company/employees/new' component={EmployeeAdd}/>
        <Route exact path='/company/reviews' component={CompanyReviews}/>
      </Switch>
      <Footer />
    </div>
  </Router>
)

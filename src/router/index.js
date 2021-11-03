import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CasosPage from '../pages/casos';
import Home from "../pages/home-page" ; 
import PartnersPage from '../pages/partners';
import Pricing from "../pages/pricing" ; 

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/casos" exact component={CasosPage} />
          <Route path="/afiliados" exact component={PartnersPage} />

          {/* <Route path="/home" exact component={Home} />
          <Route path="/templates" exact component={Templete} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/pricingtwo" exact component={PricingTwo} /> */}
        </Switch>
      </BrowserRouter>
    );
}

export default Router

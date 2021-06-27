import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from "../../page/beranda";
import About from '../../page/about';

export default function Router(){
	return(
		<Switch>
			<Route exact path="/" component={Beranda} />
			<Route path="/about" component={About} />
		</Switch>
	)
}
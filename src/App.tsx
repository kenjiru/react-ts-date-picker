import * as React from 'react';
import * as ReactDOM from 'react-dom';
import moment from "moment";

import { daterangepicker } from 'bootstrap-daterangepicker';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import './App.less';

class App extends React.Component<any, any> {
	componentDidMount() {

		daterangepicker();
		var foo = $(this.refs["date"]).daterangepicker();
		console.log(foo);
	}

	render() {
		console.log(moment, moment('3/1/2014'));
		console.log($, daterangepicker);

		return (
			<div>
				<h1>App title</h1>
				<input ref="date"/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);
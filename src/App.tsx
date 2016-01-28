import * as React from 'react';
import * as ReactDOM from 'react-dom';
import moment from "moment";

import { daterangepicker } from 'bootstrap-daterangepicker';
import DateRangePicker from "react-bootstrap-daterangepicker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import './App.less';

class App extends React.Component<any, any> {
	render() {
		console.log(moment, moment('3/1/2014'));
		console.log($, daterangepicker);

		return (
			<div>
				<h1>App title</h1>
				<DateRangePicker startDate={moment('1/1/2014')} endDate={moment('3/1/2014')}>
					<div>Select date!</div>
				</DateRangePicker>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);
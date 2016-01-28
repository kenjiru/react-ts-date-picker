import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "react-bootstrap-daterangepicker/css/daterangepicker.css";

class App extends React.Component {
    render() {
        return (
            <DateRangePicker startDate={moment("1/1/2014")} endDate={moment("3/1/2014")}>
                <div>Click Me To Open Picker!</div>
            </DateRangePicker>
        );
    }
}

ReactDOM.render(<App/>, document.body);
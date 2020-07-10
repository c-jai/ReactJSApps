import React from "react";
import ColumnNames from "./ColumnNames";
import TableBody from "./TableBody";

class Table extends React.Component {
	render() {
		return (
			<div id='table'>
				<table>
					<thead>
						<ColumnNames />
					</thead>
					<tbody>
						<TableBody
							studentsData={this.props.studentsData}
							showAdults={this.props.showAdults}
							removeStudent={this.props.removeStudent}
						/>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;

import React from "react";
import TableFilter from "./TableFilter";
import TableTitle from "./TableTitle";

class TableHeader extends React.Component {
	render() {
		return (
			<>
				<div id='title'>
					<TableTitle />
				</div>
				<div id='filter'>
					<TableFilter
						showAdults={this.props.showAdults}
						toggleShowAdults={this.props.toggleShowAdults}
					/>
				</div>
			</>
		);
	}
}

export default TableHeader;

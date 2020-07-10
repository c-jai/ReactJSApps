import React from "react";

class TableFilter extends React.Component {
	render() {
		const { showAdults, toggleShowAdults } = this.props;
		return (
			<div>
				<input
					type='checkbox'
					defaultChecked={showAdults}
					onChange={toggleShowAdults}
				></input>
				<label>Show only adult students</label>
			</div>
		);
	}
}

export default TableFilter;

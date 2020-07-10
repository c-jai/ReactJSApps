import React from "react";
import TableHeader from "./TableHeader";
import Table from "./Table";
import Form from "./Form";

class StudentRegistry extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showAdults: false,
			studentsData: [],
		};

		this.toggleShowAdults = this.toggleShowAdults.bind(this);
		this.addStudent = this.addStudent.bind(this);
		//this.editStudent = this.editStudent.bind(this);
		this.removeStudent = this.removeStudent.bind(this);
	}

	toggleShowAdults(event) {
		this.setState({ showAdults: event.target.checked });
	}

	addStudent(student) {
		this.setState({ studentsData: [...this.state.studentsData, student] });
	}

	removeStudent(index) {
		const { studentsData } = this.state;
		this.setState({
			studentsData: studentsData.filter((s, i) => i !== index),
		});
	}

	render() {
		return (
			<div id='container'>
				<TableHeader
					showAdults={this.state.showAdults}
					toggleShowAdults={this.toggleShowAdults}
				/>
				<Table
					showAdults={this.state.showAdults}
					studentsData={this.state.studentsData}
					removeStudent={this.removeStudent}
				/>
				<Form addStudent={this.addStudent} />
			</div>
		);
	}
}

export default StudentRegistry;

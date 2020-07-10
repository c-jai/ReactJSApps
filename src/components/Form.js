import React from "react";

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.initialState = {
			firstName: "",
			lastName: "",
			age: "",
			major: "",
		};

		this.state = this.initialState;

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit(event) {
		event.preventDefault();
		let student = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			age: this.state.age,
			major: this.state.major,
		};

		this.props.addStudent(student);
		this.setState(this.initialState);
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} id='form'>
				<br></br>
				<br></br>
				<label>First Name</label>
				<input
					type='Text'
					name='firstName'
					value={this.state.firstName}
					id='firstName'
					onChange={this.handleChange}
				></input>
				<br></br>
				<br></br>

				<label>Last Name</label>
				<input
					type='Text'
					onChange={this.handleChange}
					name='lastName'
					value={this.state.lastName}
					id='lastName'
				></input>
				<br></br>
				<br></br>
				<label>Age</label>
				<input
					type='Number'
					onChange={this.handleChange}
					name='age'
					value={this.state.age}
					id='age'
				></input>
				<br></br>
				<br></br>
				<label>Major</label>
				<input
					type='Text'
					onChange={this.handleChange}
					name='major'
					value={this.state.major}
					id='major'
				></input>
				<br></br>
				<br></br>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}

import React from "react";

class TableBody extends React.Component {
	render() {
		let studentsData = this.props.studentsData;
		let showAdults = this.props.showAdults;
		let removeStudent = this.props.removeStudent;

		if (showAdults)
			studentsData = studentsData.filter((student) => student.age >= 18);
		return (
			<>
				{studentsData.map((student, index) => (
					<tr key={index + 1}>
						<td>{index + 1}</td>
						<td>{student.firstName}</td>
						<td>{student.lastName}</td>
						<td>{student.age}</td>
						<td>{student.major}</td>
						<td>
							<button onClick={() => removeStudent(index)}>Remove</button>
						</td>
					</tr>
				))}
			</>
		);
	}
}

export default TableBody;

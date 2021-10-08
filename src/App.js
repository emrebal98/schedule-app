import "./App.css";
import React from "react";
import Table from "react-bootstrap/Table";

function App() {
	var columns = ["#", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
	var rows = ["09:00 - 09:45", "10:00 - 10:45", "11:00 - 11:45", "12:00 - 12:45", "13:30 - 14:15", "14:30 - 15:15", "15:30 - 16:15", "16:30 - 17:15"];
	var data = [
		{ name: "Circuit", time: "09:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Circuit", time: "10:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Circuit", time: "11:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Signals and Systems", time: "09:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Signals and Systems", time: "10:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Signals and Systems", time: "11:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Software Engineering", time: "10:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Software Engineering", time: "11:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Software Engineering", time: "12:00:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Application Development for Mobile Devices", time: "13:30:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Application Development for Mobile Devices", time: "14:30:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Application Development for Mobile Devices", time: "15:30:00", day: "TUE", location: "", X: -1, Y: -1 },
		{ name: "Introduction to Formal Language and Auto Theory", time: "09:00:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Introduction to Formal Language and Auto Theory", time: "10:00:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Introduction to Formal Language and Auto Theory", time: "11:00:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Linear Algebra and Differantial Equations", time: "15:30:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Linear Algebra and Differantial Equations", time: "16:30:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Occupational Health and Safety", time: "15:30:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Occupational Health and Safety", time: "16:30:00", day: "THU", location: "", X: -1, Y: -1 },
		{ name: "Linear Algebra and Differantial Equations", time: "10:00:00", day: "FRI", location: "", X: -1, Y: -1 },
		{ name: "Linear Algebra and Differantial Equations", time: "11:00:00", day: "FRI", location: "", X: -1, Y: -1 },
	];

	//Calculate x and y location
	data.forEach((dat) => {
		dat.X = calculateX(dat);
		dat.Y = calculateY(dat);
	});

	//Fill data with given x and y axis
	var tds = [];
	for (let i = 1; i < 7; i++) {
		tds.push([]);
		for (let j = 0; j < 8; j++) {
			let zzz = data.filter((f) => f.X === i && f.Y === j);
			tds[i - 1].push(zzz);
		}
	}

	//Convert data to usable way for table
	var weekData = (x, id) => {
		var multiple = tds[x][id].length > 1 ? true : false;
		let res = "";
		tds[x][id].forEach((element) => {
			res += element.name + "\n";
		});
		return [res, multiple];
	};

	return (
		<div className="App">
			<Table bordered>
				<thead>
					<tr>
						{columns.map((title, id) => {
							return <th key={id}>{title}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, id) => {
						return (
							<tr key={id}>
								<td>{row}</td>

								<td className={weekData(0, id)[1] && "red"}>{weekData(0, id)[0]}</td>
								<td className={weekData(1, id)[1] && "red"}>{weekData(1, id)[0]}</td>
								<td className={weekData(2, id)[1] && "red"}>{weekData(2, id)[0]}</td>
								<td className={weekData(3, id)[1] && "red"}>{weekData(3, id)[0]}</td>
								<td className={weekData(4, id)[1] && "red"}>{weekData(4, id)[0]}</td>
								<td className={weekData(5, id)[1] && "red"}>{weekData(5, id)[0]}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}

function calculateX(data) {
	switch (data.day) {
		case "MON":
			return 1;
		case "TUE":
			return 2;
		case "WED":
			return 3;
		case "THU":
			return 4;
		case "FRI":
			return 5;
		case "SAT":
			return 6;
		case "SUN":
			return 7;
		default:
			return 0;
	}
}

function calculateY(data) {
	if (data.time >= "09:00:00" && data.time <= "09:45:00") {
		return 0;
	} else if (data.time >= "10:00:00" && data.time <= "10:45:00") {
		return 1;
	} else if (data.time >= "11:00:00" && data.time <= "11:45:00") {
		return 2;
	} else if (data.time >= "12:00:00" && data.time <= "12:45:00") {
		return 3;
	} else if (data.time >= "13:30:00" && data.time <= "14:15:00") {
		return 4;
	} else if (data.time >= "14:30:00" && data.time <= "15:15:00") {
		return 5;
	} else if (data.time >= "15:30:00" && data.time <= "16:15:00") {
		return 6;
	} else if (data.time >= "16:30:00" && data.time <= "17:15:00") {
		return 7;
	} else {
		return -1;
	}
}

export default App;

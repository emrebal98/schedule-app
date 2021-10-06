import "./App.css";
import React from "react";
import Table from "react-bootstrap/Table";

function App() {
	var columns = ["#", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
	var rows = ["09:00 - 09:45", "10:00 - 10:45", "11:00 - 11:45", "12:00 - 12:45", "13:30 - 14:15", "14:30 - 15:15", "15:30 - 16:15", "16:30 - 17:15"];
	var data = [
		{ name: "t", time: "10:00:00", day: "WED", location: "", X: -1, Y: -1 },
		{ name: "ta", time: "10:00:00", day: "WED", location: "", X: -1, Y: -1 },
	];

	// calculateX(data);
	// data.Y = calculateY(data);
	data[0].Y = calculateY(data[0]);
	data[0].X = calculateX(data[0]);

	data[1].Y = calculateY(data[1]);
	data[1].X = calculateX(data[1]);

	// console.log(data[0]);
	// var str1 = "10:20:45",
	// 	str2 = "05:10:10";

	// if (str1 > str2) alert("Time 1 is later than time 2");
	// else alert("Time 2 is later than time 1");
	for (let j = 0; j < data.length; j++) {
		const element = data[j];
	}
	// var tests = data.sort((a, b) => a.X - b.X);
	// console.log(data.filter((f) => f.Y === 3));
	// console.log(data);
	// console.log(tests);
	var tds = [];

	// let zzz = data.filter((f) => f.X == 3 && f.Y == 3);

	// console.log(zzz);

	for (let i = 1; i < 7; i++) {
		tds.push([]);
		for (let j = 0; j < 8; j++) {
			let zzz = data.filter((f) => f.X === i && f.Y === j);
			tds[i - 1].push(zzz);
			// if (zzz.length > 0)

			// 	zzz.forEach((d) => {
			// 		tds[i - 1].push({ key: d.Y, d });
			// 	});
			// else tds[i - 1].push("---");
		}
	}

	// for (let i = 1; i < 7; i++) {
	// 	let tempX = data.filter((f) => f.X === i);
	// 	let tempY = data.filter((f) => f.Y === i);
	// 	if (tempX.length > 0)
	// 		tempX.forEach((t) => {
	// 			tds[0].push(<td>{t.name}</td>);
	// 		});
	// 	else tds[0].push(<td>--</td>);
	// }
	console.log(tds);
	console.log(tds[2][1]);

	var weekData = (x, id) => {
		let res = "";
		tds[x][id].forEach((element) => {
			res += element.name + "\n";
		});
		return res;
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
								
								<td>{weekData(0, id)}</td>
								<td>{weekData(1, id)}</td>

								<td>{weekData(2, id)}</td>
								<td>{weekData(3, id)}</td>
								<td>{weekData(4, id)}</td>
								<td>{weekData(5, id)}</td>
							</tr>
						);
					})}
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					{/* <tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr> */}
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

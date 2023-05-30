import { useEffect, useState } from "react";
import Search from "./components/Search";
import Table from "./components/Table";
import TablePaginate from "./components/Paginate";

const App = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		const getUsers = async () => {
			const res = await fetch(
				"https://mock-api.mortgagebasket.co.uk/v1/users?pageSize=100"
			);
			const { data } = await res.json();
			setUsers(data);
		};
		getUsers();
	}, []);
	let filterUsers = users;
	if (search.length > 0) {
		filterUsers = users.filter(
			(user) => user.name.includes(search) || user.email.includes(search)
		);
	}
	// console.log(filterUsers);

	return (
		<div className="container mx-auto">
			<Search setSearch={setSearch} />
			<TablePaginate users={filterUsers} />
		</div>
	);
};
export default App;

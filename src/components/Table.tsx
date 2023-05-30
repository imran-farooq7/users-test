type Props = {
	users: any[];
};
const Table = ({ users }: Props) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">DOB</th>
					<th scope="col">Email</th>
					<th scope="col">Avatar</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, i) => {
					return (
						<tr key={user.id}>
							<th scope="row">{i + 1}</th>
							<td>{user.name}</td>
							<td>{user.date_of_birth}</td>
							<td>{user.email}</td>
							<td>
								<img src={user.imageUrl} alt="user" width="50px" />
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
export default Table;

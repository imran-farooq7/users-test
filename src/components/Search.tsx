type Props = {
	setSearch: (e: string) => void;
};
const Search = ({ setSearch }: Props) => {
	return (
		<form>
			<div className="mb-3">
				<input
					type="text"
					className="form-control mt-2 w-50 mx-auto"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="search user"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
		</form>
	);
};
export default Search;

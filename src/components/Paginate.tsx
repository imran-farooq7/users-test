import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import Table from "./Table";

type Props = {
	users: any[];
};
const TablePaginate = ({ users }: Props) => {
	const [itemOffset, setItemOffset] = useState(0);
	const [currentItems, setCurrentItems] = useState<any[]>([]);
	const [pageCount, setPageCount] = useState<number>(0);

	const itemsPerPage = 5;

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		// console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(users?.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(users?.length / itemsPerPage));
	}, [itemOffset, users, itemsPerPage]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % users.length;
		//   console.log(
		//     `User requested page number ${event.selected}, which is offset ${newOffset}`
		//   );
		setItemOffset(newOffset);
	};

	return (
		<>
			<Table users={currentItems} />
			{currentItems?.length > 0 && (
				<ReactPaginate
					breakLabel="..."
					nextLabel=">>"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="<<"
					renderOnZeroPageCount={null}
					className="pagination justify-content-center py-3"
					pageClassName="page-item"
					pageLinkClassName="page-link"
					nextClassName="page-item"
					previousClassName="page-item"
					previousLinkClassName="page-link"
					nextLinkClassName="page-link"
					activeClassName="active"
				/>
			)}
		</>
	);
};

export default TablePaginate;

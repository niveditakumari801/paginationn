// import React from 'react';
// import TablePagination from '@material-ui/core/TablePagination';

// export default function TablePaginationDemo() {
//   const [page, setPage] = React.useState(1);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 20));
//     setPage(0);
//   };

//   return (
//     <TablePagination
//       component="div"
//       count={100}
//       page={page}
//       onChangePage={handleChangePage}
//       rowsPerPage={rowsPerPage}
//       onChangeRowsPerPage={handleChangeRowsPerPage}
//     />
//   );
// }

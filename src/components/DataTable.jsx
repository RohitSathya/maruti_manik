import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ data }) => {
  const columns = [
    { field: 'ECN_NO', headerName: 'ECN NO', width: 150 },
    { field: 'TITLE', headerName: 'Title', width: 250 },
    { field: 'CURRENT', headerName: 'Current', width: 150 },
    { field: 'NEW', headerName: 'New', width: 150 },
    { field: 'STATUS', headerName: 'Status', width: 150 },
    { field: 'IMPL_DATE', headerName: 'Impl Date', width: 150 },
    { field: 'MODEL', headerName: 'Model', width: 150 },
    { field: 'AREA', headerName: 'Area', width: 150 },
    { field: 'REMARKS', headerName: 'Remarks', width: 250 },
    { field: 'TYPE_OF_CHANGE', headerName: 'Type of Change', width: 200 },
    { field: 'TRIAL_RUNNING', headerName: 'Trial/Running', width: 150 },
    { field: 'CHANGE_REASON', headerName: 'Change Reason', width: 250 },
  ];

  const rows = data.map((row, index) => ({ id: index, ...row }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default DataTable;

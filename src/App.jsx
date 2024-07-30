import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import * as XLSX from 'xlsx';
import DtcCharts from './components/DtcCharts';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const formattedData = formatData(jsonData);
      setData(formattedData);
    };

    reader.readAsBinaryString(file);
  };

  const formatData = (jsonData) => {
    return jsonData.slice(2).map(row => ({
      ECN_NO: row[1],
      TITLE: row[2],
      CURRENT: row[3],
      NEW: row[4],
      STATUS: row[5],
      IMPL_DATE: row[6],
      MODEL: row[7],
      AREA: row[9],
      REMARKS: row[10],
      TYPE_OF_CHANGE: row[14],
      TRIAL_RUNNING: row[15],
      CHANGE_REASON: row[16],
    }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        DTC Trend Review Dashboard
      </Typography>
      <input
        accept=".xlsx, .xls"
        id="contained-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Excel File
        </Button>
      </label>
      {data && (
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable data={data} />
            </Grid>
            <Grid item xs={12}>
              <DtcCharts data={data} />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default App;

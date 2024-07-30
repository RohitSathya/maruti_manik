import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Grid, Typography, Card, CardContent } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6361', '#BC5090'];

const DtcCharts = ({ data }) => {
  const typeOfChangeData = data.reduce((acc, item) => {
    const existing = acc.find(entry => entry.name === item.TYPE_OF_CHANGE);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: item.TYPE_OF_CHANGE, value: 1 });
    }
    return acc;
  }, []);

  const modelData = data.reduce((acc, item) => {
    const existing = acc.find(entry => entry.name === item.MODEL);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: item.MODEL, value: 1 });
    }
    return acc;
  }, []);

  const statusData = data.reduce((acc, item) => {
    const existing = acc.find(entry => entry.name === item.STATUS);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: item.STATUS, value: 1 });
    }
    return acc;
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Type of Change
            </Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={typeOfChangeData}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {typeOfChangeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Model Data
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={modelData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Status Data
            </Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={statusData}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DtcCharts;

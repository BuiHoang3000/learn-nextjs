import { useEffect, useState } from 'react';

import {
  Box,
  Pagination,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { ArcElement, Chart, Legend, RadialLinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

import { MainLayout } from '@/components/layout';

Chart.register(ArcElement, Legend, RadialLinearScale, ChartDataLabels);

async function fetchPosts(pageNum: number, id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}&id=${id}`
  );
  return response.json();
}

type PostType = {
  id: number;
  title: string;
  body: string;
};

const TableCellCustom = styled(TableCell)(() => ({
  border: '1px solid black',
  backgroundColor: 'white',
  color: 'black',
}));

const AboutPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<PostType[]>([]);
  const [filter, setFilter] = useState<number>(1);

  useEffect(() => {
    fetchPosts(page, filter).then((response) => {
      setData(response as PostType[]);
    });
  }, [page, filter]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const options = {
    options: {
      plugins: {
        dataLabels: {
          display: true,
          color: 'black',
          align: 'end',
          padding: {
            right: 2,
          },
          labels: {
            padding: { top: 10 },
            title: {
              font: {
                weight: 'bold',
              },
            },
            value: {
              color: 'green',
            },
          },
          formatter: function (value: any) {
            return '\n' + value;
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
      },
    },
  };

  const dataDoughnut = {
    labels: ['10 years', '40 years', '30 years', '20 years'],
    datasets: [
      {
        label: 'age',
        data: [47, 23, 18, 12],
        backgroundColor: ['#F44680', '#58CC02', '#FF9600', '#CED4DA'],
        borderWidth: 0,
        hoverOffset: 4,
        datalabels: {
          color: '#FFCE56',
        },
      },
    ],
  };

  return (
    <>
      <Typography component="h1" variant="h3" color="primary.main">
        <Box>
          <TextField
            value={filter}
            onChange={(e) => setFilter(+e.target.value)}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <TableHead>
                  <TableRow>
                    <TableCellCustom>ID</TableCellCustom>
                    <TableCellCustom>Title</TableCellCustom>
                    <TableCellCustom>Post Comment</TableCellCustom>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCellCustom component="th" scope="row">
                        {row.id}
                      </TableCellCustom>
                      <TableCellCustom>{row.title}</TableCellCustom>
                      <TableCellCustom>{row.body}</TableCellCustom>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Pagination
                count={15}
                color="primary"
                onChange={(e, p) => handlePageChange(p)}
              />
            </Box>
          </Paper>
        </Box>
      </Typography>
      <div style={{ width: '30%' }}>
        <Doughnut
          data={dataDoughnut}
          plugins={[ChartDataLabels]}
          options={options}
        />
      </div>
    </>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;

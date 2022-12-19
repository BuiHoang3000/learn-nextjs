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
import {
  ArcElement,
  Chart,
  ChartData,
  ChartOptions,
  registerables,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

import { MainLayout } from '@/components/layout';

Chart.register(ArcElement);
Chart.register(ChartDataLabels);
Chart.register(...registerables);

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

const thickness = {
  id: 'thickness',
  beforeDraw: (chart: any) => {
    const thickness: number[][] = chart?.options?.plugins?.thickness?.thickness;
    thickness &&
      thickness.forEach((item: number[], index: number) => {
        chart.getDatasetMeta(0).data[index].innerRadius = item[0];
        chart.getDatasetMeta(0).data[index].outerRadius = item[1];
      });
  },
};

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
    plugins: {
      ChartDataLabels,
      thickness: {
        thickness: [
          [100, 180],
          [100, 160],
          [100, 140],
          [100, 120],
        ],
      },
      datalabels: {
        color: 'black',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
      },
    },
  } as ChartOptions<'doughnut'>;

  const dataDoughnut = {
    labels: ['section 1', 'section 2', 'section 3', 'section 4'],
    datasets: [
      {
        data: [47, 23, 18, 12],
        backgroundColor: [
          'rgba(244, 70, 128, 1)',
          'rgba(88, 204, 2, 1)',
          'rgba(255, 150, 0, 1)',
          'rgba(206, 212, 218, 1)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
        hoverBorderWidth: 2,
        hoverBorderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
      },
    ],
  } as ChartData<'doughnut'>;

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
      <div>
        <Doughnut data={dataDoughnut} plugins={[thickness]} options={options} />
      </div>
    </>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;

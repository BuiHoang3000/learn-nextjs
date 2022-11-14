import { useEffect, useState } from 'react';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  styled,
} from '@mui/material';

import { MainLayout } from '@/components/layout';
import { PaginationCustom } from '@/components/pagination';

async function fetchPosts(pageNum: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
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

  useEffect(() => {
    fetchPosts(page).then((response) => setData(response as PostType[]));
  }, [page]);

  // const handleChangePage = (newPage: number) => {
  //   setPage(newPage);
  // };

  return (
    <Typography component="h1" variant="h3" color="primary.main">
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
          <PaginationCustom />
        </Paper>
      </Box>
    </Typography>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;

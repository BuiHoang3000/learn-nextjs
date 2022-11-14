import { Box, Stack, styled } from '@mui/material';

const PageCell = styled('span')(() => ({
  margin: '0.8rem',
  fontSize: '1.4rem',
  cursor: 'pointer',
}));

const PageCellNumber = styled('span')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0.8rem',
  fontSize: '1.4rem',
  cursor: 'pointer',
  width: '2.6rem',
  height: '2.6rem',
  borderRadius: '0.4rem',
  '&:hover': {
    color: '#23adad',
  },
}));

const PageCellDots = styled('span')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0.8rem',
  fontSize: '1.4rem',
  width: '2.6rem',
  height: '2.6rem',
  color: '#23adade1',
  cursor: 'initial',
}));

export function PaginationCustom() {
  return (
    <Box component="div">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        my={4}
        height="5rem"
        borderRadius="0.6rem"
        sx={{ background: '#eee' }}
      >
        <PageCell className="page__btn">{`<`}</PageCell>
        <PageCellNumber> 1</PageCellNumber>
        <PageCell className="page__numbers active">2</PageCell>
        <PageCellNumber>3</PageCellNumber>
        <PageCellNumber>4</PageCellNumber>
        <PageCellNumber>5</PageCellNumber>
        <PageCellNumber>6</PageCellNumber>
        <PageCellDots>...</PageCellDots>
        <PageCellNumber> 10</PageCellNumber>
        <PageCell className="page__btn">{`>`}</PageCell>
      </Stack>
    </Box>
  );
}

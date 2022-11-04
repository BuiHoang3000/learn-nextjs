import { Fragment } from 'react';
import { Box } from '@mui/material';
//
import { Work } from '@/models';
import { Divider } from '@mui/material';
import { WorkCard } from './work-card';

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (!workList || workList.length === 0) return null;

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
}

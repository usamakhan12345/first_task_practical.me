import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'
export default function PaginationOutlined() {
  return (
    <Stack spacing={2}>
      <Pagination className='pagination' count={7} variant="outlined"  color="primary" size='large' />
    </Stack>
  )
}
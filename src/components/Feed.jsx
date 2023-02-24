import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos, Sidebar, Copyright } from './'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(null)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items),
    )
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Grid container >
        <Grid item xs={12}>
          <Box p={2} sx={{ overflowY: 'auto', height: '80vh', flex: 2 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              sx={{ color: 'white' }}
            >
              {selectedCategory}{' '}
              <span style={{ color: '#FC1503' }}>videos</span>
            </Typography>

            <Videos videos={videos} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} sx={{ overflowY: 'auto', flex: 2 }}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Feed

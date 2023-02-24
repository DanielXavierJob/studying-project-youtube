import { Typography } from '@mui/material'
import React from 'react'

const Copyright = () => {
  return (
    <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
    Copyright © {new Date().getFullYear()} Daniel Xavier.
  </Typography>
  )
}

export default Copyright
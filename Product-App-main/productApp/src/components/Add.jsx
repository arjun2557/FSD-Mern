import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <h1>Product Adding Page</h1>
          
          <TextField id="filled-basic" label="Product Name" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Image" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Price" variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Category" variant="filled" /><br /><br />
          <Button variant="contained">Add</Button>
    </div>
  )
}

export default Add
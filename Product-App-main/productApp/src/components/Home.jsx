import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Home = () => {
    var [prod, setprod] = useState([]);
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response)
            setprod(response.data)
    })
  return (
    <div>
         <h1>Welcome to Product App</h1>
     <Grid container spacing={2}>
          {prod.map((val)=>{
              return (  
                  <Grid item xs={12} sm={4} md={6} >   
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
              sx={{height:140}}
              image={val.image}
              title={val.title}
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
             {val.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {val.category}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                 Price = {val.rating.rate}
              </Typography>
          </CardContent>
          
              </Card>
                  </Grid>
              )
          })}
          </Grid>
    </div>
  )
}

export default Home
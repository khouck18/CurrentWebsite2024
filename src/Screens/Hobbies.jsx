import React from 'react';
import {
  Box, ImageList, ImageListItem, Grid, Typography, Divider,
} from '@mui/material';
import Pic1 from '../images/Pic1.png';
import Pic2 from '../images/Pic2.png';
import Pic3 from '../images/Pic3.png';
import Pic4 from '../images/Pic4.png';
import Pic5 from '../images/Pic5.png';
import Pic6 from '../images/Pic6.png';
import Pic7 from '../images/Pic7.png';
import Pic8 from '../images/Pic8.png';
import Pic9 from '../images/Pic9.png';
import Pic10 from '../images/Pic10.png';

function Hobbies() {
  const itemData = [
    {
      img: Pic1,
      title: '1',
    },
    {
      img: Pic2,
      title: '2',
    },
    {
      img: Pic3,
      title: '3',
    },
    {
      img: Pic4,
      title: '4',
    },
    {
      img: Pic5,
      title: '5',
    },
    {
      img: Pic6,
      title: '6',
    },
    {
      img: Pic7,
      title: '7',
    },
    {
      img: Pic8,
      title: '8',
    },
    {
      img: Pic9,
      title: '9',
    },
    {
      img: Pic10,
      title: '10',
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: 'linear-gradient(to bottom, #9ED7DD, #E6F4F1)',
        }}
      />
      {' '}
      <Box sx={{
        height: '100vh', width: '100vw', backgroundColor: '#E6F4F1', paddingY: '10vh',
      }}
      >
        <Grid container justifyContent="center" sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">My Hobbies</Typography>
            <Divider sx={{ borderBottom: 'solid 1px black', marginX: '5%', marginTop: '1%' }} />
          </Grid>
        </Grid>
        <ImageList variant="masonry" cols={3} gap={8} sx={{ marginX: '5vw' }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default Hobbies;

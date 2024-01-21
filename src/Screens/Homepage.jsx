/* eslint-disable no-restricted-globals */
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Headshot from '../images/Headshot.jpg';
import Image1 from '../images/Image1.png';
import KenyanYoung from '../images/KenyanYoung.png';
import KenyanFishing from '../images/KenyanFishing.png';

function Homepage() {
  const textPreviews = ['Bio', 'Projects', 'Hobbies'];
  const imagePreviews = [KenyanYoung, Image1, KenyanFishing];
  const calculatePosition = (index) => {
    switch (index) {
      case 0: // Top right
        return { top: 'calc(25vh - 15vh - 30px)', left: 'calc(50% + 5vw)' };
      case 1: // Right
        return { top: 'calc(50vh - 7.5vh)', left: 'calc(50% + 15vw)' };
      case 2: // Bottom right
        return { top: 'calc(57vh + 15vh + 30px)', left: 'calc(50% + 5vw)' };
      default:
        return {};
    }
  };

  return (
    <>
      <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#0172AF' }}>
        <Grid container justifyContent="center" alignContent="center" sx={{ height: '100%', width: '100%', paddingBottom: '25vh' }}>
          {/* Main Hexagon */}
          <Grid item>
            <Box
              sx={{
                width: '28vw',
                height: '28vh',
                position: 'relative',
              }}
            >
              <Box
                component="div"
                sx={{
                  position: 'absolute',
                  width: '100%',
                  paddingBottom: '115.47%',
                  backgroundColor: '#3498db',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <img
                  src={Headshot}
                  alt="Profile Headshot"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    clipPath: 'inherit',
                  }}
                />
              </Box>

              {/* Text */}
              <Typography
                variant="h2"
                component="div"
                sx={{
                  position: 'absolute',
                  left: '-85%',
                  top: '50%',
                  transform: 'translateY(0%)',
                  padding: '10px',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Kenyan Houck
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  position: 'absolute',
                  left: '-85%',
                  top: '80%',
                  transform: 'translateY(0%)',
                  padding: '10px',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Cloud Software Engineer at Intel
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  position: 'absolute',
                  left: '-85%',
                  top: '100%',
                  transform: 'translateY(0%)',
                  padding: '10px',
                  color: '#fff',
                  fontWeight: 'normal',
                }}
              >
                I build cutting-edge cloud applications
                {' '}
                <br />
                {' '}
                using AWS and TypeScript
              </Typography>
            </Box>
          </Grid>

          {/* Smaller Hexagons */}
          {Array.from({ length: 3 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
            <Grid key={index} item sx={{ position: 'absolute', ...calculatePosition(index) }}>
              <Box
                sx={{
                  width: '12vw',
                  height: '12vh',
                  position: 'relative',
                }}
              >
                <Box
                // component="div"
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    paddingBottom: '115.47%',
                    backgroundColor: '#3498db',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Use different images for each smaller hexagon */}
                  <img
                    src={imagePreviews[index]} // Replace with the actual image path
                    alt="Your Alt Text"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      clipPath: 'inherit',
                    }}
                  />
                </Box>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, 75%)',
                    padding: '10px',
                    color: '#F6F7EB',
                    WebkitTextStroke: '1px #000',
                    fontWeight: 'bold',
                    backgroundColor: '#ffffff80',
                    backdropFilter: blur('12px'),
                    WebkitBackdropFilter: blur('12px'),
                  }}
                >
                  {textPreviews[index]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: 'linear-gradient(to bottom, #0172AF, #809BDA)',
        }}
      />
    </>
  );
}

export default Homepage;

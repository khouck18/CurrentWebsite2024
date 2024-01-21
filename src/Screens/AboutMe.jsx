import React from 'react';
import {
  Box, Chip, Divider, Grid, Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KenyanBio from '../images/KenyanBio.png';

function AboutMe() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: 'linear-gradient(to bottom, #809BDA, #FFEDCB)',
        }}
      />
      <Box sx={{
        height: '100vh', width: '90vw', backgroundColor: '#FFEDCB', paddingY: '10vh', paddingLeft: '10vw',
      }}
      >
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h2">About Me</Typography>
            <Divider sx={{ borderBottom: 'solid 3px #8A7356' }} />
            <Typography variant="h5">
              {/* eslint-disable-next-line max-len */}
              I work as a dedicated Cloud Software Engineer with a focus on front-end development using TypeScript, React, and JavaScript. I am currently contributing to the advancement of cutting-edge cloud applications at Intel, showcasing my expertise in architecting robust and secure solutions by leveraging my proficiency in front-end technologies and AWS.
            </Typography>
            <Typography variant="h4" sx={{ marginTop: (theme) => theme.spacing(4) }}>Experience</Typography>
            <Typography variant="h5">
              <AddIcon fontSize="large" sx={{ color: '#8A7356', transform: 'translateY(7px)' }} />
              Cloud Software Engineer at Intel
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="#8A7356" />
              </svg>
              {' '}
              2022 - Present
            </Typography>
            <Typography variant="h5">
              <AddIcon fontSize="large" sx={{ color: '#8A7356', transform: 'translateY(7px)' }} />
              Software Engineer Intern at Coinbase
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="#8A7356" />
              </svg>
              {' '}
              2021
            </Typography>
            <Typography variant="h5">
              <AddIcon fontSize="large" sx={{ color: '#8A7356', transform: 'translateY(7px)' }} />
              Software Developer Intern at Aspen Capital
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="#8A7356" />
              </svg>
              {' '}
              2019
            </Typography>
            <Typography variant="h5">
              <AddIcon fontSize="large" sx={{ color: '#8A7356', transform: 'translateY(7px)' }} />
              IT Intern at Randall-Reilly
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="#8A7356" />
              </svg>
              {' '}
              2017
            </Typography>
            <Typography variant="h4" sx={{ marginTop: (theme) => theme.spacing(4), marginBottom: (theme) => theme.spacing(1) }}>Skills</Typography>
            <Grid item>
              <Chip label="HTML" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="CSS" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="React" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="React Native" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="Redux" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="TypeScript" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="JavaScript" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="Amazon Web Services (AWS)" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="SQL" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="Kibana" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="Elasticsearch" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="Figma" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
              <Chip label="Jest" variant="outlined" sx={{ marginRight: (theme) => theme.spacing(1) }} />
            </Grid>
            <Divider sx={{ borderBottom: 'solid 3px #8A7356', marginTop: (theme) => theme.spacing(4) }} />
          </Grid>
          <Grid item xs={5}>
            <img
              src={KenyanBio}
              alt="BioPic"
              style={{
                position: 'absolute',
                width: '58vh',
                height: 'auto',
                objectFit: 'cover',
                clipPath: 'inherit',
                border: 'solid 6px #8A7356',
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: 'linear-gradient(to bottom, #FFEDCB, #A7D8A0)',
        }}
      />
    </>

  );
}

export default AboutMe;

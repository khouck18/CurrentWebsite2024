/* eslint-disable react/no-unescaped-entities */
import {
  Box, Grid, Typography, Card, CardHeader, CardContent, Divider, Chip,
} from '@mui/material';
import React from 'react';
import Preview1 from '../images/Preview1.mp4';
import InstaDemo from '../images/InstaDemo.mp4';
import ShopifyAppDemo from '../images/ShopifyAppDemo.mp4';

function Projects() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: 'linear-gradient(to bottom, #A7D8A0, #548B85)',
        }}
      />
      <Box sx={{
        height: '100vh', width: '100vw', backgroundColor: '#548B85', paddingY: '10vh', color: 'white',
      }}
      >
        <Grid container justifyContent="center" sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">Projects</Typography>
            <Divider sx={{ borderBottom: 'solid 1px white', marginX: '5%', marginTop: '1%' }} />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={3} sx={{ marginLeft: '2%', marginTop: '5%' }}>
            <Card raised sx={{ width: '100%', height: '70vh' }}>
              <CardHeader
                title="Computer Vision Hand Tracking"
              />
              <CardContent>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video width="100%" controls>
                  <source src={Preview1} type="video/mp4" />
                </video>
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '5%' }}>
                  This project incorporates computer vision principles and
                  utilizes Google's Mediapipe hand tracking software.
                  Users can draw on the screen by holding up one finger,
                  and holding up two fingers enables them to choose a color
                  or activate the eraser from the header bar.
                </Typography>
                <Divider sx={{ marginY: '10px', borderBottom: 'solid 1px black' }} />
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '5%', marginBottom: '1%' }}>
                  Technologies Used
                </Typography>
                <Grid container>
                  <Grid item>
                    <Chip label="Python" outlined />
                    {' '}
                    <Chip label="Computer Vision" outlined />
                    {' '}
                    <Chip label="Google Mediapipe" outlined />
                    {' '}
                    <Chip label="Webcam Integration" outlined />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} sx={{ marginLeft: '2%', marginTop: '5%' }}>
            <Card raised sx={{ width: '100%', height: '70vh' }}>
              <CardHeader
                title="Mock Zootopia Themed Instagram"
              />
              <CardContent>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video width="100%" controls>
                  <source src={InstaDemo} type="video/mp4" />
                </video>
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '5%' }}>
                  This project utilizes React and Redux to develop a
                  simulated Disney Zootopia-themed version of Instagram.
                  Users have the ability to post pictures with captions,
                  interact with other users' photos by liking and commenting,
                  as well as follow or unfollow other users.
                </Typography>
                <Divider sx={{ marginY: '10px', borderBottom: 'solid 1px black' }} />
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '5%', marginBottom: '1%' }}>
                  Technologies Used
                </Typography>
                <Grid container>
                  <Grid item>
                    <Chip label="React" outlined />
                    {' '}
                    <Chip label="Redux" outlined />
                    {' '}
                    <Chip label="CSS" outlined />
                    {' '}
                    <Chip label="JavaScript" outlined />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} sx={{ marginX: '2%', marginTop: '5%' }}>
            <Card raised sx={{ width: '100%', height: '70vh' }}>
              <CardHeader
                title="Shopify App Demo"
              />
              <CardContent>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video width="100%" controls>
                  <source src={ShopifyAppDemo} type="video/mp4" />
                </video>
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '5%' }}>
                  This application was designed to streamline the process
                  for Shopify store owners in creating FAQ pages for their
                  websites. It provides prebuilt templates, making it easy
                  to enhance website content and attract more traffic.
                </Typography>
                <Divider sx={{ marginY: '10px', borderBottom: 'solid 1px black' }} />
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '5%', marginBottom: '1%' }}>
                  Technologies Used
                </Typography>
                <Grid container>
                  <Grid item>
                    <Chip label="Liquid" outlined />
                    {' '}
                    <Chip label="Shopify App Store" outlined />
                    {' '}
                    <Chip label="HTML" outlined />
                    {' '}
                    <Chip label="CSS" outlined />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: 'linear-gradient(to bottom, #548B85, #9ED7DD)',
        }}
      />
    </>

  );
}

export default Projects;

import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, install } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Card, Checkbox, CardActionArea, CardActions, CardMedia, Button, CardContent, CircularProgress } from "@material-ui/core";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Box from './Box'

install();

const App = observer(({ variant, title, description, id }) =>
  <Box
    // bgcolor="background.paper"
    width={{ sm: '100%', md: 480, }}
    // height={{ sm: '100%', md: 480, }}
    height={{ sm: '100%', md: 360, }}
    borderRadius={12} boxShadow={1}
    style={{ overflow: 'hidden', background: 'linear-gradient(to right, #36353c 0%,#52555a 100%,#7db9e8 100%)', margin: 20 }}
  >
    <VideoCardImage {...{ id, variant }} />
    <Box display="flex" flexDirection="column" p={2} >
      <VideoCardTitle {...{ title }} />
      {/* <VideoCardDescription {...{ description }} /> */}
    </Box>
  </Box>
)

export default App

const VideoCardImage = observer(({ id, variant }) =>
  <Box
    bgcolor="grey.200"
    width={'100%'}
    height={{ md: 270 }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    style={{ overflow: 'hidden' }}
  >
    {!variant && <img src={`http://i3.ytimg.com/vi/${id}/hqdefault.jpg`} width="100%" />}
    {variant === 'loading' && <CircularProgress color="inherit" />}
    {variant === 'error' && <Favorite />}
  </Box>
)

const VideoCardTitle = observer(({ title }) =>
  <Box display="flex" width="100%">
    <Box width="100%">
      <Typography gutterBottom variant="h6" style={{color: '#fff'}}>
        {title && title}
        {!title && <span style={{ background: 'rgb(238, 238, 238)', color: 'transparent', borderRadius: 20 }}>____________________</span>}
      </Typography>
    </Box>
    {/* <Box flexShrink={0}>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={true} />
    </Box> */}
  </Box>
)

const VideoCardDescription = observer(({ description }) =>
  <Box display="flex" width="100%">
    <Typography component="span" noWrap>
      {description}
    </Typography>
  </Box>
)
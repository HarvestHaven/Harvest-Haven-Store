import React from 'react';
import VideoCard from './VideoCard'
import Box from './Box'
import { observer } from 'mobx-react';
import Background from '../media/wood.jpg'
import { withStyles } from '@material-ui/core/styles'
import VideoPlayer from './VideoPlayer'
import { backgroundImages } from 'polished';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    blurred : {
        position: 'relative',
        top: 0,
        paddingTop: 80,
        // zIndex: -1,
        height: '100%',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(30px)',
        overflow: 'hidden',
        transform: 'scale(1.2)'
    }
})

const VideoPage = withStyles(styles)(({ match, info, siblings, lastNav, classes }) => {
    const { id } = !!match && match.params
    return (
        <Box display="flex" flexDirection="row" height="100vh" >
            <Box display="flex" flexDirection="column" flexGrow={1} >
                <Box flexGrow={1} style={{overflow: 'hidden'}}>
                    <VideoPlayer {...{ id }} />
                </Box>
                <Box height={270} bgcolor="grey.400" style={{overflow: 'hidden'}}>
                    <Box zIndex="tooltip">
                        <Typography variant="h5" color="inherit">Video Descriptions</Typography>
                    </Box>
                        <div className={classes.blurred} 
                        style={{ backgroundImage: `url(http://i3.ytimg.com/vi/${id}/hqdefault.jpg)`, }}/>
                </Box>
            </Box>
            <Box width={485} bgcolor="white" >
                More videos
            </Box>
        </Box>
    )
})

export default VideoPage

export const PaperPanel = observer(({ children }) => (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="stretch"
        flexWrap="no-wrap"
        minHeight="100vw"
        width="100%"
        style={{ overflowY: 'scroll' }}
    >
        {children}
    </Box>
))
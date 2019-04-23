import React from 'react';
import VideoCard from './VideoCard'
import Box from './Box'
import { observer } from 'mobx-react';
import Background from '../media/gradient.png'
import { withStyles } from '@material-ui/core/styles'
import VideoPlayer from './VideoPlayer'
import { backgroundImages } from 'polished';
import { Typography, Chip, Fab, AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import SaveIcon from '@material-ui/icons/SaveAlt';
import ShareIcon from '@material-ui/icons/Share';
import ArrowIcon from '@material-ui/icons/ArrowBack';
import { toJS } from 'mobx';
import { BrowserRouter, Link, Route, Redirect, Switch, withRouter } from 'react-router-dom'

const styles = theme => ({
    blurred: {
        // position: 'relative',
        // top: 0,
        // paddingTop: 80,
        // zIndex: -1,
        height: 'calc(100vh - 56px)',
        width: '100%',
        // height: 400,
        // width: 400,
        // backgroundImage: 'url("https://tinyurl.com/y3993bb3")',
        backgroundImage: "background-image: url('data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='none' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g'%3E%3Cstop offset='0' stop-color='%23fff' stop-opacity='0'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3Cmask id='m'%3E%3Crect x='0' y='0' width='1' height='1' fill='url(%23g)'%3E%3C/rect%3E%3C/mask%3E%3ClinearGradient id='a' gradientTransform='rotate(90)'%3E%3Cstop offset='0' stop-color='%234e332a'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%23211511'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientTransform='rotate(90)'%3E%3Cstop offset='0' stop-color='%234e332a'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%23433932'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='1' height='1' fill='url(%23a)' mask='url(%23m)'%3E%3C/rect%3E%3Crect x='0' y='0' width='1' height='1' fill='url(%23b)' mask='url(%23m)' transform='translate(1,1) rotate(180)'%3E%3C/rect%3E%3C/svg%3E ')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // border: '2px solid red !important'
        // filter: 'blur(30px)',
        // overflow: 'hidden',
        // transform: 'scale(1.2)'
    }
})

const chips = [
    {
        name: 'eggs'
    },
    {
        name: 'poultry'
    }
]

const moreVideos = new Array(5)
moreVideos.fill('')

const VideoPage = withStyles(styles)(({ entry, match, siblings, lastNav, classes }) => {
    const { id } = !!match && match.params
    console.log(id)
    console.log(match)
    return (
        <Box display="flex" flexDirection="row" height="100vh" >
            <Box display="flex" flexDirection="column" flexGrow={1} >
                <Box flexGrow={1} style={{ overflow: 'hidden' }}>
                    <VideoPlayer {...{ id }} />
                </Box>
                <Box height={270} bgcolor="#1f2021" style={{ overflow: 'hidden' }} >
                    {moreVideos.map(item => (
                        <VideoCard {...{
                            id: 'fLjslMtjkhs',
                            title: 'Harvest Haven Pastured Poultry – Free Range Living',
                            description: 'Harvest Haven laying hens, broilers, and turkeys are truly pasture raised and free range.  Our birds are in the pasture during the growing season where they get to scratch, hunt for bugs, and eat all the greens they want.'
                        }} />
                    ))}
                </Box>
            </Box>
            <Box minWidth={482} style={{ overflowY: 'scroll', textDecoration: 'unset !important' }}>
                <Link to={`/library/eggs`} >
                    <AppBar position="static" style={{ background: '#2196f3' }}>
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <ArrowIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" >
                                Back to Library
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Link>
                <VideoDetails {...{ entry }} />
            </Box>
        </Box>
    )
})

export default VideoPage

export const VideoDetails = withStyles(styles)(observer(({ entry, classes }) => (
    <Box position="relative" height="100%" style={{ overflowX: 'hidden', overflowY: 'scroll' }} alignItems="stretch">
        <Box style={{ color: 'white' }} margin="64px" display="flex" position="absolute" zIndex={1} >
            <TitleAndDescription {...entry} />
            <ChipsAndActions {...entry} />
        </Box>
        <Box zIndex={-1} position="absolute" top={0} justifyContent="stretch" alignItems="stretch">
            <img src={Background} className={classes.blurred} />
            {/* <div className={classes.blurred} /> */}
        </Box>
    </Box>
)))

export const TitleAndDescription = observer(({ id, title, description }) => (
    <Box>
        <Typography variant="h4" color="inherit" gutterBottom >{title}</Typography>
        <Typography variant="subtitle1" color="inherit" paragraph style={{ fontSize: 20 }}>{description}</Typography>
    </Box>
))

const chipStyles = theme => ({
    root: {
        margin: theme.spacing.unit,
        color: '#6e542b !important',
        background: '#f6c964 !important',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    fab: {
        background: 'transparent !important',
        border: '2px solid white !important',
        boxShadow: 'none !important'
    },
})

export const ChipsAndActions = withStyles(chipStyles)(observer(({ id, title, description, classes }) => (
    <Box minWidth={300} >
        <Typography variant="h6" color="inherit" paragraph >Tags:</Typography>
        {chips.map(chip => (
            <Chip
                // icon={<FaceIcon />}
                label="Primary Clickable Chip"
                color="primary"
                label={chip.name}
                classes={{
                    root: classes.root,
                    colorPrimary: classes.colorPrimary
                }}
            />
        ))}
        <Fab size="medium" color="secondary" classes={{ root: classes.fab }} ><SaveIcon /></Fab>
        <Fab size="medium" color="secondary" classes={{ root: classes.fab }} ><DoneIcon /></Fab>
        <Fab size="medium" color="secondary" classes={{ root: classes.fab }} ><ShareIcon /></Fab>
    </Box>
)))





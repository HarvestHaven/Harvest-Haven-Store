import React from 'react';
import VideoCard from './VideoCard'
import Box from './Box'
import { observer } from 'mobx-react';
import Background from '../media/wood.jpg'
import { withStyles } from '@material-ui/core/styles'
import VideoPlayer from './VideoPlayer'

const styles = theme => ({
    // root : {
    //     ///
    // }
})

export default function VideoPage({ id, info, siblings, lastNav }) {
    return (
        <Box display="flex" flexDirection="row" height="100vh" >
            <Box display="flex" flexDirection="column" flexGrow={1} bgcolor="secondary.main" >
                <Box flexGrow={1} >
                    <VideoPlayer {...{ id }} />
                </Box>
                <Box height={270} bgcolor="grey.400" >
                    Video Descriptions
                </Box>
            </Box>
            <Box width={485} bgcolor="white" >
                More videos
            </Box>
        </Box>
    )
}

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
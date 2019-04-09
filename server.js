/*	Author: Michael Preston
 *	Created Date: "04-09-2019"
 */
//Source: https://github.com/mooradal/youtubeDownloader
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Youtube Downloads Server Listening on Port ' + PORT);
})

// Sample usage in client: axios.get('/download?URL=${url}`')
app.get('/download', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});
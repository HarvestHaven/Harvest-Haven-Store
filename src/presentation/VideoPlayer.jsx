import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { FilePlayer, YouTube } from 'react-player/lib/players'
import { inject, observer } from 'mobx-react'
import { observable, action, decorate } from 'mobx'
import fileUrl from 'file-url'
// import ytdl from 'ytdl-core'
import axios from 'axios'
import localForage from 'localforage';
import Video from './video.mp4'
// require('../../server')
const ytdl = require('ytdl-core');

var fs = require('browserify-fs');

const x = localForage.createInstance({
    name: 'hh-video', storeName: 'data',
    description: 'this is a store'
});

class VideoPlayer extends Component {

    cat = 'test'

    state = {
        url: null
    }

    componentDidMount() {
        const { id } = this.props
        this.loadVideoURL()
    }

    loadVideoURL = () => {
        x.getItem('video').then(file => {
            console.log('file', file)
            console.log('getting file....')
            const url = URL.createObjectURL(file)
            this.setState({ url })
        })
        // console.log(`Set Video [${key}] as '${value}'`)
        // console.log('getting file....')
        // const url = URL.createObjectURL(e.target.files[0])
        // console.log(url)
        // this.setState({ url })
    }

    ref = player => {
        this.player = player
    }

    downloadFile = () => {
        console.log('start download')
        // console.log(this.props)
        this.props.forage.videos.get()
        // ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
            // .pipe(fs.createWriteStream('video.flv'));
        
        // fs.mkdir('/home', function() {
        //     console.log('making directory....')
        //     let res = null

        //     const url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
        //     const output = '/home/video.mp4'
        //     const video = ytdl(url);
        //     let starttime;
        //     video.pipe(fs.createWriteStream(output));
        //     video.once('response', () => {
        //         starttime = Date.now();
        //     });
        //     video.on('progress', (chunkLength, downloaded, total) => {
        //         const percent = downloaded / total;
        //         const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
        //         readline.cursorTo(process.stdout, 0);
        //         process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded`);
        //         process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
        //         process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
        //         process.stdout.write(`, estimated time left: ${(downloadedMinutes / percent - downloadedMinutes).toFixed(2)}minutes `);
        //         readline.moveCursor(process.stdout, 0, -1);
        //         console.log('percent', percent)
        //     });
        //     video.on('end', () => {
        //         process.stdout.write('\n\n');
        //     });   
                // ytdl.getInfo('A02s8omM_hI', (err, info) => {
                //     if (err) throw err;
                //     let format = ytdl.chooseFormat(info.formats, { quality: '134' });
                //     if (format) {
                //       console.log('Format found!');
                //     }
                //   });
            // console.log(stream)
            // fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
            //     console.log('file written')
            //     console.log('file reader....')
            // setTimeout(() => {
            //     fs.readFile('/home/video.flv', 'utf-8', function(err, data) {
            //         console.log(data);
            //     });
            // }, 5000)
            // });
        // });
    }

    onChooseFile = e => {
        console.log(e.target.files[0])
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url)
        // this.setState({ url })

        console.log(x)

        const key = 'Cat'
        x.setItem('video', e.target.files[0])
            .then(function (value) {
                console.log(`Set Video [${key}] as '${value}'`)
                const url = URL.createObjectURL(file)
                this.setState({ url })
                // we got our value
            }).catch(function (err) {
                console.log(err)
                // we got an error
            });

    }

    render() {
        const { id } = this.props
        return (
            <>
                <input onChange={this.onChooseFile} type='file' />
                <button onClick={this.downloadFile} >Download Blob</button>
                <ReactPlayer
                    ref={this.ref}
                    url={this.state.url}
                    // url={`https://www.youtube.com/watch?v=${id}`}
                    playing={true}
                    autoPlay={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    controls={true}
                // light={/thumbnail-url-from=parent}
                />
            </>
        )
    }
}

export default inject('forage')(decorate(
    VideoPlayer, {
        cat: observable
    }))
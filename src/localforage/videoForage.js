import axios from 'axios';
import ytdl from 'ytdl-core';

export default class VideoForage {


    testUrl = 'https://www.youtube.com/watch?v=i6USBe9Gr3U';

    constructor(localForage) {
        this.$ = localForage.createInstance({
            name: 'hh-video',
            storeName: 'data',
            description: 'this is a store'
        });
    }

    init = async () => {
        // console.log(this.$)
        const that = this
        const key = 'Cat'
        this.$.setItem('key', key)
            .then(function (value) {
                that.$.getItem('key');
                console.log(`Set Video [${key}] as '${value}'`)
                // we got our value
            }).catch(function (err) {
                console.log(err)
                // we got an error
            });
    }

    get = async () => {
        const fetchURLS = [
            '/videos/tINcLrUEFV0',
            '/videos/J57KCTvZ7Lc',
            '/videos/fLjslMtjkhs',
            '/videos/Bgu7f5cq6cQ',
            '/videos/fLjslMtjkhs',
            // 'https://www.youtube.com/watch?v=tINcLrUEFV0&t=66',
            // 'https://www.youtube.com/watch?v=tINcLrUEFV0',
            // 'https://www.youtube.com/watch?v=J57KCTvZ7Lc',
            // 'https://www.youtube.com/watch?v=fLjslMtjkhs',
            // 'https://www.youtube.com/watch?v=Bgu7f5cq6cQ',
            // 'https://www.youtube.com/watch?v=fLjslMtjkhs&feature=youtu.be&t=43'
        ]
        await fetchURLS.map(
            async (url) =>
                await axios.get(url, {
                    // mode: 'no-cors'
                }).then(response => {
                    console.log(response)
                })
        )
        // axios.get('https://www.youtube.com/watch?v=tINcLrUEFV0').then(response => {
        //     console.log(response)
        // })
    }

    clear = async () => {
        this.$.clear().then(function () {
            // Run this code once the database has been entirely deleted.
            console.log('Database is now empty.');
        }).catch(function (err) {
            // This code runs if there were any errors
            console.log(err);
        });
    }

    drop = async () => {
        this.$.dropInstance().then(function () {
            console.log('Dropped the store of the current instance');
        });
    }

    /**
     *
     * *** MP ***
     *
     */

    // Download via express (pipes to browser or callee I think)
    // FIXME: Would require we use the Express Server's PORT, 4000.
    expressDownloadYTVideo = async () => {
        console.log('attempting download via express server...');

        return axios.get('localhost:4000/download?URL=' + this.testUrl);
    }

    // FIXME: CORS error when I try this...
    ytdlVideo = async () => {
        console.log('attempting download via ytdl...');
        const stream = ytdl(this.testUrl, {
            format: 'mp4'
        })
        // Can pipe to either a Response or a Node ReadableStream in ytdl.
        // .pipe(this.$.setItem('video', ));
        stream.on('end', ()=>{
            console.log('Finished!')
        })

    }

    // FIXME: CORS error when I try this...
    downloadYTVideo = async () => {
        fetch(this.testUrl)
            .then(function (response) {
                return response.blob; //Psst! ReadableStream is an option via 'response.body'
            })
            .then(function (blob) {
                console.log('yay I have a blob', blob);
            })
            .catch(console.log);
    }

}
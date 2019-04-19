import axios from 'axios';
export default class VideoForage {

    constructor(localForage) {
        this.$ = localForage.createInstance({
            name: 'hh-video', storeName: 'data',
            description: 'this is a store'
        });
    }

    init = async () => {
        // console.log(this.$)
        const that = this
        const key = 'Cat'
        this.$.setItem('video', key)
            .then(function (value) {
                that.$.getItem('video');
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

}
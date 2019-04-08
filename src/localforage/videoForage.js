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
        // let request1 = new Request('/db/videos/fLjslMtjkhs', { mode: 'no-cors' });
        // let request2 = new Request('/db/videos/J57KCTvZ7Lc', { mode: 'no-cors' });
        // let request3 = new Request('/db/videos/tINcLrUEFV0', { mode: 'no-cors' });
        // let request4 = new Request('/db/videos/fLjslMtjkhs', { mode: 'no-cors' });
        // await fetch(request1)
        // await fetch(request2)
        // await fetch(request3)
        // await fetch(request4)
        await fetch('https://www.youtube.com/watch?v=tINcLrUEFV0&t=66')
        await fetch('https://www.youtube.com/watch?v=tINcLrUEFV0')
        await fetch('https://www.youtube.com/watch?v=J57KCTvZ7Lc')
        await fetch('https://www.youtube.com/watch?v=fLjslMtjkhs')
        await fetch('https://www.youtube.com/watch?v=Bgu7f5cq6cQ')
        await fetch('https://www.youtube.com/watch?v=fLjslMtjkhs&feature=youtu.be&t=43')

        // .then((response) => { console.log(`Fetch --> Response: ${response.body}`) })

        // fetch('https://www.youtube.com/watch?v=tINcLrUEFV0').then((response) => {
        //     // console.log(response)
        //     // console.log(response.body)
        //     console.log(`Fetch --> Response: ${response.body}`)
        // })
        // fetch('https://www.youtube.com/watch?v=fLjslMtjkhs').then((response) => {
        //     // console.log(response)
        //     // console.log(response.body)
        //     console.log(`Fetch --> Response: ${response.body}`)
        // })
        // fetch('https://www.youtube.com/watch?v=fLjslMtjkhs').then((response) => {
        //     // console.log(response)
        //     // console.log(response.body)
        //     console.log(`Fetch --> Response: ${response.body}`)
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
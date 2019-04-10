import React from 'react';
import { action, observable } from 'mobx';
import { Button } from '@material-ui/core';
import { Workbox } from 'workbox-window';

export default class ServicesStore {

    @observable enqueueSnackbar = null
    @observable closeSnackbar = null

    constructor(rootStore) {

        // : Reference the parent store
        this.root = rootStore

        // : Set Listeners for Online/Offline Status
        window.addEventListener('online', this.online);
        window.addEventListener('offline', this.offline);

        // : Register & Monitor Service Worker
        if ('serviceWorker' in navigator) {
            const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);

            console.log('hello there good d7 cruiser testingates cats more carrots tests')

            wb.addEventListener('installed', (event) => {
                if (!event.isUpdate) {
                    this.notify('App can now be used offline!', { variant: 'success' });
                    // window.location.reload()
                } else if (event.isUpdate) {
                    this.notify('A new service worker has installed (updating a previous one)');
                } else { }
            });

            wb.addEventListener('waiting', (event) => {
                if (!event.isUpdate) {
                    alert('A waiting new service worker has installed (for the first time)');
                } else if (event.isUpdate) {
                    // : A service updated worker has installed but it's stuck in the waiting phase
                    this.notify("Harvest Haven is ready to be updated", {
                        persist: true,
                        variant: 'info',
                        action: (
                            <>
                                <Button onClick={() => this.updateAndRestart()} size="small" color="inherit">{'Restart Now'}</Button>
                                <Button size="small" color="inherit">{'Not Right Now'}</Button>
                            </>
                        ),
                    });
                } else { }
            });

            wb.addEventListener('controlling', (event) => {
                if (!event.isUpdate) {
                    this.notify('The service worker has started controlling the page (for the first time)');
                } else if (event.isUpdate) {
                    this.notify('The updated service worker has started controlling the page and cake');
                } else { }
            });

            wb.addEventListener('activated', (event) => {
                if (!event.isUpdate) {
                    this.notify('The service worker has finished activating (for the first time) & This app is now available offline');
                    window.location.reload()
                } else if (event.isUpdate) {
                    this.notify('The updated service worker has finished activating & This app was updated and is available without internet');
                } else { }
            });

            // : Register the service worker after event listeners have been added.
            wb.register();
            this.wb = wb

        }

    }

    @action.bound offline = () => {
        this.offline = this.notify('Offline mode enabled', {
            persist: true,
            action: (
                <Button onClick={() => this.online()} size="small" color="inherit">{'Dismiss'}</Button>
            ),
        });
        this.closeSnackbar(this.online)
    }

    @action.bound online = () => {
        this.online = this.notify('Your are back online!', {
            variant: 'success',
        });
        this.closeSnackbar(this.offline)
    }

    @action.bound updateAndRestart = () => {
        this.wb.addEventListener('controlling', (event) => {
            window.location.reload()
        });
        // : Send a message telling the service worker to skip waiting && claim clients.
        // : This will trigger the newly added `controlling` event handler above.
        this.wb.messageSW({ type: 'SKIP_WAITING' });
    }

    @action setNotifyFunctions = (functions) => {
        const { enqueueSnackbar, closeSnackbar } = functions
        this.enqueueSnackbar = enqueueSnackbar
        this.closeSnackbar = closeSnackbar
    }

    @action notify = (message, config) =>
        this.enqueueSnackbar(message, config)

}
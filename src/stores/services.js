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
        window.addEventListener('online',  this.online);
        window.addEventListener('offline', this.offline);

        // : Register & Monitor Service Worker
        if ('serviceWorker' in navigator) {
            const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);

            console.log('hello there good things')

            wb.addEventListener('installed', (event) => {
                if (!event.isUpdate) {
                    alert('A new service worker has installed (for the first time)s');
                } else if (event.isUpdate) {
                    alert('A new service worker has installed (updating a previous one)');
                } else { }
            });

            wb.addEventListener('waiting', (event) => {
                if (!event.isUpdate) {
                    // alert('A new service worker has installed (for the first time)');
                } else if (event.isUpdate) {
                    alert("A service updated worker has installed but it's stuck in the waiting phase");
                } else { }
            });

            wb.addEventListener('controlling', (event) => {
                if (!event.isUpdate) {
                    alert('The service worker has started controlling the page (for the first time)');
                } else if (event.isUpdate) {
                    alert('The updated service worker has started controlling the page and cake');
                } else { }
            });

            wb.addEventListener('activated', (event) => {
                if (!event.isUpdate) {
                    alert('The service worker has finished activating (for the first time) & This app is now available offline');
                } else if (event.isUpdate) {
                    alert('The updated service worker has finished activating & This app was updated and is available without internet');
                } else { }
            });

            // : Register the service worker after event listeners have been added.
            wb.register();

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

    @action setNotifyFunctions = (functions) => {
        const { enqueueSnackbar, closeSnackbar } = functions
        this.enqueueSnackbar = enqueueSnackbar
        this.closeSnackbar = closeSnackbar
    }

    @action notify = (message, config) =>
        this.enqueueSnackbar(message, config)

}
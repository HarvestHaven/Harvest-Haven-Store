import React, { Component } from 'react';
import Library from '../presentation/Library';
import Catalog from '../config/catalog'
import { observable } from 'mobx';
import { BrowserRouter, Link, Route, Redirect, Switch, withRouter } from 'react-router-dom'
import VideoPage from '../presentation/VideoPage';

export default class LibraryContainer extends Component {
    
    @observable catalog = Catalog
    
    render() {
        const { catalog } = this
        return (
            <Switch>
                <Route exact path={`/library/:category`} children={() => <Library {...{ catalog }} /> }/>
                <Route path={`/library/:category/:id`} component={VideoPage} />
            </Switch>
        )
    }
}

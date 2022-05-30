import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomePage';
import About from './AboutMe';
import { Switch, Route, Redirect} from 'react-router-dom';
import Photo from './PhotoGallery'
class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                        <div>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path='/aboutme' component={About} />
                                <Route exact path='/aboutme' component={About} />
                                <Route path="/photo" component={Photo}/>
                                <Redirect to="/home" />
                            </Switch>
                        </div>

                <Footer />
            </div>
        );
    }
}
export default Main;
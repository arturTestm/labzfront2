import React, {Component, Suspense} from 'react';
import {Route} from "react-router-dom";
import Homepage from "./Homepage/Homepage";

class Main extends Component {

    links = [
        ...Homepage,
    ]

    render() {
        return (
            <Suspense fallback={''}>
                <div>
                    {this.links.map((route, index) => (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.main}/>
                    ))}
                </div>
            </Suspense>
        )
    }
}

export default Main;
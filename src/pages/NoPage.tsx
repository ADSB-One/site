import React from "react";
import { Link } from "react-router-dom";

export default class NoPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-fluid'>
                <h2>Nothing to see here.</h2>
                <p>
                    <Link to="/">Go to home page</Link>
                </p>
            </div>
        )
    }
}
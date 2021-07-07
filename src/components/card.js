
import React, { Component } from 'react';

export default class Card extends Component {

    render() {
        const title = this.props.title;
        return (
            <div className=" card mb-3">
                <div className="card-header"><h3>{title}</h3></div>
                <div className="card-body">
                {this.props.children}
                </div>
        </div>
        )
    }
}

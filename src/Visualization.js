import React from 'react';

class Visualization extends React.Component {

    render() {
        return (
            <div class="card">
                <iframe src={this.props.link} class="card-img-top"></iframe>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{this.props.subtitle}</h6>
                    <a href={this.props.link} class="card-link">Full Screen</a>
                    <a href={this.props.source} class="card-link">Source Code</a>
                </div>
            </div>
        );
    }
}

export default Visualization;
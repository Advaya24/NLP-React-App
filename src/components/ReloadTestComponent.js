import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ReloadTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numClicks: 0
        }

        this.clickFunc = this.clickFunc.bind(this);
    }

    clickFunc() {
        this.setState({numClicks: this.state.numClicks+1});
    }

    render() {
        return (
            <div>
                <p>{this.state.numClicks}</p>
                <Button onClick={this.clickFunc}>Click</Button>
            </div>
        )
    }
}

export default ReloadTest;
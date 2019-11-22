import React from "react";
import Slider from "rc-slider";
import ReactJson from "react-json-view";

export default class SliderChart extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentDisplay: this.props.data[4]
        }

        this.changeHistory = this.changeHistory.bind(this);
    }

    changeHistory(value) {
        switch(value) {
            case 0:
                this.state.currentDisplay = this.props.data[0];
                break;
            case 25:
                this.state.currentDisplay = this.props.data[1];
                break;
            case 50:
                this.state.currentDisplay = this.props.data[2];
                break;
            case 75:
                this.state.currentDisplay = this.props.data[3];
                break;
            case 100:
                this.state.currentDisplay = this.props.data[4];
                break;
        }

        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <div className="slider-chart">
                    <Slider 
                        min={0}
                        defaultValue={100} 
                        marks={{ 0: "Earliest", 25: "", 50: "", 75: "", 100: "Latest" }} 
                        step={null}
                        onChange={this.changeHistory}
                    />
                </div>
                <div className="slider-results">
                    <ReactJson
                        src={{
                            ...this.state.currentDisplay.props,
                            timestamp: this.state.currentDisplay.timestamp
                        }}
                        name={false}            
                    />
                </div>
            </div>
        );
    }
}
import React from 'react';
import './index.scss';

/**
 * Custom tooltip class based implementation
 * @param {object} props Component props
 * @param {childNodes} props.children Modal content
 * @returns React.Component
 */
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tooltipActive: false }
        this.currentRef = React.createRef();
    }

    componentDidMount() {

    }

    render() {
        var self = this;

        const nodes = React.Children.map(this.props.children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { tooltipActive: self.state.tooltipActive, handleChange: self._handleChange, position: self.currentRef?.current?.getBoundingClientRect() });
            }
            return child;
        })

        return (
            <div className="Tooltip" ref={this.currentRef}>
                {nodes}
            </div>
        );
    }

    _handleChange = (active) => {
        this.setState({
            tooltipActive: active
        });
    }
};

class Contents extends React.Component {
    render() {
        var active = this.props.tooltipActive;
        var position = this.props.position || null;
        if (active && position) {
            var style = {
                left: position.left + 30,
            };
            return (
                <div style={style} className="Tooltip-content bottom">
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
};

class HoverTrigger extends React.Component {
    render() {
        return (
            <div data-testid="hoverTrigger" onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
                {this.props.children}
            </div>
        );
    }

    _onMouseEnter = () => {
        this.props.handleChange(true);
    }

    _onMouseLeave = () => {
        this.props.handleChange(false);
    }
};

export { Tooltip, Contents, HoverTrigger };
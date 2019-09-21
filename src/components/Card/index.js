import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class Card extends Component {
  static displayName = 'Card';
  static propTypes = {
    title: PropTypes.string,
    extra: PropTypes.node,
    data: PropTypes.array,
  }
  state={
    top: 0,
  }

  componentDidMount() {
    if (!this.Ref) {
      return;
    }
    this.height = Math.abs(this.Ref.clientHeight)/2;
    this.setInterval();
  }
  setInterval() {
    this.timer = setInterval(() => {
      this.setState(({top}) => {
        const moveTop = Math.abs(top) >= this.height ? 0 : --top;
        return {
          top: moveTop,
        };
      });
    }, 30);
  }

  handleMouserOver = () => {
    clearInterval(this.timer);
  }

  handleMouserOut = () => {
    this.setInterval();
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    const { title, data, extra } = this.props;
    const { top } = this.state;
    return (
      <div className="card">
        <div className="title">
          <span>{title}</span>
          {extra}
        </div>
        <div className="content">
          <ul 
            style={{top: top}}
            className="card-list" 
            ref={ref => (this.Ref = ref)}
            onMouseOver={this.handleMouserOver}
            onMouseOut={this.handleMouserOut}
          >
            {data.map((it,index) => {
              return (
                <li key={index}>
                  <a className="name" href={it.href}>{it.name}</a>
                  <span className="time">{it.time}</span>
                  <span className="city">{it.city}</span>
                </li>
              );
            })} 
          </ul>
        </div>
      </div>
    );
  }
}
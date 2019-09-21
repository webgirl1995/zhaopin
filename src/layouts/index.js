import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink,Switch } from 'react-router-dom';
import Home from './../pages/Home';
import PositionList from './../pages/PositionList';
import './index.less';

class App extends Component {
  render() {
    return (<Router>
      <div className="app">
        <div className="app-header">
          <div className="header-main">
            <a className="app-logo">
              <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20"/>
            </a>
            <span className="app-title">社招官网</span>
            <ul className="app-menu">
              <li>
                <NavLink to="/" exact activeClassName="app-menu-active">
                  首&nbsp;&nbsp;页
                </NavLink>
              </li>
              <li>
                <NavLink to="/positionList" activeClassName="app-menu-active">
                  社会招聘
                </NavLink>
              </li>
              <li>
                <NavLink to="/intro" activeClassName="app-menu-active">校园招聘</NavLink>
              </li>
              <li>
                <NavLink to="/intro" activeClassName="app-menu-active">了解阿里</NavLink>
              </li>
              <li>
                <NavLink to="/intro" activeClassName="app-menu-active">个人中心</NavLink>
              </li>
            </ul>
            <div className="login">
              欢迎来到阿里巴巴集团招聘！
              <span>
                <a>登录</a>&nbsp;|&nbsp;
                <a>注册</a>
              </span>
            </div>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/positionList" component={PositionList}/>
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;

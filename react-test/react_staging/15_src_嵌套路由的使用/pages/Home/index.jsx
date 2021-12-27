import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";

export default class index extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <div>
            {/* 注册路由 */}
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              <Redirect to="/home/news" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

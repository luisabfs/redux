import React, { Component, Fragment } from "react";

export default class Main extends Component {
  state = {
    repositoryInput: ""
  };

  render() {
    return (
      <Fragment>
        <form action="" onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>infinitered/reactotron</strong> (A desktop app for
              inspecting your React JS and React Native projects. macOS, Linux,
              and Windows.)
            </p>
            <a href="https://github.com/infinitered/reactotron" />
          </li>
        </ul>
      </Fragment>
    );
  }
}

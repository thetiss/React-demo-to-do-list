import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/listitem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

class App extends Component {
  state = {
    items: [],
    currentItem: { itemContent: "", id: "" },
  };
  //currentItem{}更新
  handleInputOnChange = (event) => {
    const name = event.target.name;
    const itemContent = event.target.value;
    this.setState({
      currentItem: { [name]: itemContent, id: Date.now() },
    });
  };
  //items[]更新,currentItem{}重赋初值
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.currentItem],
      currentItem: { itemContent: "" },
    });
  };

  handleDeleteItem = (id) => {
    const items = [...this.state.items];
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
    this.setState({
      items: items,
    });
  };
  handleCurrentItemStatusChange = (checked) => {
    this.setState({
      currentItem: { [checked]: "checked" },
    });
  };
  render() {
    return (
      <div className="App">
        <form id="to-do-list" className="todo">
          <input
            type="text"
            name="itemContent"
            value={this.state.currentItem.itemContent}
            onChange={this.handleInputOnChange}
            placeholder="添加待办事项"
          ></input>
          <button onClick={this.handleSubmit}>提交</button>
        </form>
        <ListItem items={this.state.items} onDelete={this.handleDeleteItem} />
      </div>
    );
  }
}

export default App;

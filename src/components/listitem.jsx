import React, { Component } from "react";
// import "../styles/listitem.css";
import "../styles/listitem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
class ListItem extends Component {
  state = { checked: "" };
  //不与父组件 App交互,自己处理显示逻辑，数据保持不变
  //可以实现显示逻辑
  handleStatusChange = (item) => {
    // item.checked = "checked";
    // this.props.handleCurrentItemStatusChange();
    //alert("Clicked");
    // console.log("onChange");
    // console.log(Date.now());
  };
  render() {
    const {
      items,
      onChange,
      onDelete,
      handleCurrentItemStatusChange,
    } = this.props;
    const item = items.map((item) => {
      return (
        <div className="list" key={item.id} id={item.id}>
          <p>
            <input
              type="checkbox"
              onChange={() => {
                this.handleStatusChange(item);
              }}
            />
            <label data-content={item.itemContent}>{item.itemContent}</label>
            <span>
              <FontAwesomeIcon
                className="faicons"
                icon="trash"
                onClick={() => {
                  onDelete(item.id);
                }}
              ></FontAwesomeIcon>
            </span>
          </p>
        </div>
      );
    });
    return (
      <div>
        <FlipMove duration={400} easing="ease-in-out">
          {item}
        </FlipMove>
      </div>
    );
  }
}
export default ListItem;

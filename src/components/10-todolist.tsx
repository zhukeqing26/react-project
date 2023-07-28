import React, { Component } from "react";

export default class ToDoList extends Component {
  inputRef = React.createRef();
  state = {
    list: [
      {
        id: 1,
        text: "aaa",
      },
      {
        id: 2,
        text: "bbb",
      },
      {
        id: 3,
        text: "ccc",
      },
    ],
  };
  handelAdd() {
    // console.log(this.inputRef.current.value);
    this.setState({
      list: [
        ...this.state.list,
        { id: new Date().getTime(), text: this.inputRef.current.value },
      ],
    });
    this.inputRef.current.value = "";
  }
  handelDelete(id: number) {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.handelAdd()}>添加</button>

        {this.state.list.length ? (
          <ul>
            {this.state.list.map((item, index) => (
              <li key={item.id}>
                {/* 富文本展示 */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                ></span>
                {item.text}
                <span
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => this.handelDelete(item.id)}
                >
                  删除
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div>暂无代办事项</div>
        )}
      </div>
    );
  }
}

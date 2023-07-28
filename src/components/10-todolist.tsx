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
  /*
  洛洛，我们在一起九年了，我想我也应该给自己一个名分了，所以准备了这次求婚，不知道你还喜不喜欢。实话讲，现在非常紧张，即使昨晚在你无意识的时候，为了壮胆已经向你求过一次了，你也默认同意了，但现在我依旧激动的新都要跳出来了。 
   */
}

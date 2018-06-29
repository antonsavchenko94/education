import React, {Component} from 'react';

import Item from "./Item";
import ButtonRemAll from "./ButtonRemAll";
import "./Input.css";

let i = -1;

class Input extends Component {
  state = {
    valueInput: '',
    items: [],
  };

  render() {
    return (
      <div className="wrap-input">
        <input type="text" value={this.state.valueInput} className="input-task" onChange={this.handleOnChange}
               placeholder="Начать новый список"/>
        <button className="add-task" onClick={this.handleClick}>Добавить таск</button>
        <Item data={this.state.items} fnDelItem={this.removeItemState} fnCheck={this.checkInput} addClass={this.addClass}/>
        {this.renderToDoButton()}
      </div>
    );
  }

  deleteAllCheck = () => {
    let tempItems = [...this.state.items];
    let test = [];
    tempItems.filter((element, index) => {
      if(!element.completed) {
          test.push(element)
      }
      console.log(test);
      return test
    });
    this.setState({
      items: test
    });
  };

  renderToDoButton = () => {
    const isAnyCompleted = this.state.items.find(element => element.completed);
    return isAnyCompleted ? <ButtonRemAll fnDel={this.deleteAllCheck} /> : null;
  };

  addClass = (event) => {
    let targetTeg = event.nativeEvent.target.parentNode;
    return (targetTeg.className === "item-check") ? targetTeg.className = "item" : targetTeg.className = "item-check";
  };

  checkInput = (id) => {
    let tempItems = [...this.state.items];
    tempItems = tempItems.map((element, index) => {
      if (element.id === +id) {
          element.completed = !element.completed;
      }
      return element
    });


    this.setState({
      items: tempItems
    });

    console.log(this.state.items)
  };

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({
      valueInput: event.target.value
    });
  };

  removeItemState = (id) => {
    console.log(id);
    let tempItems = [...this.state.items];
    let test = [];

    tempItems.map((element, index) => {
      if (element.id !== +id) {
        test.push(element)
      }
      return test;
    });
    this.setState({
      items: test
    });
    console.log(this.state.items);
  };


  handleClick = () => {
    this.state.items.push({id: this.generateId(), title: this.state.valueInput, completed: false});
    this.setState({
      items: this.state.items,
      valueInput: ''
    });
    console.log(this.state.items);
  };

  generateId = () => {
    i++;

    return i

  }
}

export default Input;
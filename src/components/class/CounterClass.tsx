import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

/* The count value is 5 */
export class CounterClass extends Component<CounterProps, CounterState> {
  // export class CounterClass extends Component<{}, CounterState> {  // no need Props => {}
  // export class CounterClass extends Component<CounterProps> {   // no need States => remove it
  state = { count: 0 };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

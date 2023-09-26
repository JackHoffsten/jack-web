import React from 'react';

import styles from './Typewriter.scss';

interface TypewriterProps {
  text: string;
  speed: number;
}

interface TypewriterState {
  text: string;
  index: number;
  typing: boolean;
}

class Typewriter extends React.Component<TypewriterProps, TypewriterState> {
  constructor(props: TypewriterProps) {
    super(props);
    this.state = {
      text: '',
      index: 0,
      typing: false,
    };
  }

  componentDidMount() {
    this.setState({ typing: true });
    this.type();
  }

  type() {
    if (this.state.index < this.props.text.length) {
      this.setState({
        text: this.state.text + this.props.text[this.state.index],
        index: this.state.index + 1,
      });
      setTimeout(this.type.bind(this), this.props.speed);
    } else {
      this.setState({ typing: false });
    }
  }

  render() {
    return (
      <div className={styles.typewriter}>
        {this.state.text}
        {this.state.typing}
        <span className={styles.terminalCursor}>&#9608;</span>
      </div>
    );
  }
}

export default Typewriter;

import React from 'react';
import {
  asset,
  View,
  Environment,
  StyleSheet,
} from 'react-360';
import Home from './Home';
import Main from './Main';
import EasterEgg from './EasterEgg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flow: 'HOME',
    }

    Environment.setBackgroundImage(
        asset('space3.jpg'),
        {rotateTransform: [{rotateX: '180deg'}]},
    );

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(flow){
    this.setState({
      flow,
    });
  }

  render() {
    const flow = this.state.flow;

    let content;

    if (flow === 'HOME') {
      content = <Home handleNext={this.handleNext} />;
    } else if (flow === 'MAIN') {
      content = <Main handleNext={this.handleNext} />;
    } else if (flow === 'EASTER_EGG') {
      content = <EasterEgg handleNext={this.handleNext} />;
    }

    return(
        <View style={styles.panel}>
          {content}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1140,
    height: 620,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {translateX: 400},
      {translateY: -200},
      {translateZ: -500}
    ],
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 120 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});

export default App;

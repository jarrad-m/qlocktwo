import React from 'react';
import Clock from './components/Clock'
import './App.css';
import timeToWordConverter from './components/TimeToWordConverter'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      letterIndex: [],
      additionalMinutes: 0
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setInterval(this.setTime(), 1000 * 30);    
  }
  
  getCurrentTime() {
    const date =  new Date();
    let hours = date.getHours();
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    return { hours: hours, minutes: date.getMinutes() };    
  }

  setTime() {
    const time = timeToWordConverter(this.getCurrentTime());
    this.setState({
      letterIndex: time.letters,
      additionalMinutes: time.additionalMinutes        
    }) 
  }
  
  render() {
    return (
      <div className="App">
        <Clock 
          letterIndex={this.state.letterIndex}
          additionalMinutes={this.state.additionalMinutes}
        />
        
      </div>
    );
  }

}
// function App() {
//   return (
//     <div className="App">
//       <Clock />
      
//     </div>
//   );
// }

export default App;

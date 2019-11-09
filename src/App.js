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
    this.setTime();
    this.interval = setInterval(this.setTime, 1000 * 15);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  getCurrentTime = () => {
    const date =  new Date();
    const minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    return { hours: hours, minutes: minutes };    
  }

  setTime = () => {
    const time = timeToWordConverter(this.getCurrentTime());
    console.log(time)
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

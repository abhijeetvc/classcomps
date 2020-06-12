import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(){
    super()
    this.state ={
      answer: "Yes"
    }
  }
  render(){
    return(
      <h1>State check :{this.state.answer}</h1>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
  );


////////////////// 

// class App extends React.Component{
//   render(){
//   return(
//     <div>
//         <Header />
//         <Greeting />
//         <h1>Hello React App.</h1>
//     </div>
//   )
// }
// }


// class Header extends React.Component{
//   render(){
//   return(
//     <header>Hello, Welcome {this.props.username}!!!</header>
//   )
// }
// }

// class Greeting extends Component{
//   render(){
//   const date=new Date()
//   const hours=date.getHours()

//   let timeOfDay

//   if(hours<12){
//     timeOfDay="Morning"
//   }else if(hours>=12 && hours<17){
//     timeOfDay="Afternoon"
//   }else{
//     timeOfDay="Night"
//   }
//   return(
//       <h1>Good {timeOfDay}</h1>
//   )
// }
// }

// ReactDOM.render(
//   <App />,
// document.getElementById('root')
// );


///////////// Function component to class and vice-versa//////////////////////

// function App(){
//   return(
//     <div>
//         <Header />
//         <Greeting />
//         <h1>Hello React App.</h1>
//     </div>
//   )
// }


// function Header(props){
//   return(
//     <header>Hello, Welcome {props.username}!!!</header>
//   )
// }

// function Greeting(){
//   const date=new Date()
//   const hours=date.getHours()

//   let timeOfDay

//   if(hours<12){
//     timeOfDay="Morning"
//   }else if(hours>=12 && hours<17){
//     timeOfDay="Afternoon"
//   }else{
//     timeOfDay="Night"
//   }
//   return(
//       <h1>Good {timeOfDay}</h1>
//   )
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//           <h1>Hello ReactJS App.</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );



//Import area
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components are of two types 
//1. Functional Component........................component A.................................>
function A(props){ //we will receive as a formal argument so we can give any name but 
  //it is convention to give name of formal argument in react as Props, props is nothing but its properties 
  let name = "saurabh";
  let surname2 = "thorecha";
  return <h2>A {name} {props.surname} - <B surname = {surname2} /></h2>
}

//2. Class Component.............................Component B.................................>

class B extends React.Component{
  //Now class component have 3 area
  //1. Properties area/variable 
  name = "Anil";

  //2. Constructor area

  //3. Method area
  //every method return something so here its return render method
  //in order to access any memeber of class we have to use this.memeber
  //this.member
  render(){
    return <span>B {this.name} {this.props.surname} - <C> Yadav </C></span>
  }
}
//1. Fat Arrow Component........................component C.................................>
//3. Fat arrow launched in ES6 i.e ECMASCRIPT 6 
let C=(props)=>{
  let name = "Vishnu";
  console.log('hi', props.children);
  return <span>C {name} {props.children} - <D /> </span>
}

//1. Functional Component........................component D.................................>
function D(){   
  return <span>D - <E /> </span>
}

//1. Class Component.............................component E.................................>
class E extends React.Component{
  //properties

  //constructor

  //method
  //every method return something
  render(){
    return <span>E - <F /></span>
  }
}

//1. Fat Arrow Component.........................component F.................................>
function F(){
  return <span>F</span>
}

//1. Functional Component........................component G.................................>


//1. Class Component.............................component H.................................>


//1. Fat Arrow Component.........................component I.................................>


//1. Functional Component........................component J.................................>


//1. Class Component.............................component K.................................>


//1. Fat Arrow Component.........................component L.................................>


//1. Functional Component........................component M.................................>


//1. Class Component.............................component N.................................>


//1. Fat Arrow Component.........................component O.................................>
const root = ReactDOM.createRoot(document.getElementById('root'));
let sn = "kumar";
root.render(<A surname = {sn} />);

//Export area
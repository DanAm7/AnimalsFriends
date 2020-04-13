import React, { Component } from "react";
import CardList from "./CardList";
import './App.css';
import SearchBox from './SearchBox';
import { Animals } from './Animals';
import Scroll from './Scroll';
import Addanimals from './Addanimals';
 
class App extends Component {
     constructor() {
       super()
       this.state = {
         animals: Animals,
         searchfield: '',
         addimg: '',
         addname: '',
         addtype: '',
         x: '',
         y: ''
       }  
     }
     
     addimg = (event) => {
      this.setState({ addimg: event.target.value });
     }

     addname = (event) => {
      this.setState({ addname: event.target.value });

     }

     addtype = (event) => {
      this.setState({ addtype: event.target.value });
     }

     btn = () => {
       if( this.state.addimg === '' || this.state.addname === '' || this.state.addtype === '' ) { alert('Error Creating you new animal, some information is missing!');
       } else {
      this.setState({ x: {
        img: document.getElementById("1").value,
        name: document.getElementById("2").value,
        type: document.getElementById("3").value
      }});
       }
      
      function rem() {
        document.getElementById("1").value='';
        document.getElementById("2").value='';
        document.getElementById("3").value='';
    }
    rem()  
    }

    delclick = (event) => {
       this.setState({ y: event.target.parentElement.parentElement })
    }
   

   onSearchChange = (event) => {
     this.setState({ searchfield: event.target.value })
     }

   
   render() {
    const filteredanimals = this.state.animals.filter( animal => {
    return animal.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());})
    
    if(this.state.x != '') {
    filteredanimals.push(this.state.x);
    Animals.push(this.state.x);
    this.setState({ x: '' });
    this.setState({ addimg: '' });
    this.setState({ addname: '' });
    this.setState({ addtype: '' });
    }
    
    if (this.state.y != '') {
      this.state.y.remove();
      this.setState({ y: '' });
    }
    
     return (
       <div className='tc'>
          <h1>Animals Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Addanimals 
          addimg={this.addimg}
          addname={this.addname}
          addtype={this.addtype}
          btn={this.btn}
           />
          <Scroll>
          <CardList filteredanimals={filteredanimals} delclick={this.delclick} />
          </Scroll>
       </div>
     )
   }
  }
   


export default App;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import './App.css'
import Plan from './Plan'

export default class App extends Component {

  state = {
    darkMode: false,
    items: [],  //gonna store the text in the array onClicking the Add button
    text: "",
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
    // console.log(this.state.text);
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];  //this spread operator will take all the text from the items array and make a new array 'items' with adding the text 
      this.setState({ items: items, text: "" })
      // console.log(this.state.items);
    }
  }
  handleDelete = id => {
    console.log("Deleted ", id);
    const oldItems = [...this.state.items]
    // console.log(oldItems);
    const items = oldItems.filter((elements, i) => {
      return i !== id;
    })
    this.setState({ items: items });
  }

  handleToggle=()=>{
    this.setState({darkMode:!this.state.darkMode})
  }
  render() {
    return (
      <>
        <button className='toggle btn btn-dark' onClick={this.handleToggle}>Toggle</button>
        <div className={this.state.darkMode && 'dark-mode'}>
          <div className='container-fluid my-5'>
            <div className='row'>
              <div className="col-sm-6 mx-auto text-white shadow-lg rounded p-2">
                <h2 className='text-center '>Todays's plan</h2>
                <div className='row'>
                  <div className="col-9">
                    <input type="text" className="form-control" placeholder='Write your plan here' value={this.state.text} onChange={this.handleChange} />
                  </div>
                  <div className='col-2'>
                    <button className="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}>Add</button>
                  </div>
                  <div className="container-fluid">
                    <ul className="list-unstyled row m-5">
                      {this.state.items.map((value, i) => {
                        return <Plan key={i} id={i} value={value} sendData={this.handleDelete} changeToggle={this.darkMode} /> // 1 this map login can also do by another way below
                      })}
                    </ul>

                    {/*2*/}
                    {/* <ul className="list-unstyled row m-5">
                    <Plan p={this.state.items} sendData={this.handleDelete}/>
                  </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

import React, { Component } from 'react';
import '../App.css';

class Item extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        mode: 'view',
      };
    }
  
    render() {
      let className = 'item';
      let classView = '';
      let classEdit = 'hide';
      let classCreate= 'hide';
  
      switch(this.props.urgency) {
        case "maybe later":
          className += ' green';
          break;
        case "asap":
          className += ' red';
          break;
        case "null":
          className += ' hide';
      }
  
      switch(this.state.mode) {
        case "edit":
          classView += ' hide';
          classEdit -= ' hide';
          break;
        case "delete":
          className += ' hide';
          break;
        case "create":
          className = 'item';
          classView = 'hide';
          classEdit = 'hide';
          classCreate = '';
      }
  
      return (
        <div className={className}>

          <div className={classCreate}>
            <form>
              <label>
                <p> Title: <input type="text" name="title" placeholder="Title" required/></p>
                <p> Description: <input type="text" name="description" placeholder="Description" required/></p>   
                <p> Deadline: <input type="date" name="deadline" required/></p>
                <p> Urgency: 
                  <select defaultValue="today">
                    <option value="maybe later" > maybe later </option>
                    <option value="today" > today </option>
                    <option value="asap" > asap </option>
                  </select>
                </p>
              </label>
              <div className="buttons">
                <button onClick={() => this.setState({mode: 'view'})}>
                  <h5>Cancel</h5>
                </button>
                <button 
                  type="submit" onClick={() => this.setState({mode: 'view'})}>
                  <h5>Confirm</h5>
                </button> 
              </div>
            </form>
          </div>
  
          <div className={classView}>
            <h3> {this.props.title} </h3>
            <p> {this.props.description} </p>
            <p> by {this.props.deadline} </p>
            <div className="buttons">
              <button onClick={() => this.setState({mode: 'edit'})}>
                <h5>Edit</h5>
              </button>
              <button onClick={() => this.setState({mode: 'delete'})}>
                <h5>Delete</h5>
              </button>
            </div>
          </div>
  
          <div className={classEdit}>
            <form>
              <label>
                <p> Title: <input type="text" name="title" defaultValue={this.props.title} /></p>
                <p> Description: <input type="text" name="description" defaultValue={this.props.description} /></p>   
                <p> Deadline: <input type="date" name="deadline" defaultValue={this.props.deadline} /></p>
                <p> Urgency: 
                  <select defaultValue={this.props.urgency}>
                    <option value="maybe later" > maybe later </option>
                    <option value="today" > today </option>
                    <option value="asap" > asap </option>
                  </select>
                </p>
              </label>
              <div className="buttons">
                <button onClick={() => this.setState({mode: 'view'})}>
                  <h5>Cancel</h5>
                </button>
                <button 
                  type="submit" onClick={() => this.setState({mode: 'view'})}>
                  <h5>Confirm</h5>
                </button> 
                {/* alternative below (just to be decided which one): */}
                {/* <input type="submit" value="Confirm" /> */}
              </div>
            </form>
          </div>
  
        </div>
  
      );
    }
  }

export default Item;
import React, { Component } from 'react';
import '../App.css';
import Item from '../components/Item';

class List extends React.Component {
  
    constructor(props) {
      super(props);
      this.ItemRef = React.createRef();
    }
    handleClick = () => {
      this.ItemRef.current.setState({mode: 'create'});
    };
  
    render() {      
      return (
        <div className="list">
            <button id="create" onClick={this.handleClick}>
              <h3>Add a new thing to do</h3>
            </button>
          <Item
            ref={this.ItemRef}
            urgency="null"
          />
          <Item 
            title="Shopping"
            description="Get some potatoes"
            deadline="2019-09-28"
            dateCreated= "2019-09-28"
            urgency="asap"
          />
          <Item 
            title="Gym"
            description="Get some potatoes"
            deadline="2019-09-28"
            dateCreated= "2019-09-28"
            urgency="today"
          />
          <Item 
            title="Coding"
            description="Get some potatoes"
            deadline="2019-09-28"
            dateCreated= "2019-09-28"
            urgency="maybe later"
          />
        </div>
      );
    }
  }

  export default List;
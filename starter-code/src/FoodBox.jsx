import React, { Component } from 'react';

class FoodBox extends Component {
  handleQuantityChange = (e) => {
    console.log(e.target.value)
    this.setState( { [e.target.name] : e.target.value } )
 }
    render() {
        return ( 
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt={this.props.name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input contenteditable="true"
            className="input"
            type="number" 
            name='amount'
          onChange={this.handleQuantityChange}
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
        );
    }
}

export default FoodBox;
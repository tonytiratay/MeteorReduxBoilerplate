import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    console.log(e.target.value);
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    
  }

  render(){
    return (
    <form className="" onSubmit={this.onFormSubmit}>
      <h3>Search</h3>
      <input
        placeholder="Chercher une ville"
        className=""
        value={this.state.term}
        onChange={this.onInputChange}
      />
      <button type="submit" className="">Chercher</button>
    </form>
  )
  }
}

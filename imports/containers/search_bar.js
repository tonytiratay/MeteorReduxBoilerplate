import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
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

function mapDispatchToProps(dispatch){
  return bindActionCreators( {fetchWeather}, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);

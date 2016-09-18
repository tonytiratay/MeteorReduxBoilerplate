import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData){

    const name = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp );
    const humidity = cityData.list.map( weather => weather.main.humidity );
    const pressure = cityData.list.map( weather => weather.main.pressure );

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
        <Sparklines data={temps} width={300} height={300}>
          <SparklinesLine color="blue" />
        </Sparklines>
        </td>
        <td>
        <Sparklines data={pressure} width={300} height={300}>
          <SparklinesLine color="green" />
        </Sparklines>
        </td>
        <td>
        <Sparklines data={humidity} width={300} height={300}>
          <SparklinesLine color="red" />
        </Sparklines>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
          <th>Ville </th>
          <th>Temperature</th>
          <th>Pression </th>
          <th>Humidité </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map( this.renderWeather )}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return ({ weather});
}

export default connect(mapStateToProps)(WeatherList);

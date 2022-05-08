import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ForecastExtended from '../components/ForecastExtended'
import { connect } from 'react-redux'

 class ForecastExtenderContainer extends Component {
   propTypes = {city: PropTypes.string.isRequired,}

     render() {
         const {city, forecastData} = this.props
         return (
                city&&
             <ForecastExtended city={city} forecastData={forecastData}/>
         )
     }
 }
const mapStateToProps =  ({city, cities}) => ({city, forecastData: cities[city] && cities[city].forecastData});
export default connect(mapStateToProps, null)(ForecastExtenderContainer);
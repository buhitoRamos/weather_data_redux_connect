import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ForecastExtended from '../components/ForecastExtended'
import { connect } from 'react-redux'

 class ForecastExtenderContainer extends Component {
   propTypes = {city: PropTypes.string.isRequired,}

     render() {
         return (

             <ForecastExtended city={this.props.city} />
         )
     }
 }
const mapStateToProps =  ({city}) => ({city});
export default connect(mapStateToProps, null)(ForecastExtenderContainer);
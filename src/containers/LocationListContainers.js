import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions'
import LocationList from '../components/LocationList'



class LocationListContainers extends Component {
    static propTypes = { 
        setCity: PropTypes.func.isRequired, 
        cities:PropTypes.array.isRequired
    }

    handleSelectedLocation = city => {
        this.props.setCity(city)
    }
    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainers)
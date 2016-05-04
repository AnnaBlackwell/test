import React from 'react'
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'

export default React.createClass({

  setInitialState: function () {
    return {
      truckid: 0,
      region: '',
      volume: 0,
      sprinkles: 0
    }
  },

  handleSubmit: function (e) {
    e.preventDefault()
    this.setState({
      truckid: this.state.truckid,
      region: this.state.region,
      volume: this.state.volume,
      sprinkles: this.state.sprinkles})
  },

  // I'm sure there must be a much better way of updating state from form values than 4 separate functions...

  handleIdChange: function (e) {
    this.setState({truckid: e.target.value})
  },

  handleRegionChange: function (e) {
    this.setState({region: e.target.value})
  },

  handleVolumeChange: function (e) {
    this.setState({volume: e.target.value})
  },

  handleSprinkleChange: function (e) {
    this.setState({sprinkles: e.target.value})
  },

  render () {
    // console.log(this.state)
    return (
      <div className='form'>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Truck number: </Col>
            <Col sm={10}>
              <FormControl type='text' onChange={this.handleIdChange}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Region: </Col>
            <Col sm={10}>
              <FormControl componentClass='select' placeholder='select' onChange={this.handleRegionChange}>
                <option value='auckland'>Auckland</option>
                <option value='northland'>Northland</option>
                <option value='wellington'>Wellington</option>
                <option value='bop'>Bay of Plenty</option>
                <option value='palmerston-north'>Palmerston North</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Icecream vats: </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleVolumeChange} componentClass='select' placeholder='select'>
                <option value='0'> 0 </option>
                <option value='1'> 1 </option>
                <option value='2'> 2 </option>
                <option value='3'> 3 </option>
                <option value='4'> 4 </option>
                <option value='5'> 5 </option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Boxes of sprinkles: </Col>
            <Col sm={10}>
              <FormControl onChange={this.handleSprinkleChange} type='text' min={0} max={50} />
            </Col>
          </FormGroup>
          <Button className='btn btn-success' bsSize='large' type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
})

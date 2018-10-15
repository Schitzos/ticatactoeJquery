
import React from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isPressed:false,
    };
  }
  
  pressButton(evt) {
    this.setState({isPressed: !this.state.isPressed})
  }
  
  render() {
    this.setState({ isRendered: true })
    return (
      <button onPress={pressButton()}>
        {text}
      </button>
    )
  } 
}

function text(){
    if(this.state.isPressed){
        return "I was pressed!"
    }
    else{
        return "";
    }
}

export default Button


function checkBird (bird: Animal | Bird): bird is Bird {
    return (<Bird>bird)
}
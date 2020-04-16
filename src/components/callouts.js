import React from 'react'

class Callouts extends React.Component {
    
    render() {
      return (
        <div class="callouts">
            <ul>
                <li>{this.props.callout1}</li>
                <li>{this.props.callout1}</li>
                <li>{this.props.callout1}</li>
            </ul>
        </div>
      )
    }
}

export default Callouts                  
import React from 'react'
import Table from './Table'
import Form from './Form'

class Content extends React.Component {
  render() {
    return (
      <div>
        <Table candidates={this.props.candidates} />
        <hr/>
        { !this.props.hasVoted ?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        <p>Your account: {this.props.account}</p>
        <p>Contract Address: <a href="https://rinkeby.etherscan.io/address/0x5ede43bc94e9850b692b5c7a99cac2aa6151652c" target="_blank">0x5ede43bc94e9850b692b5c7a99cac2aa6151652c</a></p>
      </div>
    )
  }
}

export default Content
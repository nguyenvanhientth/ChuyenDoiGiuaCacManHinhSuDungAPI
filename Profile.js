import React, {Component} from 'react';
export default class Profile extends Component {
    render() {
      return (
        <Wrapper>
          <Text>Hello!, This is Home!</Text>
          <Button
            title="Go to Profile"
           // onPress={() => this.props.navigation.navigate('Profile')}
          />
        </Wrapper>
      )
    }
  }
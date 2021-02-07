import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";


class RightMenuComponent extends Component {
    state = {  }

    render() { 
        const {handlePress} = this.props;
        return ( 
            <Button 
            type='clear'
            icon={
                <Icon
                    name='md-add-circle-outline'
                    size={25}
                    color={'white'}
                />
            }
            onPress={handlePress}
        />
         );
    }
}

export default RightMenuComponent
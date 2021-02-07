import React, { Component } from 'react';
import { Input, theme } from 'galio-framework';

class GalioInput extends Component {
    state = {  }
    render() { 
        const { props } = this.props;
        return ( 
            <Input style={{borderColor: theme.COLORS.INFO, width: "100%"}} rounded />
         );
    }
}
 
export default GalioInput;
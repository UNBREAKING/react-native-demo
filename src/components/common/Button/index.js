import React from 'react';
import { TouchableHighlight, Text, Image } from 'react-native';

const Button = ({ highlightStyle, tintColor, textStyle, image, text, ...props }) => 
  <TouchableHighlight style={highlightStyle} { ...props }>
    { 
      image ? 
        <Image tintColor={tintColor} source={image} /> :
        <Text style={textStyle}>{ text }</Text> 
    }
  </TouchableHighlight>

export default Button
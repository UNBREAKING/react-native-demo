import React from 'react';
import { connect } from 'react-redux';
import { saveLightOrangeColorToStatusBar } from '../StatusBar/actions';
import { saveWeight } from '../HomeScreen/actions';
import { Button } from '../common';


const HeaderButton = ({ 
  highlightStyle, 
  textStyle,
  tintColor,
  onPress, 
  text,
  image,
  saveWeight,
  isSaveButton,
  saveLightOrangeColorToStatusBar
}) => 
  <Button
    image={image}
    highlightStyle={highlightStyle}
    tintColor={tintColor}
    textStyle={textStyle}
    text={text}
    onPress={() => {
      isSaveButton && saveWeight()
      saveLightOrangeColorToStatusBar()
      onPress()
    }} />

export default connect(null, { saveLightOrangeColorToStatusBar, saveWeight })(HeaderButton)

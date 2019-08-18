import React from 'react';
import PropTypes from 'prop-types';
import { Button, View, StyleSheet } from 'react-native';

export default function AlertDefaultButton(props) {
  let color;
  if (props.type && props.type === 'destructive') {
    color = 'red';
  }

  const wrapperStyles = [
    styles.buttonWrapper,
    !props.index && styles.containerFirst,
    props.customStyles.buttonWrapper
  ];

  return (
    <View style={wrapperStyles}>
      <Button color={color} onPress={props.onPress} title={props.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 10
  },

  containerFirst: {
    marginTop: 0
  }
});

AlertDefaultButton.propTypes = {
  customStyles: PropTypes.object,
  index: PropTypes.number,
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};

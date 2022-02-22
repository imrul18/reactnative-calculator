import { React, useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.click(props.data)}>
      <View style={styles.button}>
        <Text style={styles.buttontxt}>{props.data}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 20,
    margin: 10,
    height: 80,
    justifyContent: "center",
  },
  buttontxt: {
    textAlign: "center",
    fontSize: 40,
  },
});

export default CustomButton;

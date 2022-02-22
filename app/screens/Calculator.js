import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";

const Calculator = () => {
  const [result, setresult] = useState("0");
  var [input1, setinput1] = useState("");
  var [input2, setinput2] = useState("");
  var [input, setinput] = useState("");
  var [sign, setsign] = useState("");
  var [active, setactive] = useState(1);

  const onclick = (value) => {
    if ((!isNaN(value) || value == ".") && active == 1) {
      if (input1.length < 6) {
        var carry = input1.concat(value);
        setinput1(carry);
        setinput(carry);
        setresult("");
      }
    } else if ((!isNaN(value) || value == ".") && active == 2) {
      if (input2.length < 6) {
        var carry = input2.concat(value);
        setinput2(carry);
        setinput(input1 + sign + carry);
      }
    } else {
      if (value == "CC") {
        setinput("");
        setinput1("");
        setinput2("");
        setsign("");
        setresult("");
        setactive(1);
      } else if ((input1 != "" && input2 == "") || value == "=") {
        if (value == "=") {
          var carry = 0;
          var num1 = parseFloat(input1);
          var num2 = parseFloat(input2);
          switch (sign) {
            case "+":
              carry = num1 + num2;
              break;
            case "-":
              carry = num1 - num2;
              break;
            case "X":
              carry = num1 * num2;
              break;
            case "/":
              carry = num1 / num2;
              break;
            case "%":
              carry = num1 % num2;
              break;
            default:
              carry = num1;
              break;
          }
          setresult(carry);
          if (input1 == "" && input2 == "") setresult(result);

          setsign("");
          setinput1("");
          setinput2("");
          setactive(1);
        } else {
          setsign(value);
          setinput(input1 + value);
          setactive(2);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonline}>
        <CustomButton data="CC" click={onclick} />
        <CustomButton data="%" click={onclick} />
        <CustomButton data="/" click={onclick} />
        <CustomButton data="X" click={onclick} />
      </View>
      <View style={styles.buttonline}>
        <CustomButton data="7" click={onclick} />
        <CustomButton data="8" click={onclick} />
        <CustomButton data="9" click={onclick} />
        <CustomButton data="-" click={onclick} />
      </View>
      <View style={styles.buttonline}>
        <CustomButton data="4" click={onclick} />
        <CustomButton data="5" click={onclick} />
        <CustomButton data="6" click={onclick} />
        <CustomButton data="+" click={onclick} />
      </View>
      <View style={styles.buttonline}>
        <CustomButton data="1" click={onclick} />
        <CustomButton data="2" click={onclick} />
        <CustomButton data="3" click={onclick} />
        <CustomButton data="=" click={onclick} />
      </View>
      <View style={styles.buttonline}>
        <Text style={styles.button}></Text>
        <CustomButton data="0" click={onclick} />
        <CustomButton data="." click={onclick} />
        <Text style={styles.button}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
  },
  display: {
    flex: 4,
    justifyContent: "flex-end",
  },
  input: {
    fontSize: 40,
    color: "red",
    textAlign: "right",
  },
  result: {
    fontSize: 80,
    textAlign: "right",
    color: "red",
  },
  buttonline: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    borderWidth: 5,
    opacity: 0,
    borderRadius: 20,
    margin: 10,
    height: 80,
    justifyContent: "center",
  },
});

export default Calculator;

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default LoginScreen = () => {
  const [isMailFocus, setIsMailFocus] = useState(false);
  const [isPassFocus, setIsPassFocus] = useState(false);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);

  const PasswordShowHandler = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const loginHandler = () => {
    const formData = {
      mail: String(mail).trim(),
      password: String(password).trim(),
    };

    console.log("login: ", formData);
  };

  const toSignUpPage = () => {
    console.log("goSignUpPage");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setIsFormActive(false);
        }}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/images/Photo-BG.jpg")}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              setIsFormActive(false);
            }}
          >
            <View style={[styles.form, isFormActive && { height: 230 }]}>
              <Text style={styles.title}>Увійти</Text>

              <TextInput
                style={[styles.input, isMailFocus && styles.focusedInput]}
                onFocus={() => {
                  setIsMailFocus(true);
                  setIsFormActive(true);
                }}
                onBlur={() => setIsMailFocus(false)}
                placeholder="Електронна пошта"
                cursorColor={"black"}
                paddingLeft={16}
                value={mail}
                onChangeText={setMail}
                keyboardType="email-address"
              />

              <KeyboardAvoidingView
                style={{ width: "100%" }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View style={styles.wrapInputPass}>
                  <TextInput
                    style={[
                      styles.inputPass,
                      isPassFocus && styles.focusedInput,
                    ]}
                    onFocus={() => {
                      setIsPassFocus(true);
                      setIsFormActive(true);
                    }}
                    onBlur={() => setIsPassFocus(false)}
                    placeholder="Пароль"
                    cursorColor={"black"}
                    paddingLeft={16}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isPasswordShow ? false : true}
                  />

                  <TouchableOpacity
                    style={styles.buttonShowPass}
                    activeOpacity={0.8}
                    onPress={PasswordShowHandler}
                  >
                    <Text style={styles.buttonSlaveText}>
                      {isPasswordShow ? "Сховати" : "Показати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>

              <TouchableOpacity
                style={styles.buttonMaster}
                activeOpacity={0.8}
                onPress={loginHandler}
              >
                <Text style={styles.buttonMasterText}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSlave}
                activeOpacity={0.8}
                onPress={toSignUpPage}
              >
                <Text style={styles.buttonSlaveText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // borderWidth: 1,
    // borderColor: "red",
  },
  backgroundImage: {
    flex: 1,
    sizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",

    // borderWidth: 1,
    // borderColor: "red",
  },
  form: {
    position: "relative",
    marginTop: "auto",
    height: 460,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,

    // borderWidth: 1,
    // borderColor: "red",
  },

  title: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 30,
    fontFamily: "Roboto-500",
    color: "#212121",
  },
  input: {
    height: 50,
    width: "100%",
    marginTop: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-400",
    color: "#212121",
  },
  inputPass: {
    height: 50,
    width: "100%",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-400",
    color: "#212121",
  },
  wrapInputPass: {
    position: "relative",
    width: "100%",
    height: 50,
    marginTop: 15,

    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonShowPass: {
    position: "absolute",
    right: 0,
    paddingRight: 16,
    height: 50,
    justifyContent: "center",

    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonMaster: {
    marginTop: 30,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 25,
  },
  buttonMasterText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Roboto-400",
  },

  buttonSlave: {
    marginTop: 4,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",

    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonSlaveText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-400",
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
});

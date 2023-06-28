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
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default RegistrationScreen = () => {
  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isMailFocus, setIsMailFocus] = useState(false);
  const [isPassFocus, setIsPassFocus] = useState(false);

  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);

  const PasswordShowHandler = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const signUpHandler = () => {
    console.log("signUp");
  };

  const toLoginPage = () => {
    console.log("goLoginPage");
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
            <View style={[styles.form, isFormActive && { height: 360 }]}>
              <View style={styles.imageThumb}>
                <TouchableOpacity
                  style={styles.buttonAddPortrait}
                  activeOpacity={0.8}
                >
                  {true ? (
                    <MaterialIcons
                      name="add-circle-outline"
                      size={28}
                      color="#FF6C00"
                    />
                  ) : (
                    <AntDesign name="closecircleo" size={24} color="#212121" />
                  )}
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Реєстрація</Text>

              <TextInput
                style={[styles.input, isLoginFocus && styles.focusedInput]}
                onFocus={() => {
                  setIsLoginFocus(true);
                  setIsFormActive(true);
                }}
                onBlur={() => setIsLoginFocus(false)}
                placeholder="Логін"
                cursorColor={"black"}
                paddingLeft={16}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
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
                onChange={(e) => setMail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                onPress={signUpHandler}
              >
                <Text style={styles.buttonMasterText}>Зареєструватися</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSlave}
                activeOpacity={0.8}
                onPress={toLoginPage}
              >
                <Text style={styles.buttonSlaveText}>Вже є акаунт? Увійти</Text>
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
    height: 550,
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
  imageThumb: {
    position: "absolute",
    top: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonAddPortrait: {
    position: "absolute",
    right: -13,
    bottom: 13,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",

    // borderWidth: 1,
    // borderColor: "red",
  },
  imagePortrait: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 90,
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

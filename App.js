import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Picker,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

import * as Font from "expo-font";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      activeRadio: " ",
      card: "",
      myanname: "",
      engname: "",
      myantext: "",
      myanNum: "",
      NPmyan: "",
      myan: "",
      myannumber: "",
      eng: "",
      engnumber: "",
      fathmyanname: "",
      fathengname: "",
      national: "",
      religion: "",
      education: "",
      birth: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      NP: "",
      number: "",
      NPmyan: "",
      myanNum: ""
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Pyidaungsu: require("./assets/Font/Pyidaungsu.ttf"),
      "Dosis-Bold": require("./assets/Font/Dosis-Bold.otf"),
      "Dosis-SemiBold": require("./assets/Font/Dosis-SemiBold.otf"),
      "Dosis-Light": require("./assets/Font/Dosis-Light.otf")
    });
    this.setState({ fontLoaded: true });
  }

  Clear() {
    if (this.state.fathmyanname == "") {
      alert("Please Enter Father Myanmar Name");
    } else if (this.state.fathengname == "") {
      alert("Please Enter Father English Name");
    } else if (this.state.religion == "") {
      alert("Please Enter Religione");
    } else if (this.state.national == "") {
      alert("Please Enter National");
    } else if (this.state.birth == "") {
      alert("Please Enter Birth");
    } else if (this.state.activeRadio == "") {
      alert("Please Select Gender");
    } else {
      this.setState({ myanname: "" });
      this.setState({ engname: "" });
      this.setState({ myantext: "" });
      this.setState({ myanNum: "" });
      this.setState({ NPmyan: "" });
      this.setState({ myan: "" });
      this.setState({ myannumber: "" });
      this.setState({ eng: "" });
      this.setState({ engnumber: "" });
      this.setState({ NP: "" });
      this.setState({ number: "" });
      this.setState({ education: "" });
      this.setState({ city: "" });
      this.setState({ address: "" });
      this.setState({ phone: "" });
      this.setState({ email: "" });

      this.setState({ fathmyanname: "" });
      this.setState({ fathengname: "" });
      this.setState({ religion: "" });
      this.setState({ national: "" });
      this.setState({ birth: "" });
      this.setState({ activeRadio: "" });
      alert("Success Data Entry!!");
    }
  }

  toggle(gender) {
    this.setState({ activeRadio: gender });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text style={styles.titlemyantext}>
                (၁) မှတ်ပုံတင်ရန် အဆိုပြုသူ
              </Text>

              <Text style={styles.myantext}>(က) လုပ်ငန်းရှင်</Text>
              <View style={styles.secContainer}>
                <TextInput
                  placeholder={"မြန်မာ"}
                  style={styles.textInput}
                  onChangeText={myanname => this.setState({ myanname })}
                  value={this.state.myanname}
                />
                <TextInput
                  placeholder={"အင်္ဂလိပ်"}
                  style={styles.textInput}
                  onChangeText={engname => this.setState({ engname })}
                  value={this.state.engname}
                />
              </View>

              <Text style={styles.myantext}>
                (ခ) နိုင်ငံသားစီစစ်ရေး ကဒ်ပြားအမှတ်
              </Text>

              <View style={styles.secContainer}>
                <Picker
                  selectedValue={this.state.myanNum}
                  style={styles.card}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ myanNum: itemValue })
                  }
                >
                  <Picker.Item label="၁" value={"၁"} />
                  <Picker.Item label="၂" value={"၂"} />
                  <Picker.Item label="၃" value={"၃"} />
                  <Picker.Item label="၄" value={"၄"} />
                  <Picker.Item label="၅" value={"၅"} />
                  <Picker.Item label="၆" value={"၆"} />
                  <Picker.Item label="၇" value={"၇"} />
                  <Picker.Item label="၈" value={"၈"} />
                  <Picker.Item label="၉" value={"၉"} />
                  <Picker.Item label="၁၀" value={"၁၀"} />
                  <Picker.Item label="၁၁" value={"၁၁"} />
                  <Picker.Item label="၁၂" value={"၁၂"} />
                </Picker>
              </View>
              <View style={styles.secContainer}>
                <TextInput
                  placeholder={"ပမန"}
                  style={[styles.textInput, { marginBottom: 10 }]}
                  onChangeText={myan => this.setState({ myan })}
                  value={this.state.myan}
                />
              </View>
              <View style={styles.secContainer}>
                <Picker
                  selectedValue={this.state.NPmyan}
                  style={styles.card}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ NPmyan: itemValue })
                  }
                >
                  <Picker.Item label="နိုင်" value={"နိုင်"} />
                  <Picker.Item label="ပြု" value={"ပြု"} />
                </Picker>
              </View>
              <View style={styles.secContainer}>
                <TextInput
                  placeholder={"နိုင်ငံသားစီစစ်ရေး ကဒ်ပြားနံပါတ်"}
                  style={[styles.textInput, { marginBottom: 10 }]}
                  onChangeText={myannumber => this.setState({ myannumber })}
                  value={this.state.myannumber}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.secContainer}>
                <Picker
                  selectedValue={this.state.number}
                  style={styles.card}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ number: itemValue })
                  }
                >
                  <Picker.Item label="1" value={"1"} />
                  <Picker.Item label="2" value={"2"} />
                  <Picker.Item label="3" value={"3"} />
                  <Picker.Item label="4" value={"4"} />
                  <Picker.Item label="5" value={"5"} />
                  <Picker.Item label="6" value={"6"} />
                  <Picker.Item label="7" value={"7"} />
                  <Picker.Item label="8" value={"8"} />
                  <Picker.Item label="9" value={"9"} />
                  <Picker.Item label="10" value={"10"} />
                  <Picker.Item label="11" value={"11"} />
                  <Picker.Item label="12" value={"12"} />
                </Picker>
              </View>
              <View style={styles.secContainer}>
                <TextInput
                  placeholder={"PaMANa"}
                  style={[styles.textInput, { marginBottom: 10 }]}
                  onChangeText={eng => this.setState({ eng })}
                  value={this.state.eng}
                />
              </View>
              <View style={styles.secContainer}>
                <Picker
                  selectedValue={this.state.NP}
                  style={styles.card}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ NP: itemValue })
                  }
                >
                  <Picker.Item label="N" value={"N"} />
                  <Picker.Item label="P" value={"P"} />
                </Picker>
              </View>
              <View style={styles.secContainer}>
                <TextInput
                  placeholder={"NRC No"}
                  style={[styles.textInput, { marginBottom: 10 }]}
                  onChangeText={engnumber => this.setState({ engnumber })}
                  value={this.state.engnumber}
                  keyboardType="number-pad"
                />
              </View>

              <Text style={styles.myantext}>(ဂ) အဖအမည် *</Text>
              <View style={styles.secContainer}>
                <TextInput
                  placeholder={"မြန်မာ"}
                  style={styles.textInput}
                  onChangeText={fathmyanname => this.setState({ fathmyanname })}
                  value={this.state.fathmyanname}
                />
                <TextInput
                  placeholder={"အင်္ဂလိပ်"}
                  style={styles.textInput}
                  onChangeText={fathengname => this.setState({ fathengname })}
                  value={this.state.fathengname}
                />
              </View>

              <Text style={styles.myantext}>(ဃ) လူမျိုး: *</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={national => this.setState({ national })}
                  value={this.state.national}
                />
              </View>

              <Text style={styles.myantext}>(င) ကိုးကွယ်သည့်ဘာသာ *</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={religion => this.setState({ religion })}
                  value={this.state.religion}
                />
              </View>

              <Text style={styles.myantext}>(စ) ပညာအရည်အချင်း</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={education => this.setState({ education })}
                  value={this.state.education}
                />
              </View>

              <Text style={styles.myantext}>(ဆ) ကျား/မ *</Text>
              <View style={styles.radio}>
                <TouchableOpacity onPress={() => this.toggle("Male")}>
                  <View style={styles.radioContainer}>
                    <View style={styles.circle}>
                      {this.state.activeRadio == "Male" ? (
                        <View style={styles.activeCircle} />
                      ) : null}
                    </View>
                    <Text style={styles.label}>ကျား</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.toggle("Female")}
                  style={{ paddingLeft: 20 }}
                >
                  <View style={styles.radioContainer}>
                    <View style={styles.circle}>
                      {this.state.activeRadio == "Female" ? (
                        <View style={styles.activeCircle} />
                      ) : null}
                    </View>
                    <Text style={styles.label}>မ</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text style={styles.myantext}>(ဇ) မွေးသက္ကရာဇ် *</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={birth => this.setState({ birth })}
                  value={this.state.birth}
                />
              </View>

              <Text style={styles.myantext}>(စျ) မြိုနယ်</Text>
              <View style={styles.secContainer}>
                <Picker
                  itemTextStyle={{ fontSize: 12 }}
                  activeItemTextStyle={{ fontSize: 12 }}
                  selectedValue={this.state.city}
                  style={styles.card}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ city: itemValue })
                  }
                >
                  <Picker.Item label="ပျဉ်းမနား" value={"ပျဉ်းမနား"} />
                  <Picker.Item label="လယ်ဝေး" value={"လယ်ဝေး"} />
                  <Picker.Item label="တပ်ကုန်း" value={"တပ်ကုန်း"} />
                  <Picker.Item label="ဥတ္တရသီရိ" value={"ဥတ္တရသီရိ"} />
                  <Picker.Item label="ပုဗ္ဗသီရိ" value={"ပုဗ္ဗသီရိ"} />
                  <Picker.Item label="ဒက္ခိဏသီရိ" value={"ဒက္ခိဏသီရိ"} />
                  <Picker.Item label="ဇမ္ဗူသီရိ" value={"ဇမ္ဗူသီရိ"} />
                  <Picker.Item label="ဇေယျာသီရိ" value={"ဇေယျာသီရိ"} />
                </Picker>
              </View>

              <Text style={styles.myantext}>(ည) နေရပ်လိပ်စာ</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={address => this.setState({ address })}
                  value={this.state.address}
                />
              </View>

              <Text style={styles.myantext}>(ဍ) ဖုန်းနံပါတ်</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={phone => this.setState({ phone })}
                  value={this.state.phone}
                  keyboardType="number-pad"
                />
              </View>

              <Text style={styles.myantext}>(ဌ) အီးမေးလ်</Text>
              <View style={styles.secContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  keyboardType="email-address"
                />
              </View>

              <TouchableOpacity onPress={() => this.Clear()} style={styles.btn}>
                <Text
                  style={{ color: "white", textAlign: "center", paddingTop: 7 }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text></Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  titlemyantext: {
    fontFamily: "Pyidaungsu",
    fontSize: 16,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  secContainer: {
    width: "85%",
    marginLeft: "10%"
  },
  myantext: {
    paddingTop: "10%",
    width: "100%",
    fontSize: 12,
    fontFamily: "Pyidaungsu"
  },
  textInput: {
    marginTop: 10,
    height: 40,
    paddingLeft: 7,
    borderWidth: 1,
    fontSize: 12,
    borderRadius: 4,
    fontFamily: "Pyidaungsu"
  },
  card: {
    height: 40,
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "Pyidaungsu",
    backgroundColor: "#ECEBEC"
  },
  btn: {
    marginTop: 40,
    marginBottom: 30,
    width: "80%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3F971A",
    marginLeft: "12%"
  },
  radioContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  activeCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green"
  },
  label: {
    marginLeft: 10,
    color: "green"
  },
  radio: {
    flexDirection: "row",
    paddingLeft: "10%"
  }
});

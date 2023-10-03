import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput, // Import TextInput from react-native
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../core/components/Button";
import TextInputWithLabel from "../../core/components/TextInputWithLabel";
import { styles } from "./style/MyProfileScreen.style";

const ProfileEditScreen = ({ navigation }: any) => {
  const [prefix, setPrefix] = useState("Tinnaphoom");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [congenitalDisease, setCongenitalDisease] = useState("");
  const handleProfileImageEdit = () => {

    console.log("Profile image clicked for selection/edit");
  };
  const handleSave = () => {
    const userData = {
      prefix,
      name,
      surname,
      email,
      phoneNumber,
      password,
      bloodGroup,
      gender,
      dateOfBirth,
      weight,
      height,
      congenitalDisease,
    };
    console.log("User Data to be saved:", userData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleProfileImageEdit}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}></View>
        </View>
      </TouchableOpacity>

      <TextInputWithLabel
        label="Prefix"
        value={prefix}
        onChangeText={(text) => setPrefix(text)}
        placeholder="Enter prefix"
      />

      <TextInputWithLabel
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter name"
      />

      <TextInputWithLabel
        label="Surname"
        value={surname}
        onChangeText={(text) => setSurname(text)}
        placeholder="Enter surname"
      />

      <TextInputWithLabel
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter email"
      />

      <TextInputWithLabel
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Enter phone number"
      />

      <TextInputWithLabel
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter password"
        secureTextEntry={true}
      />

      <TextInputWithLabel
        label="Blood Type"
        value={bloodGroup}
        onChangeText={(text) => setBloodGroup(text)}
        placeholder="Enter blood type"
      />

      <View style={styles.genderTitleContainer}>
        <Text style={[styles.fieldTitle]}>Gender</Text>
      </View>

      <View style={[styles.genderContainer, { marginBottom: 16 }]}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "male" ? styles.selectedGender : null,
          ]}
          onPress={() => setGender("male")}
        >
          <FontAwesome
            name="mars"
            size={18}
            color={gender === "male" ? "white" : "#ED8085"}
          />
          <Text
            style={[
              styles.genderText,
              gender === "male" ? { color: "white" } : null,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "female" ? styles.selectedGender : null,
          ]}
          onPress={() => setGender("female")}
        >
          <FontAwesome
            name="venus"
            size={18}
            color={gender === "female" ? "white" : "#ED8085"}
          />
          <Text
            style={[
              styles.genderText,
              gender === "female" ? { color: "white" } : null,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <TextInputWithLabel
        label="DoB"
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
        placeholder="Enter date of birth"
      />

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Weight</Text>
        <View style={styles.inputWithUnit}>
          <TextInput
            style={styles.fieldValue}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="Enter weight"
          />
          <Text style={styles.unitText}>KG</Text>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Height</Text>
        <View style={styles.inputWithUnit}>
          <TextInput
            style={styles.fieldValue}
            value={height}
            onChangeText={(text) => setHeight(text)}
            placeholder="Enter height"
          />
          <Text style={styles.unitText}>CM</Text>
        </View>
      </View>

      <TextInputWithLabel
        label="Congenital Disease"
        value={congenitalDisease}
        onChangeText={(text) => setCongenitalDisease(text)}
        placeholder="Enter congenital disease"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <Button
          title="Logout"
          buttonWidth={30}
          buttonHeight={15}
          to="SignIn"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};
export default ProfileEditScreen;
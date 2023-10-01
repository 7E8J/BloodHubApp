import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons"; // Assuming you're using Expo for FontAwesome
import { AntDesign } from "@expo/vector-icons";



type SectionHeaderProps = {
  title: string;
};

type AntDesignIcon =
  | "user"
  | "home"
  | "bell"
  | "history"
  | "bookmark"
  | "question-circle"
  | "info-circle";

type SettingOptionProps = {
  title: string;
  icon: AntDesignIcon;
  navigation?: any;
  to?: string
};

const SettingScreen: React.FC = ({navigation}:any) => {
  return (
    <ScrollView style={styles.container}>
      <SectionHeader title="General Settings" />
      <View style={styles.settingGroup}>
        <View style={styles.groupContainer}>
          <SettingOption title="My Profile" icon="user" navigation={navigation} to ="MyProfile"/>
          <SettingOption title="My Address" icon="home" navigation={navigation} to ="EditAddress"/>
          <SettingOption title="Notifications" icon="bell" navigation={navigation} to ="EditNotification"/>
        </View>
      </View>
      <SectionHeader title="Information" />
      <View style={styles.settingGroup}>
        <View style={styles.groupContainer}>
          <SettingOption title="History" icon="history" navigation={navigation} to ="History"/>
          <SettingOption title="Bookmarks" icon="bookmark" navigation={navigation} to ="Bookmark"/>
        </View>
      </View>
      <SectionHeader title="Support" />
      <View style={styles.settingGroup}>
        <View style={styles.groupContainer}>
          <SettingOption title="Help Center" icon="question-circle" navigation={navigation} to ="HelpCenter"/>
          <SettingOption title="About" icon="info-circle" navigation={navigation} to ="About"/>
        </View>
      </View>
    </ScrollView>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={[styles.sectionHeaderText, styles.redText]}>{title}</Text>
  </View>
);

const SettingOption: React.FC<SettingOptionProps> = ({ title, icon, navigation, to } : any) => (
  <TouchableOpacity style={styles.settingOption} onPress={()=>{navigation.navigate(to)}} >
    <View style={styles.settingTextContainer}>
      {renderIcon(icon)}
      <Text style={styles.settingOptionText}>{title}</Text>
    </View>
    <AntDesign name="rightcircleo" style={[styles.rightIcon, { marginRight: 5 }]} />
  </TouchableOpacity>
);

const renderIcon = (icon: AntDesignIcon) => {
  switch (icon) {
    case "user":
      return <AntDesign name="user" style={styles.settingIcon} />;
    case "home":
      return <AntDesign name="enviromento" style={styles.settingIcon} />;
    case "bell":
      return <AntDesign name="bells" style={styles.settingIcon} />;
    case "history":
      return <Feather name="archive" style={styles.settingIcon} />;
    case "bookmark":
      return <Feather name="bookmark" style={styles.settingIcon} />;
    case "question-circle":
      return <AntDesign name="questioncircleo" style={styles.settingIcon} />;
    case "info-circle":
      return <AntDesign name="infocirlceo" style={styles.settingIcon} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionHeader: {
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
    paddingLeft: 15,
    marginBottom: 10,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  redText: {
    color: "black",
  },
  settingGroup: {
    backgroundColor: "#E2E2E2",
    borderRadius: 20,
    marginBottom: 10,
  },
  groupContainer: {
    paddingHorizontal: 10,
  },
  settingOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  settingOptionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  rightIcon: {
    fontSize: 20,
    color: "gray", // Change the color to your preference
  },
  settingTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 10,
    marginLeft: 5,
    color: "black", // Change the color to your preference
  },
});

export default SettingScreen;

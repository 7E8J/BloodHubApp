import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./HomeScreen.style";
import Button from './Components/Button';
import appointment from '../../../assets/button/Appointment.png'
import Request from '../../../assets/button/Request.png'
import Location from '../../../assets/button/Location.png'
import Post from "./Components/Post";
import picture from "../../../assets/picture/kitten.png"


const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View>
        <View style={{ padding: 20 }}>
          <Text style={styles.welcome}>ยินดีต้อนรับ,</Text>
          <Text style={styles.userName}>นายศุภณัฐ อนุมาตร</Text>
        </View>
        <View style={styles.underLine} />
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { navigation.navigate('My Appointment') }}>
            <Button image={appointment} text={"การนัดหมาย"} text_0={"ของฉัน"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Donate Request') }}>
            <Button image={Request} text={"คำขอบริจาค"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Find Health Units') }}>
            <Button image={Location} text={"ค้นหา"} text_0={"สถานพยาบาล"} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.underLine_0} />
          <Text style={styles.postFeed}>ฟีดโพสต์</Text>
          <View style={{ borderWidth: 1, borderColor: 'grey' }} />
        </View>
        <View>
          <Post profile={picture} name={"ศุภณัฐ อนุมาตร"} time={"22 พ.ค. 2546 · สุราษฎร์ธานี"} Image={picture} description={'ฉันรักแมว'} />
          <Post profile={picture} name={"ศุภณัฐ อนุมาตร"} time={"22 พ.ค. 2546 · สุราษฎร์ธานี"} Image={picture} description={'ฉันรักแมว'} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
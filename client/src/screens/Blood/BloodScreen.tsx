import React, { useRef } from "react";
import { Animated, SafeAreaView, Text, View, Image,  ScrollView} from "react-native";
import { styles } from "./BloodScreen.style";

import Siriraj from '../../../assets/hospital/Siriraj.png';
import aType from '../../../assets/hospital/Blood_A.png';
import bType from '../../../assets/hospital/Blood_B.png';
import oType from '../../../assets/hospital/Blood_O.png';
import abType from '../../../assets/hospital/Blood_AB.png';
import Card from "./components/Card";
import Label from "./components/Label";


const BloodScreen = () => {
  
  const hospitals = [
    {image: Siriraj, name:'โรงพยาบาลศิริราช'},
  ];

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView style={{}}>
      <View style={styles.title}>
        <Text style={styles.hospital}>โรงพยาบาล</Text>
      </View>
      <View style={styles.underLine_1}/>
      <View>
        <View style={styles.chooseHospital}>
          <Image style={styles.arrowButton} source={require('../../../assets/Arrow-left.png')} />
          { hospitals.map((item, key) => {
            return(
              <View style={{alignItems:'center'}} key={key}>
                <Image source={item.image}/>
                <Text style={styles.hospitalName}>{item.name}</Text>
              </View>
            )})
          }

          <Image style={{marginHorizontal:10}} source={require('../../../assets/Arrow-right.png')} />
        </View>
      </View>
      <View style={styles.underLine_2}/>
      <View style={styles.title}>
        <Text style={styles.hospital}>สภากาชาดไทย</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20, marginHorizontal:20}}>
        <View style={styles.underLine_3}/>
        <View style={styles.underLine_3}/>
      </View>
      <View style={{alignItems:'center', marginTop:20}}>
        <Text style={{fontSize:15}}>ปริมาณเลือดในคลังข้อมูล</Text>
        <Text style={{fontSize:15}}>ณ วันที่ 3 สิงหาคม 2566</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 15, marginHorizontal: 10, marginTop:20, }}>
        <Card unit={'1,000'} image={aType} recieve={'20%'}/>
        <Card unit={'1,000'} image={bType} recieve={'20%'}/>
        <Card unit={'1,000'} image={oType} recieve={'20%'}/>
        <Card unit={'1,000'} image={abType} recieve={'20%'}/>
      </View>
      <View style={{alignItems:'center', marginTop:20}}>
        <Text>กรุ๊ปเลือดพิเศษที่ต้องการ</Text>
      </View>
      <View style={{flexDirection:'row', gap:15, marginHorizontal:10, marginTop:20, marginBottom:20}}>
      <Label bloodType={'A-'} unit={'1,000 unit'}/>
      <Label bloodType={'B-'} unit={'1,000 unit'}/>
      <Label bloodType={'O-'} unit={'1,000 unit'}/>
      <Label bloodType={'AB-'} unit={'1,000 unit'}/>

      </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}
      
export default BloodScreen;
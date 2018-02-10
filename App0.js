/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { View, Text, Easing ,
         Platform, Button,
         TextInput, StyleSheet,
         Image,ScrollView,Animated,
         PanResponder, AppRegistry,
         Slider,Alert} 
        from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import logo from './logo.jpg';
import { SearchBar} from 'react-native-elements';
import PinchZoomResponder from 'react-native-pinch-zoom-responder';
import SoundPlayer from 'react-native-sound-player';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var password = '';
var tex = '';
//event.nativeEvent.text

function updateText(a){
    //console.log(a)
}
var keyStyle = {
    't1':3,
    't2':2,
    't3':1,
    't4':0,
    //GROUP 1
    //'RD1':00,
    'ARR1':3,
    'BRR1':2,
    'CRR1':1,
    'DRR1':0,
   
    //GROUP 2
    //'RD2':00,
    'ARR2':3,
    'BRR2':2,
    'CRR2':1,
    'DRR2':0,
    
    //GROUP 3
    //'RD3':00,
    'ARR3':3,
    'BRR3':2,
    'CRR3':1,
    'DDR3':0,
    
}
 class ImageRotation extends React.Component{
 state = {
        spinValue: new Animated.Value(0),  
    }
    componentDidMount() {
        Animated.timing(                  
            this.state.spinValue,                                   // The animated value to drive
            {
                toValue: this.props.toValue || 6,                  // Animate to 360/value
                duration: this.props.duration || 2000,              // Make it take a while
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start(this.props.onFinishedAnimating);                    // Starts the animation
    }

    render() {
        let spin = this.state.spinValue.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <Animated.View                 
                style={{
                    ...this.props.style,
                    transform: [{rotate:spin}],                     // Bind rotation to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
 }


 

const HomeScreen = ({ navigation }) => {
  this.state = {text:''}
  const b = this.state;
  
 function TblScreen(){
    // change color
    if(b.text.length < 0){
        Alert.alert('Fill In Your Password',"Fill It in Dummy",[{text: 'OK', onPress: () => console.log('OK Pressed')}], { cancelable: false })
     
    }

    if(~Object.keys(keyStyle).indexOf(b.text)){
        navigation.navigate('Details');
        console.log('S');
      }else{
        Alert.alert('Wrong Password !!!',"This isn't the password your sensei gave you!!",[{text: 'OK', onPress: () => console.log('OK Pressed')}], { cancelable: false })
      }
     
 };

  this.setState = function(t){
      b.text = t;
      tex = t;
  };
  
  function BeltsScreen(){
       navigation.navigate('BeltScreen');
  }
 
  function FootWorksScreen(){
      navigation.navigate('FootworkScreen');
  }

  return (
   <View style={{flex:3,alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(47, 54, 61)'}}>
  <ImageRotation>
   <Image style = {{margin:10,width: 200, height:200, resizeMode: 'cover',borderRadius:100}} source={require('./logo.jpg')} />
  </ImageRotation>
  
   <Text  style = {{margin:6}}> </Text>
       <TextInput 
              style={{height: 40, borderColor: 'gray',elevation: 1,borderWidth: 1, width:'80%',
                      shadowColor: '#000',shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.8}}
              onChangeText={(text) => this.setState(text)}
              onSubmitEditing={updateText(this)} />
      <Text  style = {{margin:2}}> </Text>
      <Button
        style = {{margin:50,backgroundColor:'black'}}
        onPress={TblScreen}
        title="Enter Password"
       />
      <Text  style = {{margin:2}}> </Text>
     <Button
        style = {{margin:50,backgroundColor:'black'}}
        onPress={BeltsScreen}
        title="Belts"
       />
      <Text  style = {{margin:2}}> </Text>
     <Button
        style = {{margin:50,backgroundColor:'black'}}
        onPress={FootWorksScreen}
        title="Footwork"
       />

  </View>
  );

}


const Belts = () => {

 
    const BeltsHeader = ['Color','Time']
     const BeltsTbl =[
                    ["White",30 ,30, 30 ,30,30],
                    ["Yellow",40  ,40 , 40,40,40],
                    ["Orange",50  ,50  ,50 , 50 , 50],
                    ["Green",60, 60,  60,  60,  60],
                    ["Light_Blue",70,  70,  70,  70,  70],
                    ["Light_Blue_Purple",80,  80, 80,  80 ,80],
                    ["Purple",90,  90,  90,  90 , 90],
                    ["Purple_Dark_Blue",100, 100, 100, 100, 100],
                    ["Dark_Blue",110, 110, 110, 110, 110],
                    ["Dark Blue_Red",120,120 ,120 ,120, 120]
                    ["Red",130,130, 130, 130, 130],
                    ["Red_Black",140, 140, 140, 140, 140],
                    ["Black",160,160 ,160 ,160, 160],
                  ];
  const StepsHeader =['', 'Steps'];
  const StepsTbl = [
                     ["White","1 Through 8"],
                     ["Yellow","1 Through 10"],
                     ["Orange","1 Through 10 plus Diamond"],
                     ["Green","1 Through 10 plus Diamond"],
                     ["Rotation 2","1 Through 10 plus Diamond and Horizontal Elliptical"],
                     ["Rotation 3","1 Through 10 plus Diamond and Vertical Elliptical"]
                    ] ;   
    return (
      <View>
       <Table>
          <Row style = {{width:'33.5%'}} data={BeltsHeader} />
            <Rows data={BeltsTbl} />
      </Table>
      <Text style={{margin:0,height:35,fontWeight:'bold',textAlign:'center',backgroundColor:'rgb(47, 54, 61)'}} ></Text>
 
      
      <Table>
         <Row   data={StepsHeader} />
           <Rows data={StepsTbl}  />
      </Table>
      </View>

      );
      
}

     
const Footwork =({navigation}) =>{
    
    function Speed(){
                

        navigation.navigate('SpeedScreen')
    }
    
    function Speed2(){
        navigation.navigate('SpeedScreen2')
    }


    return(
      <View>
        <Text style={{margin:10,height:35,fontWeight:'bold',textAlign:'center'}} ></Text>
        <View>
            <Button 
              style = {{margin:60,backgroundColor:'black'}}
              onPress={Speed}
              title="Step 1 to 8"
              />
        </View>
       
        <View>
           <Button 
                style = {{margin:20,backgroundColor:'black'}}
                onPress={Speed2}
                title="Step 1 to 10"
              />
          </View> 
      </View>
     
      );
}


class Speed extends React.Component {
    constructor() {
        super();
        this.state = { amt: 0 }
        this.getVal = this.getVal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.playSound = this.playSound.bind(this);
    	
    }
        // Set the Default State

    getVal(val) {
        //console.warn(val);
    }
    onChange(v) {
        this.setState({ val: Math.round(v) });
        //console.log(this.state);
    }
    playSound(){
     var valz = Math.round(this.state.amt);
     var set = valz * 1000;

     for (let i=1; i<=valz; i++) {
	    setTimeout( function timer(){
          try{	
		   	SoundPlayer.playSoundFile('my_sound','mp3');
	      }catch(e){
		   	console.log('Cannot play sound');
		  }

	    }, i*set );
	  }
    }
    componentWillUnmount(){
        SoundPlayer.unmount();
    }

    render() {

    	var valz = Math.round(this.state.amt);

        return (
            <View >
              <Text style = {{textAlign:'center'}}>Set Delay Between Steps</Text>
                <Slider
                    minimumValue={1}
                    maximumValue={8}
                    value={this.state.amt}
                    onValueChange={val => this.setState({ amt: val })}
                    onSlidingComplete={val => this.getVal(val)}

                />
                <Text>  {valz}</Text>

                <Button
                    style={{ margin: 50, backgroundColor: 'black' }}
                    onPress={this.playSound}
                    title="Play"
                />
       
            </View>
        );
    }
}



class Speed2 extends React.Component {
    constructor() {
        super();
        this.state = { amt: 0 }
        this.getVal = this.getVal.bind(this);
        this.onChange = this.onChange.bind(this);
    }
        // Set the Default State

    getVal(val) {
        console.warn(val);
    }
    onChange(v) {
        this.setState({ val: Math.round(v) });
        console.log(this.state);
    }
    render() {
        return (
            <View >
              <Text  style = {{textAlign:'center'}}>Set Delay Between Steps</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={8}
                    value={this.state.amt}
                    onValueChange={val => this.setState({ amt: val })}
                    onSlidingComplete={val => this.getVal(val)}

                />
                <Text>  {Math.round(this.state.amt)}</Text>

                <Button
                          style={{ margin: 50, backgroundColor: 'black' }}
                          title="Play"
                      />
            </View>
        );
    }
}




const DetailsScreen = () => {

 const tableHead0 = ['Rotation 1','Block 1', 'Block 2', 'Block 3', 'Block 4'];
 const tableHead1 = ['Rotation 2','Block 1', 'Block 2', 'Block 3', 'Block 4'];
 const tableHead2 = ['Rotation 3','Block 1', 'Block 2', 'Block 3', 'Block 4'];
 const tableHeadBelts = ['Push Ups','Guard Ups','Down Turn Ups','Dead Bug','Plank'];


 const rotation1 = [
      ['Fence', 'Pre-emptive Cross', 'Single Cover + Shoulder Stop Lead Hammer', 'Shoulder Spin Rear Naked Choke + Take Down','Duck-Under \n Haymaker, Take Side Position,  Squeeze Takedown'],
      ['Punches Lead and Rear ( Jab, Cross, +)', 'Hook', 'Overhand', 'Slap','Upper'],
      ['Kicks Rear Standing + Sitting To Standing','Round Kick','Front Kick','Stomp Kick','Side Kick'],
      ['Elbows/Knees Lead and Rear','Horizontal Elbow','Standard Knee', 'Horizontal Elbow','Standard Knee'],
      ['Hammers','Read Diagonal Down','Lead Diagonal Down','Read Diagonal Down','Lead Diagonal Down'],
      ['Blocks/Defences','Single Cover C1 Slip & Weave','Single Cover C2 Parry','Single Cover C1 Parry Hook','Single Cover C2 Slip, int, ext, rear'],
      ['Footwork  (Tooltip)','1 Through 8','1 through 10','1 through 10 Diamond','1 through 10 Diamond'],
      ['Ground','Internal Break Fall ¼ Turn Knee Spin DL Driving Knee Turn Covered Movement','Ext Break Fall ¼ Turn Knee Spin DL Driving Knee Turn Covered Movement','Forward Break Fall ¼ Turn Knee Spin DL Driving Knee Turn Covered Movement','Rear Break Fall ¼ Turn Knee Spin DL Driving Knee Turn Covered Movement'],
      ['Touch & Grab','Arm Drag to Guillotine + Under Arm Takedown Over Ref + Neck Grab','Arm Drag to School Boy + Spin To Floor (Using Arm Wrench As Lever) Under Ref + Chest Grab','Arm Drag to Rear Naked + Drop To Floor Internal Ref + Neck Grab','Internal Arm Drag to School Boy + Spin To Floor (Both Hands On Opponent Head) External Ref + "Fishy"'],
      ['Energy Drills (Basic Understanding For Year 1)','Hubud Lubud','Clinch','Wing Chun Sticky Hands','Wrestling Drill'],   
     ];
    

      //console.log(rotation1);

 const rotation2 = [
       ['Punches Year 1 + Ranges','Hook','Overhand','Slap','Upper'],
       ['Kicks Year 1 + Lead','Round Kick'  ,'Front Kick ' ,'Stomp Kick'  ,'Side Kick'],
       ['Elbows Lead + Rear' ,'Upwards Downwards Elbow ', 'Walk Through Knee','Upwards + Downwards Elbow ','Side Knee to Ribs'],
       ['Hammers Lead + Rear', 'Vertical Hammer', 'External Horizontal Hammer', ' Vertical Hammer', 'External Horizontal Hammer'],
       ['Blocks/Defences', 'C1 Development Connect and Crash', 'C2 Development Connect and Crash','C1 Development Connect and Crash','C2 Development Connect and Crash '],
       ['Footwork' , 'Year 1 + Horizontal Elliptical'  ,'Year 1 + Horizontal Elliptical',  'Year 1 + Horizontal Elliptical' , 'Year 1 + Horizontal Elliptical'],
       ['Ground', 'The Mount...On top: Mount to knee ride On bottom: Escape the Mount with hip lift, foot and arm trap and role', 'The Scarf... On top: To knees and feet On bottom: Escape the scarf with face grab, shrimp and roll', 'The Side Control... On top: To knees and feet On bottom: Escape the side control with elbow insert, ear grab and drive',  'The Guard...On top: strike, to knee, to feet On bottom: strike, shrimp, kick, stand'],
       ['Touch & Grab','From Rear Grab: Simple C1 wipe, Step 5 then 8 Over +','From Rear Grab: C2 hand grab, Step 5 then 8, Step-through to Headlock 1 Under +','From Rear Grab: Simple C1 wipe over arm, Step 5 then 8, Arm Drag Internal +','From Rear Grab:C2 hand grab, Step 7, 8, 11, External Horizontal Hammer, Step-through to Headlock 1. External +'],
       ['Energy (Deeper understanding plus variations)', 'Hubud Lubud', 'Clinch (Add headlock transitions)', 'Wing Chun Sticky Hands','Wrestling Drill'],
       ['Takedown','Side Squeeze', 'Groin Grab', 'Valley Drop', 'Reverse Valley Drop'],
      ];

 const rotation3 = [
      ['Punches Year 1 & 2 + Level Changes','Hook','Overhand', 'Slap', 'Upper'],
      ['Kicks Year 1 & 2 + Defence', ' Round Kick Grab Leg, Drive Knee Into Floor','Front Kick Grab Foot Step Back to Destructure', 'Stomp Kick From Distance: Front Kick Lead Knee In Clinch: Knee Barge' ,'Side Kick Grab Foot, Hammers To Side Of Knee'],
      ['Elbows Lead + Rear', 'Alas Elbows Internal External', 'Alas Elbows Vertical' , 'Alas Elbows Internal External', 'Alas Elbows Vertical'],
      ['Hammers Lead + Rear', 'Reverse Vertical Hammer','Reverse Diagonal Hammer', 'Reverse Vertical Hammer', 'Reverse Diagonal Hammer'],
      ['Blocks/Defences',  'Cover Shifting (Orbital)', ' Cover Shifting (Orbital) ', 'Cover Shifting (Orbital)', ' Cover Shifting (Orbital)'],
      ['Footwork' ,'Year 1 & 2 + Vertical Elliptical 1&2 + Horizontal Elliptical','Year 1 & 2 + Vertical Elliptical ', 'Year 1 & 2 + Vertical Elliptical ' ,'Year 1 & 2 + Vertical Elliptical'],
      ['Ground Year 2 + Transitions + Extra Escape', 'The Mount... Transition to Scarf On bottom: Cover inside arm, drag down, guillotine.', 'The Scarf... Transition to Side On bottom: Escape the scarf with face grab, shrimp other direction and roll opponent over.',  'The Side, Transition to Mount On bottom: Right hand grab near collar, left hand reach to far collar. Roll right arm over to get choke.', 'The Guard... Recap and flow other Transitions On bottom: Both feet on chest, kick away.'],
      ['Grab', 'Over + Into Takedown', 'Under + Into Takedown','Internal + Into Takedown','External + Into Takedown'],
      ['Energy', 'Nine Count', 'Nine Count', 'Nine Count', 'Nine Count'],
      ['Takedown (Lowline on knees)', 'DL Driving Knee Turn into Opponents Knee', ' Hyperextend  Knee with Shoulder (Foot Grab)', 'Rolling Scoop', 'Shoulder into Hip. Knee Cup, Lift and Twist'],
   ];
     
     console.log(keyStyle[tex]);
    // var cnt = 0;
     var CorrectRows = function (tbl,header){
        tbl.forEach(function(a){
           a.length -= RowMinus;
        });
        header.length -= RowMinus; 
      }

     var RowMinus = keyStyle[tex];
     var RotationType = tex.slice(-2);
     

    var tblRow = [];
       

    addTblRow(RotationType);



    function addTblRow(Rot){
      var tblRowHeaderContainer = [tableHead0,tableHead1,tableHead2];
      var tblRowContainer = [rotation1,rotation2,rotation3];

        switch(Rot){
            case 'R1':
                 CorrectRows(rotation1,tableHead0);
                 cnt = 1;
            break;
            case 'R2':
                 CorrectRows(rotation2,tableHead1);
                 cnt = 2;
            break;
            case 'R3':
                 CorrectRows(rotation3,tableHead2);
                 cnt = 3;
            break;
            


        }
        for(var i = 0; i < cnt;i++){
            tblRow.push(
              <Table>
               <Row data={tblRowHeaderContainer[i]} style={styles.head} textStyle={styles.text}/>
                <Rows data={tblRowContainer[i]}  style={styles.row} textStyle={styles.text}/>
               </Table>
              );
        }


    }



                   
 return (
 <View style={StyleSheet.absoluteFill}>
   
   <SearchBar
     round 
     placeholder='Type Here...' />

   <Text style={{margin:0,fontSize:35,fontWeight:'bold',textAlign:'center',backgroundColor:'rgb(47, 54, 61)'}} >Syallabus</Text>
   <ScrollView 
      
      centerContent
      maximumZoomScale={2}
      minimumZoomScale={1}
    >
          {tblRow}
  
     
  </ScrollView>    
  </View>
   );
}

const styles = StyleSheet.create({
  head: { height: 80, backgroundColor: '#6e99dd' },
  text: { marginLeft: 0,textAlign: 'center' },
  row: { backgroundColor:'#a7c3f2'},
  borderStyle:{borderWidth:4}//height: 200, width: 360 }
});


const styles0 = StyleSheet.create({
  head: { height: 80, backgroundColor: '#6e99dd' },
  text: { marginLeft: 0,textAlign: 'center' },
  row: { backgroundColor:'#a7c3f2', },
  borderStyle:{borderWidth:4}//height: 200, width: 360 }
});


const styles1 = StyleSheet.create({
  head: { height: 80, backgroundColor: '#6e99dd' },
  text: { marginLeft: 0,textAlign: 'center' },
  row: { backgroundColor:'#a7c3f2'},
  borderStyle:{borderWidth:4}//height: 200, width: 360 }
});

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
     navigationOptions: {
       headerTitle: 'CHIMERA DEFENCE FORCE',
       headerTitleStyle :{alignSelf: 'center',fontFamily:'MuseoSansRounded-300', fontWeight: '600',color:'white',margin:5},
       headerStyle :{backgroundColor: 'rgb(47, 54, 61)',  shadowOpacity: 0}
    },
  },
  Details: {
    screen: DetailsScreen,
      navigationOptions: {
        headerTitle: 'Chimera Defence Force',
        headerTitleStyle :{alignSelf: 'center',fontFamily:'MuseoSansRounded-300', fontWeight: '600',color:'white',margin:5},
        headerStyle :{backgroundColor: 'rgb(47, 54, 61)',  shadowOpacity: 0}
      
     },
  },
   BeltScreen:{
     screen:Belts,
      navigationOptions: {
       headerTitle: 'CHIMERA DEFENCE FORCE',
       headerTitleStyle :{alignSelf: 'center',fontFamily:'MuseoSansRounded-300', fontWeight: '600',color:'white',margin:5},
       headerStyle :{backgroundColor: 'rgb(47, 54, 61)', shadowOpacity: 0}
    },
  },
  FootworkScreen:{
    screen:Footwork,
      navigationOptions: {
       headerTitle: 'CHIMERA DEFENCE FORCE',
       headerTitleStyle :{alignSelf: 'center',fontFamily:'MuseoSansRounded-300', fontWeight: '600',color:'white',margin:5},
       headerStyle :{backgroundColor: 'rgb(47, 54, 61)', shadowOpacity: 0}
    }, 
  },
  SpeedScreen:{
    screen:Speed,
      navigationOptions: {
       headerTitle: 'CHIMERA DEFENCE FORCE',
       headerTitleStyle :{alignSelf: 'center',fontFamily:'MuseoSansRounded-300', fontWeight: '600',color:'white',margin:5},
       headerStyle :{backgroundColor: 'rgb(47, 54, 61)', shadowOpacity: 0}
    }, 
  }
  ,
  SpeedScreen2:{
    screen:Speed2,
      navigationOptions: {
       headerTitle: 'CHIMERA DEFENCE FORCE',
       headerTitleStyle :{alignSelf: 'center',fontFamily:'MuseoSansRounded-300', fontWeight: '600',color:'white',margin:5},
       headerStyle :{backgroundColor: 'rgb(47, 54, 61)', shadowOpacity: 0}
    }, 
  }
});


//SpeedScreen

export default RootNavigator;


//AppRegistry.registerComponent('Chimera', () => HomeScreen);
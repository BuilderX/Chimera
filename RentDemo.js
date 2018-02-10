import React from 'react';
import { View, Text, Easing ,
         Platform, Button,
         TextInput, StyleSheet,
         Image,ScrollView } 
        from 'react-native';

//import { StackNavigator } from 'react-navigation';




const ButtonCustom = (props) =>{
	var arr = [];

	for(var i = 0 i < this.props.cnt;i++){
		 arr.push(
		 		<Button 
		 		  title = this.props.title
		 		  color = this.props.col
		 		  onPress = this.props.btn
		 		/>
		 	);
	}

	return (	<View>
				   {arr}
				</View>
		   );
}





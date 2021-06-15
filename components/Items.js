import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../utils/Colors'

const { PRIMARY_COLOR, SECONDARY_COLOR, ACTION_REMOVE_COLOR } = Colors

export default function Items(props) {

   const action = (action_type) => {
      if(action_type == 'REMOVED'){
         alert('rem')
      }
   }

   return (
      <View style={styles.theItem}>
         <Text style={styles.itemName}>{props.item}</Text>
         <TouchableOpacity style={styles.foundItem} onPress={()=>{action('FOUND')}}>
            <Text style={styles.option}>F</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.notFoundItem} onPress={()=>{action('NOT_FOUND')}}>
            <Text style={styles.option}>O</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.removeItem} onPress={()=>{action('REMOVED')}}>
            <Text style={styles.option}>X</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   theItem: {
      height: 40,
      marginTop: 20,
      width: '100%',
      backgroundColor: PRIMARY_COLOR,
      padding: 10,
      flexDirection:'row'
   },
   itemName: {
      color: SECONDARY_COLOR,
   },
   removeItem: {
      position: 'absolute',
      right: 5,
      height: 40,
      width: 30,
   },
   notFoundItem: {
      position: 'absolute',
      right: 35,
      height: 40,
      width: 30,
   },
   foundItem: {
      position: 'absolute',
      right: 65,
      height: 40,
      width: 30,
   },
   option: {
      color: ACTION_REMOVE_COLOR,
      fontSize: 30,
      textAlign: 'center'
   }
});
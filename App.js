import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import ShoppingList from "./assets/ShoppingList.png";
import Items from "./components/Items";
import data from "./utils/data.json";
import { Colors } from "./utils/Colors";


const { PRIMARY_COLOR, SECONDARY_COLOR, ACTION_REMOVE_COLOR } = Colors;

export default function App() {

  const [ shopItems, setShopItems ] = useState(data)

  const info = () => {
    Alert.alert(
      "Credits:",
      "ShoppingList v1.0.2\nDeveloped by: Sazad Ahemad\nEmail: mail2sazad@gmail.com\nAll rights reserved © " +
        new Date().getFullYear(),
      [
        {
          text: "OK",
        },
      ]
    );
  };

  const action = (action_type, index) => {
    if (action_type == "REMOVED") {
      let itemsCopy = [...shopItems]
      itemsCopy.splice(index, 1);
      setShopItems(itemsCopy);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {/* Adding logo */}
        <Image source={ShoppingList} style={styles.logo} />

        {/* Adding app name */}
        <Text style={styles.heading}>Shopping List</Text>

        {/* Adding info icon and func */}
        <TouchableOpacity style={styles.info} onPress={info}>
          <Text style={styles.icon_info}>i</Text>
        </TouchableOpacity>
      </View>
      
      {/* Adding all the shopping items */}
      <View style={styles.items}>
        {
          shopItems.map((data, index) => {
            return (
              <View style={styles.theItem} key={index}>
                <Text style={styles.itemName}>{data.name}</Text>
                <TouchableOpacity style={styles.foundItem} onPress={()=>{action('FOUND')}}>
                <Text style={styles.option}>F</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notFoundItem} onPress={()=>{action('NOT_FOUND')}}>
                <Text style={styles.option}>O</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeItem} onPress={()=>{action('REMOVED', index)}}>
                <Text style={styles.option}>X</Text>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5271FF",
  },
  title: {
    marginTop: 30,
    height: 80,
    width: "100%",
    backgroundColor: "#5271FF",
    flexDirection: "row",
    color: "#fff",
  },
  logo: {
    height: 70,
    width: 70,
  },
  heading: {
    fontSize: 40,
    color: "#fff",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 10,
  },
  info: {
    height: 30,
    width: 30,
    borderColor: "#fff",
    position: "absolute",
    right: 10,
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
  },
  icon_info: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
  },
  items: {
    height: "82.7%",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#fff",
  },
  theItem: {
    height: 40,
    marginTop: 20,
    width: "100%",
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    flexDirection: "row",
  },
  itemName: {
    color: SECONDARY_COLOR,
  },
  removeItem: {
    position: "absolute",
    right: 5,
    height: 40,
    width: 30,
  },
  notFoundItem: {
    position: "absolute",
    right: 35,
    height: 40,
    width: 30,
  },
  foundItem: {
    position: "absolute",
    right: 65,
    height: 40,
    width: 30,
  },
  option: {
    color: ACTION_REMOVE_COLOR,
    fontSize: 30,
    textAlign: "center",
  },
});

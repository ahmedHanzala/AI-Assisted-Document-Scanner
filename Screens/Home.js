import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import BackgroundGeolocation from "react-native-background-geolocation";

function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [waiting,setWaiting] = useState(false);

  const getLocation = async () => {
    setWaiting(true);
    const response = await BackgroundGeolocation.getCurrentPosition();
    setLocation(response);
    setWaiting(false);
  };

  return (
    <View >
      <View style={{  justifyContent:'center'}}>
        <Button
          title="Scan Documents"
          onPress={(() => navigation.navigate("DocumentScannerComponent"))}
        />
        <Button 
        title="Get Location"
        onPress={getLocation} 
        />
    
      </View>
      {waiting? <Text>Loading...</Text>:null}
      {location !== null ? (
        <Text style={{  alignItems: "center" }}>
          Accuracy : {location.activity.confidence} {"\n"}
          Latitude: {location.coords.latitude} {"\n"}
          Longitude: {location.coords.longitude} {"\n"}
          Object is Moving ? {location.is_moving? "Yes":"No"}
        </Text>
      ) : null}
    </View>
  );
}
export default HomeScreen;

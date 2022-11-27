import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import { Camera, CameraType } from "expo-camera";
import DocumentScannerOne from "./DocumentScannerOne";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  const [location, setLocation] = useState(null);
  const [locationPermissionStatus, setlocationPermissionStatus] =
    useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(false);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const getCameraPermission = async () => {
    let { status } = await Camera.requestCameraPermissionsAsync();

    if (status !== "granted") {
      setCameraPermission("Permission to access camera was denied");
      return;
    }
    setCameraPermission("Camera permission granted");
  };
  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setlocationPermissionStatus("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocationPermission();
    getCameraPermission();
  }, []);

  return (
    <StackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom:20,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

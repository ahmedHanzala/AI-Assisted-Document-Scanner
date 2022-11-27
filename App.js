import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Camera, CameraType } from "expo-camera";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  const [locationPermissionStatus, setlocationPermissionStatus] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [type, setType] = useState(CameraType.back);

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
  };

  useEffect(() => {
    getLocationPermission();
    getCameraPermission();
  }, []);

  return (
    <StackNavigator/>
  );
}
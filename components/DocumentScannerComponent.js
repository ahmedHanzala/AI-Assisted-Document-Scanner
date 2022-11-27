import React, { useState, useEffect } from 'react'
import { Button, Image, View } from 'react-native'
import DocumentScanner from 'react-native-document-scanner-plugin'

const DocumentScannerComponent = () => {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument()
  
    if (scannedImages.length > 0) {
      setScannedImage(scannedImages[0])
    }
  }

  useEffect(() => {
    scanDocument()
  }, []);

  return (
    <View>
    <Image
      resizeMode="contain"
      style={{ width: '100%', height: '100%' }}
      source={{ uri: scannedImage }}
    />
    <View style={{ flex:1,flexDirection:'row' }}>
    <Button title='Save' />
    <Button title='Share' />
    </View>
    </View>
  )
}
export default DocumentScannerComponent;
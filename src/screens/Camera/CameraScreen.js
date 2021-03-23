import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import styles from './styles';
import { useRef } from 'react';

export default function App() {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [isRecording, setIsRecording] = useState(false)
  const camera = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
      setIsRecording(false)   //is in Camera component
    } else {
      setIsRecording(true)
      const data = await camera.current.recordAsync();
      console.log(data)
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    console.log("result: ", result)
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        //onRecord={() => setIsRecording(true)}
        //onRecord={() => setIsRecording(false)}
        //stopRecording={() => setIsRecording(false)}
        style={styles.camera} type={type}
      >
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={flipCamera}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>

          <View style={styles.recordBorder}>
            <TouchableOpacity
              style={isRecording
                ? styles.buttonStop
                : styles.buttonRecord
              }
              onPress={onRecord}
            />
          </View>

          <View style={styles.buttonGallery}>
            <TouchableOpacity
              onPress={pickImage}>
              <Text style={styles.textGallery}>Photos</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Camera>
    </View>
  );
}
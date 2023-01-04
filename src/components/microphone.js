import React from 'react';
import {View, Text, Button} from 'react-native';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <Text>Browser doesn't support speech recognition.</Text>;
  }
  return (
    <View>
      <Text>Microphone: {listening ? 'on' : 'off'}</Text>
      <Button onClick={SpeechRecognition.startListening} title="Start"></Button>
      <Button onClick={SpeechRecognition.stopListening} title="Stop"></Button>
      <Button onClick={resetTranscript} title="Reset"></Button>
      <Text>{transcript}</Text>
    </View>
  );
};
export default Dictaphone;

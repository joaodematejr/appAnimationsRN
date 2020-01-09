import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native'
import dancingBear from './dancingBear.json'
import zeDance from './zeDance.json'
// import { Container } from './styles';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Lottie resizeMode='contain' source={dancingBear} autoSize autoPlay loop /> */}
      <Lottie resizeMode='contain' source={zeDance} autoSize autoPlay loop />
    </SafeAreaView>
  );
}


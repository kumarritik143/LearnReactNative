import React from 'react';
import LifeCycleComponent from './src/components/ClassComponent';
import {StyleSheet,View} from 'react-native';
import FunctionalComponent from './src/components/FunctionalComponent';
import BasicComponent from './src/components/BasicComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () =>{
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      {/* <LifeCycleComponent/> */}
      {/* <FunctionalComponent/> */}
      <BasicComponent />
    </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});
export default App;

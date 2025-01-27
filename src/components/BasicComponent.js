import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BasicComponent = () => {
    const insets=useSafeAreaInsets();
    console.log(insets.left);
    console.log(insets.top );
    console.log(insets.right);
    console.log(insets.bottom);

  return (
    <View style={[styles.container,{paddingTop:insets.top}]}>
        {/* <SafeAreaView></SafeAreaView> */}
      <Text>BasicComponent</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
    },
});

export default BasicComponent
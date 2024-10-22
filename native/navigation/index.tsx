import React from 'react';
import { Text, SafeAreaView, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import StackNav from './Stack';
import TabNav from './Tab';
import DrawerNav from './Drawer';

const Navigation = () => {
  return (
    <View style={{flex:1}}>
      
        {/* <NavigationContainer> */}
          <TabNav/>
          {/* <StackNav/> */}
        
          {/* <DrawerNav/> */}
        
        {/* </NavigationContainer> */}
        
    </View>
  );
};

export default Navigation;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { TwoPaneView } from 'react-native-twopaneview';

const App: () => React$Node = () => {
  return (

    <View>
      <TwoPaneView panePriority='pane1' panePriorityVerticalSpanning='pane1' >

		<Text>This is panel 1</Text>

        <Text>This is panel 2</Text>
      </TwoPaneView>
    </View>
  );
};

export default App;

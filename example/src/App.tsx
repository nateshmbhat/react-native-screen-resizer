import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { RNScreenResizer, useScreenSize } from 'react-native-screen-resizer';
import { ProductView } from './TestComponent';

export default function App() {
  return (
    <RNScreenResizer enableResizer>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <ProductView />
        </View>
      </View>
    </RNScreenResizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

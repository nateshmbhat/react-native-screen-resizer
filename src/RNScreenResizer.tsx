import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ScreenSizeModifier } from './ScreenSizeModifier';
import { useScreenSize } from './useScreenSize';

export const RNScreenResizer = ({
  children,
}: {
  children: ReactNode;
  customStyle: StyleProp<ViewStyle>;
}) => {
  const { screenHeight, screenModificationEnabled, screenWidth } =
    useScreenSize();
  const style = { height: screenHeight, width: screenWidth };
  return screenModificationEnabled ? (
    <>
      {/* @ts-ignore */}
      <View style={style}>{children}</View>
      {screenModificationEnabled && <ScreenSizeModifier />}
    </>
  ) : (
    { children }
  );
};

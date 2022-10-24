import React, { ReactNode, useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ScreenSizeModifier } from './ScreenSizeModifier';
import { useScreenSize } from './useScreenSize';

export const RNScreenResizer = ({
  children,
  enableResizer = false,
}: {
  children: ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  enableResizer?: boolean;
}): JSX.Element => {
  const {
    screenModificationEnabled,
    enableScreenSizeModification,
    disableScreenSizeModification,
    screenHeight,
    screenWidth,
  } = useScreenSize();
  useEffect(() => {
    if (enableResizer) {
      enableScreenSizeModification();
    } else {
      disableScreenSizeModification();
    }
  });
  console.log('size resizer : ', enableResizer);
  const style: ViewStyle = {
    height: screenHeight,
    width: screenWidth,
  };
  return screenModificationEnabled ? (
    <>
      <View style={style}>{children}</View>
      {<ScreenSizeModifier />}
    </>
  ) : (
    <>{children}</>
  );
};

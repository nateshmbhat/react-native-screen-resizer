import { Dimensions } from 'react-native';
import { hookstate, useHookstate } from '@hookstate/core';

const screenSizeState = hookstate({
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height),
  screenModificationEnabled: false,
});

export abstract class ScreenSizeUtil {
  static getScreenSize = () => {
    return screenSizeState.get();
  };

  static setScreenSize = (newObject: { width: number; height: number }) => {
    console.log('Changing screen size to : ', newObject);
    return screenSizeState.set({
      ...newObject,
      screenModificationEnabled: true,
    });
  };
  static enableScreenSizeModification = () => {
    screenSizeState.screenModificationEnabled.set(true);
  };

  static isScreenSizeModificationEnabled = () => {
    return screenSizeState.screenModificationEnabled.get();
  };

  static toggleScreenSizeModification = () => [
    screenSizeState.screenModificationEnabled.set(
      !this.isScreenSizeModificationEnabled()
    ),
  ];

  static disableScreenSizeModification = () => {
    screenSizeState.set({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      screenModificationEnabled: false,
    });
  };
}

/**Used to get and set the screen sizes from any component. Helps in testing how the ui looks in various device screen sizes.
 *
 * Example usage 1 : Using screen height and width :
 *  - const {screenHeight,screenWidth} = useScrenSize();
 *  - console.log('Current screen width and height is : ', screenWidth, screenHeight)
 *  - Whenever screen height is changed using ScreenSizeUtil or using this [useScreenSize] hook,
 * the component will get rerendered with new values of screenHeight and screenWidth
 *
 *
 * Example usage 2 :
 *  - You can also enable or disable the screen size modification :
 *  const {enableScreenSizeModification, disableScreenSizeModification} = useScrenSize();
 */
export const useScreenSize = () => {
  const { width, height, screenModificationEnabled } =
    useHookstate(screenSizeState);

  const setScreenWidth = (newWidth: number) => {
    console.log('Changing screen width to : ', newWidth);
    width.set(Math.round(newWidth));
    screenSizeState.screenModificationEnabled.set(true);
  };

  const setScreenHeight = (newHeight: number) => {
    console.log('Changing screen height to : ', newHeight);
    height.set(Math.round(newHeight));
    screenSizeState.screenModificationEnabled.set(true);
  };

  const disableScreenSizeModification = () => {
    screenSizeState.set({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      screenModificationEnabled: false,
    });
  };

  const enableScreenSizeModification = () => {
    screenSizeState.screenModificationEnabled.set(true);
  };

  return {
    screenWidth: width.get(),
    screenHeight: height.get(),
    setScreenWidth,
    setScreenHeight,
    screenModificationEnabled: screenModificationEnabled.get(),
    disableScreenSizeModification,
    enableScreenSizeModification,
  };
};

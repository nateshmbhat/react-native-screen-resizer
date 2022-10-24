import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useScreenSize } from './useScreenSize';

const Row = ({ children }: { children: React.ReactNode }) => {
  //@ts-ignore
  return (
    <View style={[{ display: 'flex', flexDirection: 'row' }]}>
      {children !== undefined && children}
    </View>
  );
};
const Spacer = ({ width, height }: { width?: number; height?: number }) => {
  return <View style={{ width, height }} />;
};

const PrimaryButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    //@ts-ignore
    <TouchableOpacity onPress={onPress} style={{ padding: 14, borderWidth: 1 }}>
      {/* @ts-ignore */}
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export const ScreenSizeModifier = () => {
  const { screenWidth, screenHeight, setScreenHeight, setScreenWidth } =
    useScreenSize();

  return (
    //@ts-ignore
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        opacity: 0.8,
        transform: [{ scale: 0.8 }],
      }}
    >
      {/* @ts-ignore */}
      <Row>
        <PrimaryButton
          text="W+"
          onPress={() => {
            setScreenWidth(screenWidth + 10);
          }}
        />

        <PrimaryButton
          text="W-"
          onPress={() => {
            setScreenWidth(screenWidth - 10);
          }}
        />
        <PrimaryButton text={screenWidth.toString()} onPress={() => {}} />
        <Spacer width={20} />
        {/* @ts-ignore */}
        <Row>
          <PrimaryButton
            text="H+"
            onPress={() => {
              setScreenHeight(screenHeight + 10);
            }}
          />
          <PrimaryButton
            text="H-"
            onPress={() => {
              setScreenHeight(screenHeight - 10);
            }}
          />

          <PrimaryButton text={screenHeight.toString()} onPress={() => {}} />
        </Row>
      </Row>
    </View>
  );
};

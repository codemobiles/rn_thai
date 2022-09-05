/* eslint-disable react-native/no-inline-styles */
import {View, TextInput, TextInputProps} from 'react-native';
import React from 'react';

type CMEntryProp = {
  hint: string;
  icon?: string;
};
const CMEntry = ({hint, icon, ...rest}: CMEntryProp & TextInputProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
      }}>
      {/* icon */}
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: icon ? icon : '#d3f',
          borderRadius: 15,
        }}
      />

      <TextInput
        placeholder={hint}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#0004',
          paddingLeft: 16,
          marginLeft: 16,
          borderRadius: 10,
        }}
        {...rest}
      />
    </View>
  );
};

export default CMEntry;

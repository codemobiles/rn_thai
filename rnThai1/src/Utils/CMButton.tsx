/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, ButtonProps} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  variant: 'contained' | 'outline';
};

const CMButton = ({title, variant}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        height: 50,
        backgroundColor: variant === 'contained' ? '#0099FA' : '#0000',
        borderWidth: variant === 'contained' ? 0 : 1,
        borderColor: '#0003',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: variant === 'contained' ? 'white' : 'black'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CMButton;

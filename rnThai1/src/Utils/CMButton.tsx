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
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CMButton;

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {jsonSelector, loadData} from './store/slices/json.slice';
import {useAppDispatch} from './store/store';
import {Youtube} from './types/youtube.type';

type Props = {};

const JSONFeedScreen = (props: Props) => {
  const jsonReducer = useSelector(jsonSelector);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  React.useEffect(() => {
    // created
    console.log('on created');

    // destroy
    return () => {
      console.log('on destroy');
    };
  }, []);

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/img/gradient_bg.png')}>
      <FlatList
        ListHeaderComponent={() => renderHeader()}
        style={{flex: 1}}
        data={jsonReducer.dataArray}
        keyExtractor={item => item.id}
        renderItem={renderRow}
      />
    </ImageBackground>
  );
};

type renderRowProp = {
  item: Youtube;
  index: number;
};
const renderRow = ({item, index}: renderRowProp) => (
  <TouchableOpacity style={styles.card} onPress={() => Alert.alert(item.title)}>
    {/* avatar and title */}
    <View style={{flexDirection: 'row', margin: 16}}>
      {/* avatar */}
      <Image
        source={{uri: item.avatar_image}}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      {/* title and subtitle */}
      <View style={{flex: 1, marginLeft: 16}}>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.subtitle}
        </Text>
      </View>
    </View>

    {/* Image */}
    <Image source={{uri: item.youtube_image}} style={{flex: 1}} />
  </TouchableOpacity>
);

export default JSONFeedScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    height: 270,
    margin: 20,
  },
});

const renderHeader = () => (
  <View style={{alignItems: 'center'}}>
    {/* <Text style={{color: '#FFF'}}>{route.params?.username}</Text> */}
    <Image
      source={require('./assets/img/header_react_native.png')}
      resizeMode="contain"
      style={{height: 100, width: '100%'}}
    />
  </View>
);

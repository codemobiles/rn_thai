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
  <TouchableOpacity
    style={styles.listCard}
    onPress={() => Alert.alert(item.title)}>
    {/* avatar and title */}
    <View style={styles.listCardView}>
      {/* avatar */}
      <Image source={{uri: item.avatar_image}} style={styles.listAvatar} />
      {/* title and subtitle */}
      <View style={styles.listTitleSubtitleContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.listTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.subtitle}
        </Text>
      </View>
    </View>

    {/* Image */}
    <Image source={{uri: item.youtube_image}} style={styles.listYoutbeImage} />
  </TouchableOpacity>
);

export default JSONFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
    lineHeight: 1,
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
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

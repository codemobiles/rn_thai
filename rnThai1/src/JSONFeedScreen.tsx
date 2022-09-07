import {View, Text, ImageBackground, Image} from 'react-native';
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
  <Text style={{fontSize: 30, margin: 10, backgroundColor: 'white'}}>{`${
    index + 1
  }. ${item.title}`}</Text>
);

export default JSONFeedScreen;

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

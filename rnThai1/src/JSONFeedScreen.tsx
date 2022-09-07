import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {jsonSelector, loadData} from './store/slices/json.slice';
import {useAppDispatch} from './store/store';

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
        ListHeaderComponent={() => (
          <Text style={{fontSize: 50}}>I am Header</Text>
        )}
        style={{flex: 1}}
        data={jsonReducer.dataArray}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Text
            style={{fontSize: 30, margin: 10, backgroundColor: 'white'}}>{`${
            index + 1
          }. ${item.title}`}</Text>
        )}
      />
    </ImageBackground>
  );
};

export default JSONFeedScreen;

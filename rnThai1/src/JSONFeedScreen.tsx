import {View, Text} from 'react-native';
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
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={jsonReducer.dataArray}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Text>{`${index + 1}. ${item.title}`}</Text>
        )}
      />
    </View>
  );
};

export default JSONFeedScreen;

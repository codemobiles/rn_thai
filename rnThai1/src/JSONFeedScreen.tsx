import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';
import YoutubeResponse, {Youtube} from './types/youtube.type';
import {FlatList} from 'react-native-gesture-handler';

type Props = {};

const JSONFeedScreen = (props: Props) => {
  const courses = ['java', 'flutter', 'angular', 'react'];
  const [dataArray, setDataArray] = React.useState<Youtube[]>([]);

  React.useEffect(() => {
    loadData();
    console.log('JSONScreen is created');
  }, []);

  const loadData = async () => {
    const url =
      'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs';

    // Thread
    const result = await axios.get<YoutubeResponse>(url);
    setDataArray(result.data.youtubes);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={dataArray}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Text>{`${index + 1}. ${item.title}`}</Text>
        )}
      />
    </View>
  );
};

export default JSONFeedScreen;

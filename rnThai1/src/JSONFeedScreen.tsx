import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {};

const JSONFeedScreen = (props: Props) => {
  const courses = ['java', 'flutter', 'angular', 'react'];
  const [dataArray, setDataArray] = React.useState<any[]>([]);

  React.useEffect(() => {
    loadData();
    console.log('JSONScreen is created');
  }, []);

  const loadData = async () => {
    const url =
      'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs';

    // Thread
    const result = await axios.get(url);
    setDataArray(result.data.youtubes);
  };

  return (
    <View>
      {dataArray.map(item => (
        <Text style={{fontSize: 20}} key={item.id}>
          {item.title}
        </Text>
      ))}
      {/* {courses.map(item => (
        <Text style={{fontSize: 70}} key={item}>
          {item}
        </Text>
      ))} */}
    </View>
  );
};

export default JSONFeedScreen;

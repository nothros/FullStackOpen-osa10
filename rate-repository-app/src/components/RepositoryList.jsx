import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import styles from '../../styles';
import repositories from './Data';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item = {item}/>}
    />
  );
};

export default RepositoryList
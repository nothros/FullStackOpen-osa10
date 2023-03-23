import { Text, View} from 'react-native';
import styles from '../../styles';


const Tag = ({ language }) => {
  return (
    <View marginTop={12}>
    <Text style={styles.tag}>{language}</Text>
    </View>
  )
}

export default Tag;

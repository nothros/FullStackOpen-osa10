import { View } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text';

const AppBarMenuItem = ({ title, link }) => {
  return (
    <View margin={12}>
      <Link to={link}>
        <Text color="white" fontSize="heading" fontWeight="bold">{title}</Text>
      </Link>
    </View>
  );
}


export default AppBarMenuItem;
import { View, ScrollView } from 'react-native';

import styles from '../../styles';

import AppBarMenuItem from './AppBarMenuItem';


const AppBar = () => {
  return (
    <View style={styles.appbar}>
      <ScrollView horizontal={true}>
        <AppBarMenuItem title={"Repositories"} link={"/"} />
        <AppBarMenuItem title={"Sign in"} link={"/signin"} />
      </ScrollView>
    </View>
  )
};

export default AppBar;
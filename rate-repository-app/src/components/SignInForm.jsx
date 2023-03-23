import { Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

import styles from '../../styles';



const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formView}>
      <FormikTextInput name="name" placeholder="Username" />
      <FormikTextInput name="pword" placeholder="Password" secureTextEntry={true} />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontSize='subHeading' fontWeight='bold' color='white'>Submit</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
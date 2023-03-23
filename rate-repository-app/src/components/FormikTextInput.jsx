import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import Text from './Text';

import TextInput from './TextInput';

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    width: "80%",
    borderRadius: 5,
    borderColor: "#586069",
    padding: 5,
  },
  error: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    width: "80%",
    borderRadius: 5,
    borderColor: "#d73a4a",
    padding: 5,
  },

});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput style={showError? styles.error : styles.input}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text color="error">{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
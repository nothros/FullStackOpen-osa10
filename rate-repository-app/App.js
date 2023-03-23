import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import AppBar from './src/components/AppBar';

const App = () => {
  return (
    <>
      <NativeRouter>
        <AppBar/>
        <Main/>
      </NativeRouter>
    </>
  );
};

export default App;
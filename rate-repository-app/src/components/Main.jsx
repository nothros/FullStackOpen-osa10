import RepositoryList from './RepositoryList';
import { Route, Routes } from 'react-router-native';
import SignIn from './Signin';

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Main;
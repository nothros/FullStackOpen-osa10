import { View, Image, StyleSheet } from 'react-native';
import styles from '../../styles';
import Tag from './Tag';
import  Text from './Text';

const checkK =(number) => {

  if(number >= 1000){
    return (number/1000).toFixed(1)+ 'k'
  }
  return number
}

const CardHeader = ({item}) =>{
  return (
    <View style={styles.flexItemTop}>
      <Image
        style={styles.avatar}
        source={{uri:item.ownerAvatarUrl}} />

      <View style={styles.flexItemTopDescriptions}>
        <Text fontWeight='bold' fontSize='subHeading'>{item.fullName}</Text>
        <Text>{item.description}</Text>
        <Tag language={item.language}/>
      </View>
    </View>
  )
}

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  numberText: {
    flexGrow: 0,
  },
  actionText: {
    textDecorationLine: 'underline',
  },
});

const CardFooter =({item}) => {
  return(<View style={cardFooterStyles.container}>

  <View style={styles.flexItemRateCont}>
    <Text fontWeight='bold'>{checkK(item.stargazersCount)}</Text>
    <Text>Stars</Text>

  </View>
<View style={styles.flexItemRateCont}>
    <Text fontWeight='bold'>{checkK(item.forksCount)}</Text>
    <Text>Forks</Text>
</View>

<View style={styles.flexItemRateCont}>
    <Text fontWeight='bold'>{checkK(item.reviewCount)}</Text>
    <Text >Reviews</Text>
</View>

<View style={styles.flexItemRateCont}>
    <Text fontWeight='bold'>{checkK(item.ratingAverage)}</Text>
    <Text>Rating</Text>
</View>
</View>)
  
}

const RepositoryItem = ({item}) => {
  return (
    <>
    <View style={styles.flexContainer}>
      <CardHeader item={item}/>
      <CardFooter item={item}/>
      </View></>
  );
};

export default RepositoryItem
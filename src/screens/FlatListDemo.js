import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: require('../components/images/hue-forest.jpeg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: require('../components/images/hue-forest.jpeg'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: require('../components/images/stocpill-forest.jpeg'),

  },
];

const Item = ({ title, image}) => (

    

  <View style={styles.item}>

  <View style={{height: 40, width: 40, borderRadius: 40,
   backgroundColor: 'grey', marginEnd: 20}}>
   <Image source={image} style={{height: 40, width: 40, borderRadius: 40}}/>
  </View>
    <Text style={styles.title}  onPress={() => {
    alert({title});
  }}>{title}</Text>
  </View>
);

export default FlatListDemo = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} 
        image = {item.image}
    />
    
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 32,
  },
});


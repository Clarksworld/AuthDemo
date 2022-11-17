import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default NetworkDemo = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
         const response = await fetch('https://reactnative.dev/movies.json');
         const json = await response.json();
         setData(json.movies);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

     useEffect(() => {
        getMovies();
      }, []);

      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList style={{marginTop: 50}}
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text style={{height: 50, marginTop: 10, backgroundColor: 'white'}}>{item.title}, {item.releaseYear}</Text>
              )}
            />
          )}
        </View>
      );
};
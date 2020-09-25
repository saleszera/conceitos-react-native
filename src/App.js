import React, {useState, useEffect} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import api from './services/api';

export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    api.get('repositories').then(repositorie => setRepositories(repositorie.data))    
  }, [])

  async function handleLikeRepository(id) {
    const response = await api.post(`repositories/${id}/like`);

    const repositoryUpdated = repositories.map(repositorie => {
      if(repositorie.id === id){
        return response.data;
      }else{
        return repositorie;
      }
    });

    setRepositories(repositoryUpdated);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={repositories} 
          keyExtractor={repositorie => repositorie.id}
          renderItem={({item: repository}) => (
            <View style={styles.repositoryContainer}>
              <Text style={styles.repository} numberOfLines={1}>{repository.title}</Text>            
              
              <View style={styles.techsContainer}>
                {repository.techs.map(tech => (
                  <Text key={tech} style={styles.tech}>
                    {tech}
                  </Text>
                ))}               
              </View>
    
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repository.id)}
                // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
                testID={`like-button-${repository.id}`}
              >                
                <Icon name="thumb-up" size={30} color="#7159c1" />
              </TouchableOpacity>

              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                  testID={`repository-likes-${repository.id}`}
                >
                  {repository.likes === 0 ? "Sem nenhuma curtida" : repository.likes + " curtidas"}
                </Text>
              </View>    
              
            </View>
          )}
        />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",    
  },
  repositoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
  },
  repository: {
    fontSize: 32,
    color: "#000",   
    fontWeight: "bold",    
  },
  techsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,    
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
    borderRadius: 4,
  },
  likesContainer: {    
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,      
  },

});

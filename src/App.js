import React from 'react'
import { View, Text,FlatList } from 'react-native'
import music_data from "./music-data.json";
import SongCard from './components/SongCard/SongCard';
import Searchbar from "./components/SearchBar"
export default function App() {
  const [list, setList] = useState(music_data);

  const renderSong=({item})=><SongCard song={item}></SongCard>
  const renderSeperator=()=><View style={styles.seperator}></View>
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <View style={styles.container}>
    <Searchbar onSearch={handleSearch} />

    <FlatList keyExtractor={item=>item.id} data={list } renderItem={renderSong} ItemSeparatorComponent={renderSeperator} />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0e",
  }
})

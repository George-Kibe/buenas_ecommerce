import { View, Image, FlatList,
        useWindowDimensions} from 'react-native'
import { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native'

const ImageCarousel = ({images}:{images:[string]}) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0)
  const viewabilityConfigRef={
    viewAreaCoveragePercentThreshold:50,
    minimumViewTime:300,
  }
  const onFlatListUpdate= useCallback(({ viewableItems }) =>{
     if (viewableItems.length > 0 ){
       setActiveIndex(viewableItems[0].index || 0)
  }
    console.warn(viewableItems)
  }, [])
  return (
    <View style={styles.root}>
      <FlatList 
        data={images}
        renderItem={({item}) => (
            <Image style={[styles.image, {width:windowWidth-40}]} 
            source={{uri:item}}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        keyExtractor = {(item, index) => index.toString()}
        
        viewabilityConfig={viewabilityConfigRef}
        onViewableItemsChanged={onFlatListUpdate}
       
      />
      <View style={styles.dotsview}>
        {images.map((image, index) =>(
         <View style={[styles.dot,{
             backgroundColor: index === activeIndex ? "#c9c9c9" : "#ededed"
         }]} 
        />
        ))}
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    root:{

    },
    image:{
        margin:10,
        height:300,
        resizeMode:"contain"
    },
    dotsview:{
        flexDirection:"row",
        justifyContent:"center"
    },
    dot:{
        width:10,
        height:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:"#c9c9c9",
        backgroundColor: "#ededed",
        margin:5
    }
})
export default ImageCarousel
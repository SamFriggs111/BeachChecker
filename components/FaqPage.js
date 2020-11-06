import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image
} from "react-native";
import MapView from "react-native-maps";
import { getDefaultRegion } from ".././api/api";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 8 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`
  };
});

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <View style={styles.innerSlide}>
        <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
      </View>
    </View>
  );
});

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive
            ]}
          />
        );
      })}
    </View>
  );
}

const defaultRegion = getDefaultRegion();
const region = defaultRegion;

const FaqPage = () => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;

    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      console.log("roundIndex2", roundIndex);
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: false,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth
      }),
      []
    )
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <MapView style={styles.mapStyle} region={region}></MapView>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
};

export default FaqPage;

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    alignItems: "center"
  },
  innerSlide: {
    paddingHorizontal: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 20
  },
  slideImage: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.2
  },
  slideTitle: {
    fontSize: 20,
    backgroundColor: "white"
    // paddingHorizontal: 43
  },
  slideSubtitle: {
    fontSize: 14,
    backgroundColor: "white"
    // paddingHorizontal: 53,
    // width: 200,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20
  },
  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row"
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2
  },
  paginationDotActive: {
    backgroundColor: "white"
  },
  paginationDotInactive: {
    backgroundColor: "gray"
  },
  carousel: {
    position: "absolute",
    bottom: 30
  },
  mapStyle: {
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

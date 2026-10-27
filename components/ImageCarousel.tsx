
import { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Image } from "expo-image";
import { colors } from "@/styles/colors";

type Props = {
  images: string[];
  height?: number;
};

export function ImageCarousel({ images, height }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width, height: screenHeight } = useWindowDimensions();
  const imageHeight = height ?? Math.round(screenHeight * 0.45);

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  }

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}-${index}`}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width, height: imageHeight }}
            contentFit="cover"
          />
        )}
      />

      {images.length > 1 && (
        <View style={styles.dots}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    position: "absolute",
    bottom: 32,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: colors.line,
  },
  activeDot: {
    backgroundColor: colors.white,
  },
});

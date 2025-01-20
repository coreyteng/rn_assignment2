import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image } from 'react-native';

export default function Index() {
  const [activeTab, setActiveTab] = useState(1); // 1 for Counter, 2 for Image Grid
  const [count, setCount] = useState(0);

  const renderCounter = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.counterText}>計數器：{count}</Text>
      <Button title="加一" onPress={() => setCount(count + 1)} />
      <View style={styles.buttonSpacing} />
      <Button title="歸零" onPress={() => setCount(0)} />
    </View>
  );

  const renderImageGrid = () => {
    const images = [
      require('../assets/images/redCircle.jpg'),
      require('../assets/images/redCircle1.png'),
      require('../assets/images/redCircle2.avif'),
      require('../assets/images/redCircle.jpg'),
      require('../assets/images/redCircle1.png'),
      require('../assets/images/redCircle2.avif'),
    ];

    return (
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={item} style={styles.imageThumbnail} />
        )}
        contentContainerStyle={styles.gridContainer}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 1 && styles.activeTab]}
          onPress={() => setActiveTab(1)}
        >
          <Text style={styles.tabText}>頁面1：計數器</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 2 && styles.activeTab]}
          onPress={() => setActiveTab(2)}
        >
          <Text style={styles.tabText}>頁面2：圖片Grid</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 1 ? renderCounter() : renderImageGrid()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#aaa',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonSpacing: {
    height: 10,
  },
  gridContainer: {
    alignItems: 'center',
  },
  imageThumbnail: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableHighlight
} from 'react-native';
import { Video } from 'expo-av';
const { height, width } = Dimensions.get('window');
const cellHeight = height * 0.85;
const cellWidth = width;
const viewabilityConfig = {
  itemVisiblePercentThreshold: 80
};
const initialItems = [
  {
    id: 1,
    poster: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg',
    small: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/1.jpeg',
    url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    aspectRatio: 0.834,
    description: 'Trabalhando Muito!!',
    likes: 1002,
    hashtags: '#Work #Dev',
    place: 'Cinema do PrudenShopping',
    authorId: 1
  },
  {
    id: 2,
    poster: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg',
    small: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    aspectRatio: 0.834,
    description: 'Code, code and more code!',
    likes: 1002,
    hashtags: '#Work #Dev',
    place: 'Cinema do PrudenShopping',
    authorId: 2
  },
  {
    id: 3,
    poster: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/3.jpeg',
    small: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/3.jpeg',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aspectRatio: 0.834,
    description: 'Rocketships fly away!',
    likes: 1002,
    hashtags: '#Work #Dev',
    place: 'Cinema do PrudenShopping',
    authorId: 3
  }
];
class Item extends React.PureComponent {

  async play() {
    const status = await this.video.getStatusAsync();
    if (status.isPlaying) {
      return;
    }
    return this.video.playAsync();
  }
  pause() {
    if (this.video) {
      this.video.pauseAsync();
    }
  }
  render() {
    const { id, poster, url } = this.props;
    // console.log('props = ', this.props);
    const uri = url + '?bust=' + id;
    return (
      <View style={styles.cell}>
        <Image
          source={{
            uri: poster,
            cache: 'force-cache'
          }}
          style={[styles.full, styles.poster]}
        />
        <Video
          ref={(ref) => {
            this.video = ref;
          }}
          source={{ uri }}
          shouldPlay={false}
          useNativeControls={true}
          isMuted={false}
          resizeMode="cover"
          style={styles.full}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Item no. {id}</Text>
          <Text style={styles.overlayText}>Overlay text here</Text>
        </View>
      </View>
    );
  }
}
export default class Feed extends React.PureComponent {
  state = {
    items: [],
    play: false
  };
  constructor(props) {
    super(props);
    this.cellRefs = {};
  }
  componentDidMount() {
    this.loadItems();
    setTimeout(this.loadItems, 1000);
    setTimeout(this.loadItems, 1100);
    setTimeout(this.loadItems, 1200);
    setTimeout(this.loadItems, 1300);
  }
  _onViewableItemsChanged = (props) => {
    const changed = props.changed;
    console.log('deeeee -- ', changed);
    changed.forEach((item) => {
      const cell = this.cellRefs[item.key];
      // console.log('CELL: ', cell);
      if (cell) {
        if (item.isViewable) {
          cell.play();
          this.setState({ play: true });
        } else {
          cell.pause();
          this.setState({ play: false });
        }
      }
    });
  };
  actionItem = (props) => {
    const item = props;
    console.log('CHANGED: ', item);
    const cell = this.cellRefs[item.id];
    console.log('CELL =--- ', cell);
    if (cell) {
      if (this.state.play) {
        cell.pause();
        this.setState({ play: false });
        console.log('pause');
      } else if (!this.state.play) {
        cell.play();
        this.setState({ play: true });
        console.log('play');
      }
    }
  };
  loadItems = () => {
    console.log('loading items');
    const start = this.state.items.length;
    const newItems = initialItems.map((item, i) => ({
      ...item,
      id: start + i
    }));
    const items = [...this.state.items, ...newItems];
    this.setState({ items, play: false });
  };
  _renderItem = ({ item }) => {
    // console.log('item --- ', item);
    console.log(this.state.play);
    item.status = this.state.play;
    return (
      <TouchableHighlight onPress={() => this.actionItem(item)}>
        <Item
          ref={(ref) => {
            this.cellRefs[item.id] = ref;
          }}
          {...item}
        />
      </TouchableHighlight>
    );
  };
  render() {
    const { items, play } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={items}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id.toString()}
          onViewableItemsChanged={this._onViewableItemsChanged}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={5}
          getItemLayout={(_data, index) => ({
            length: cellHeight,
            offset: cellHeight * index,
            index
          })}
          viewabilityConfig={viewabilityConfig}
          removeClippedSubviews={true}
          // onClick={() => this.actionItem}
          ListFooterComponent={
            <TouchableOpacity onPress={this.loadItems}>
              <Text style={{ padding: 30 }}>Load more</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  cell: {
    width: cellWidth - 20,
    height: cellHeight - 20,
    backgroundColor: '#eee',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 40
  },
  full: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  poster: {
    resizeMode: 'cover'
  },
  overlayText: {
    color: '#fff'
  }
});
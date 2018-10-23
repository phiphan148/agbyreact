import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Linking} from 'react-native';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.content} data={this.props.screenProps.dataTweet}
                          renderItem={({item}) =>
                              <View style={styles.tweetContent}>
                                  <Text style={styles.section}>{item.text}</Text>
                                  {
                                      item.photo_link_text !== null
                                          ?
                                          <View>
                                              <Image style={styles.tweetImg}
                                                     source={{uri: item.photo_link_text}}></Image>
                                              <View style={styles.linkTxt}><Text
                                                  style={{color: '#fff', paddingLeft: 5, fontSize: 8}} onPress={() => {
                                                  Linking.openURL(item.link_text)
                                              }}>{item.link_text}</Text></View>
                                          </View>
                                          :
                                          <Text style={{display: 'none'}}></Text>
                                  }
                                  <Text style={[styles.titleColor, styles.section]}>{item.created_at}</Text>
                              </View>
                          }
                          keyExtractor={(item, index) => index.toString()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9fb',
        flex: 1
    },
    content: {
        flex: 1,
        paddingTop: 5
    },
    tweetContent: {
        paddingTop: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#B2b2b2'
    },
    titleColor: {
        color: '#0B91C2'
    },
    section: {
        paddingTop: 2,
        paddingBottom: 5,
    },
    tweetImg: {
        width: 125,
        height: 50,
        paddingBottom: 5,
        position: 'relative'
    },
    linkTxt: {
        position: 'absolute',
        top: 31,
        left: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: 125,
        paddingTop: 4,
        paddingBottom: 4
    }
});

export default Home;
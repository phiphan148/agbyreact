import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Linking, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const commentIcon = (<Icon name="comments" size={12} color="#B2b2b2"></Icon>);
const returnIcon = (<Icon name="undo" size={12} color="#B2b2b2"></Icon>);
const retweetIcon = (<Icon name="retweet" size={12} color="#B2b2b2"></Icon>);
const heartIcon = (<Icon name="heart" size={12} color="#B2b2b2"></Icon>);

class Tweets extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
            <View style={styles.container}>
                <FlatList style={styles.content} data={this.props.screenProps.dataTweet}
                          renderItem={({item}) =>
                              <View style={styles.tweetContent}>
                                  {
                                      itemId == item.id
                                          ?
                                          <View>
                                              <Text onPress={() => this.props.navigation.navigate('Home')}
                                                    style={styles.titleColor}>{returnIcon} Back</Text>
                                              <Text style={styles.section}>{item.text}</Text>
                                              {
                                                  item.photo_link_text !== null
                                                      ?
                                                      <View>
                                                          <Image style={styles.tweetImg}
                                                                 source={{uri: item.photo_link_text}}></Image>
                                                          <View style={styles.linkTxt}><Text
                                                              style={{color: '#fff', paddingLeft: 5, fontSize: 8}}
                                                              onPress={() => {
                                                                  Linking.openURL(item.link_text)
                                                              }}>{item.link_text}</Text></View>
                                                      </View>
                                                      :
                                                      <Text style={{display: 'none'}}></Text>
                                              }
                                              <Text style={[styles.titleColor, styles.section]}>{item.created_at}</Text>
                                              <View style={[styles.bannerContent]}>
                                                  <Text
                                                      onPress={() => this.props.navigation.navigate('Tweets', {itemId: item.id})}>{commentIcon} Comment</Text>
                                                  <Text
                                                      onPress={() => this.props.navigation.navigate('Tweets')}>{retweetIcon} {item.retweet_count}</Text>
                                                  <Text
                                                      onPress={() => this.props.navigation.navigate('Tweets')}>{heartIcon} {item.favorite_count}</Text>
                                              </View>
                                              {
                                                  item.retweeted_status !== null
                                                      ?
                                                      <FlatList style={styles.content} data={item.retweeted_status}
                                                                renderItem={({item}) =>
                                                                    <View style={styles.bannerContent}>
                                                                        <Image style={styles.userCommentImg}
                                                                               source={{uri: item.user.profile_image_url}}></Image>
                                                                        <View style={{marginLeft: 5, width: wp('70%')}}>
                                                                            <Text>{item.text}</Text>
                                                                            {
                                                                                item.media_image_retweeted !== null
                                                                                    ?
                                                                                    <FlatList style={styles.imgContent} data={item.media_image_retweeted}
                                                                                              renderItem={({item}) =>
                                                                                                  <Image style={{width: 80, height: 100, marginRight: 10, marginBottom: 3}}
                                                                                                         source={{uri: item.src}}></Image>
                                                                                              }
                                                                                              keyExtractor={(item, index) => index.toString()}/>
                                                                                    :
                                                                                    <Text style={{display: 'none'}}></Text>
                                                                            }
                                                                            <Text style={styles.titleColor}>{item.created_at}</Text>
                                                                            <View style={styles.socialUser}>
                                                                                <Text>{commentIcon} Comment</Text>
                                                                                <Text>{retweetIcon} {item.retweet_count}</Text>
                                                                                <Text>{heartIcon} {item.favorite_count}</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                }
                                                                keyExtractor={(item, index) => index.toString()}/>
                                                      :
                                                      <Text style={{display: 'none'}}></Text>
                                              }
                                          </View>
                                          :
                                          <Text style={{display: 'none'}}></Text>
                                  }
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
        paddingLeft: 10,
        paddingRight: 10,
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
    },
    bannerContent: {
        width: wp('85%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 3,
        marginLeft: 'auto',
    },
    userCommentContent: {
        width: wp('100%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 3,
        marginLeft: 'auto',
    },
    userCommentImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 3
    },
    socialUser: {
        width: wp('65%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgContent: {
        width: wp('50%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    }
});

export default Tweets;
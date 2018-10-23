import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SectionList} from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://api.myjson.com/bins/10orsc')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataInfo: responseJson.AG_info,
                    dataTweet: responseJson.AG_timeline,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Header name={this.state.dataInfo.name}/>
                <Banner urlBanner={this.state.dataInfo.profile_banner_url}
                        urlProfile={this.state.dataInfo.profile_image_url}
                        twitter={this.state.dataInfo.tweets_count}
                        favorite={this.state.dataInfo.likes_count}
                        following={this.state.dataInfo.followings_count}
                        followers={this.state.dataInfo.followers_count}/>
                <FlatList style={styles.content} data={this.state.dataTweet}
                          renderItem={({item}) =>
                              <View style={styles.tweetContent}>
                                  <Text style={styles.section}>{item.text}</Text>
                                  {
                                      item.photo_link_text !== null
                                          ?
                                          <Image style={{width: 125, height: 50, paddingTop: 5}} source={{uri: item.photo_link_text}}></Image>
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
        backgroundColor: '#F5FCFF',
        flex: 1
    },
    content: {
        flex: 1,
        paddingTop: 5
    },
    tweetContent: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#B2b2b2'
    },
    titleColor: {
        color: '#0B91C2'
    },
    section: {
        paddingTop: 5,
    }
});

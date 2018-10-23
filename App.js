import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Image, SectionList, Linking} from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';
import AppNavigator from './AppNavigator';

type
Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://api.myjson.com/bins/i1r5g')
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
                <Banner  urlBanner={this.state.dataInfo.profile_banner_url}
                         urlProfile={this.state.dataInfo.profile_image_url}
                         twitter={this.state.dataInfo.tweets_count}
                         favorite={this.state.dataInfo.likes_count}
                         following={this.state.dataInfo.followings_count}
                         followers={this.state.dataInfo.followers_count}/>
                <AppNavigator style={{backgroundColor: '#000'}} screenProps={{ dataTweet: this.state.dataTweet }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fcff',
        flex: 1
    }
});

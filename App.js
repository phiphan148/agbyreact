import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://api.myjson.com/bins/pi7ck')
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
                <Banner urlBanner={this.state.dataInfo.profile_banner_url} urlProfile={this.state.dataInfo.profile_image_url}/>
                <FlatList style={styles.content} data={this.state.dataTweet}
                renderItem={({item}) => <Text>{item.text}, {item.created_at}</Text>}
                          keyExtractor = {(item, index) => index.toString() }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    content: {
        padding: 10
    }
});

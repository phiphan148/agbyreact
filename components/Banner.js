import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.banner}>
                <Image style={styles.bannerImg} source={{uri: this.props.urlBanner}}/>
                <Image style={styles.profileImg} source={{uri: this.props.urlProfile}}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#fff',
        minHeight: hp('32%'),
    },
    bannerImg: {
        height: hp('25%'),
        width: wp('100%'),
        position: 'relative',
    },
    profileImg: {
        height: wp('20%'),
        width: wp('20%'),
        position: 'absolute',
        top: hp('18%'),
        left: wp('3%'),
        borderRadius: wp('10%'),
    },
});

export default Banner;
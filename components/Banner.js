import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const twitterIcon = (<Icon name="twitter-square" size={10} color="#0B91C2"></Icon>);
const heartIcon = (<Icon name="heart" size={10} color="#0B91C2"></Icon>);

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.banner}>
                <Image style={styles.bannerImg} source={{uri: this.props.urlBanner}}/>
                <Image style={styles.profileImg} source={{uri: this.props.urlProfile}}/>
                <View style={styles.wrapFlex}>
                    <View style={styles.emptySpan}></View>
                    <Text style={[styles.titleColor, styles.wrapFlexContent]}>Advanced Blockchain AG</Text>
                </View>
                <View style={[styles.bannerContent]}>
                    <View style={{marginTop: 5}}>
                        <Text>{twitterIcon} {this.props.twitter}</Text>
                        <Text>
                            <Text style={[styles.titleColor]}>Following </Text>
                            {this.props.following}
                        </Text>
                    </View>
                    <View style={{marginTop: 3}}>
                        <Text>{heartIcon} {this.props.favorite}</Text>
                        <Text>
                            <Text style={styles.titleColor}>Followers </Text>
                            {this.props.followers}
                        </Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#fff',
        paddingBottom: 5,
    },
    bannerImg: {
        height: 130,
        width: wp('100%'),
        position: 'relative',
    },
    profileImg: {
        height: 70,
        width: 70,
        position: 'absolute',
        top: 90,
        left: wp('3%'),
        borderRadius: 35,
    },
    titleColor: {
        color: '#0B91C2'
    },
    wrapFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },
    emptySpan: {
        width: wp('20%'),
    },
    wrapFlexContent: {
        width: wp('72%'),
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
    },
    bannerContent: {
        width: wp('85%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
    }
});

export default Banner;
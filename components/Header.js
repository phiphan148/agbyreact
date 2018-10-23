import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const twitterIcon = (
    <Icon name="twitter" size={15} color="#0B91C2">
    </Icon>);

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.titleColor}>{this.props.name}</Text>
                <Text style={styles.titleColor}>{twitterIcon} Follow us</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: '#b2b2b2',
        padding: 10,
    },
    titleColor: {
        color: '#0B91C2'
    }
});

export default Header;
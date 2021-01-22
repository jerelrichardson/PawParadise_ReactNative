import React, { Component } from 'react';
import { FlatList, Text, ScrollView } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        offers: state.offers
    };
}

function Mission({item}) {
    //if (item) {
        return (
            <Card title={'Our Mission'}>
                <Text style={{margin: 10}}>
                    {'We present a curated database of the best campsites in the vast woods and backcountry ' +
                     'of the World Wide Web Wilderness. We increase access to adventure for the public while ' +
                     'promoting safe and respectful use of resources. The expert wilderness trekkers on our ' +
                     'staff personally verify each campsite to make sure that they are up to our standards. ' +
                     'We also present a platform for campers to share reviews on campsites they have visited ' +
                     'with each other.'}
                </Text>
            </Card>
        );
    //}
    //return <View />
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderOffer = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    // leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.offers.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    {/* <Card
                        title='Offers'>
                        <Loading />
                    </Card> */}
                </ScrollView>
            );
        }
        if (this.props.offers.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <Mission />
                        {/* <Card
                            title="Offers Error">
                            <Text>{this.props.offers.errMess}</Text>
                        </Card> */}
                    </Animatable.View>
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                    {/* <Card
                        title="Community-Offers">
                        <FlatList
                            data={this.props.offers.offers}
                            renderItem={renderOffer}
                            keyExtractor={item=>item.id.toString()}
                        />
                    </Card> */}
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);


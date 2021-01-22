import React, { Component } from 'react';
import { FlatList, Text, ScrollView } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import Accordion from './AccordionComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        offers: state.offers
    };
}

function Mission({item}) {
        return (
            // <Card title={'Offers'}>
            <Card>
                <Text style={{margin: 10}}>
                    {'Offers explaination or photo or featured offers.'}
                </Text>
            </Card>
        );
}

class Offerings extends Component {

    static navigationOptions = {
        title: 'Offers'
    }

    render() {
        const renderOffer = ({item}) => {
            return (
                <Accordion
                    title={item.title}
                    data={item.description}
                    // subtitle={item.description}
                    // leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.offers.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Offers'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.offers.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <Mission />
                        <Card
                            title="Offers Error">
                            <Text>{this.props.offers.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                    <Card>
                        {/* // title="Community-Offers"> */}
                        <FlatList
                            data={this.props.offers.offers}
                            renderItem={renderOffer}
                            keyExtractor={item=>item.id.toString()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Offerings);


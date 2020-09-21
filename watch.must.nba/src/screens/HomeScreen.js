import React from 'react';
import { ScrollView, Text } from 'react-native';

import GamesBlock from '../components/GamesBlock/GamesBlock';

const HomeScreen = () => {

    return (
        <ScrollView style={{paddingTop: 20, paddingBottom: 20}} > 
            <GamesBlock title="Today's games" />
            <GamesBlock title="Week's games" />
        </ScrollView>
    );
};

export default HomeScreen;
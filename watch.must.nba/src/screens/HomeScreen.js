import React from 'react';
import { View, Text } from 'react-native';

import GamesBlock from '../components/GamesBlock/GamesBlock';

const HomeScreen = () => {

    return (
        <View style={{paddingTop: 20, paddingBottom: 20}}> 
            <GamesBlock title="Today's games" />
        </View>
    );
};

export default HomeScreen;
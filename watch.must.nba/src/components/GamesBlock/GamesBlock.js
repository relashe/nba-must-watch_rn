import React from 'react';
import { View, Text } from 'react-native';

import GamePreview from '../GamePreview/GamePreview';


const GamesBlock = ({title, games}) => {
    return (
        <View>
            <Text
                style={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 20
                }}
            >
                {title}
            </Text>
            <View>
                <GamePreview />
                <GamePreview />
                <GamePreview />
            </View>
        </View>
    );

};

export default GamesBlock;
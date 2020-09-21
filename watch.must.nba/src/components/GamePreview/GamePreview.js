import React from 'react';
import { View, Text } from 'react-native';


const GamePreview = ({teamHome = "Team A", teamAway = "Team B", time = "12:00pm", location = "Staples Centre", votes = 11340}) => {
    return (
        <View
            style={{
                // flex: 1,
                // flexDirection: 'column',
                // flexWrap: 'nowrap',
                // alignContent: 'stretch',
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 40,
                textAlign: "center",
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: '#ECECEC',
                borderBottomWidth: 2
            }}
        >
            <View 
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    paddingTop: 30,
                    paddingBottom: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
                >
                <View>
                    <Text>{teamAway}</Text>
                </View>
                <View>
                    <Text>{time}</Text>
                    <Text>{location}</Text>
                </View>
                <View>
                    <Text>{teamHome}</Text>
                </View>
            </View>
            <View 
                style={{
                    borderTopColor: '#ECECEC',
                    borderTopWidth: 2,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}
            >
                <View>
                    <Text>X,XXX likes</Text>
                </View>
                <View>
                    <Text>Bookmark</Text>
                </View>
                <View>
                    <Text>Share</Text>
                </View>
            </View>
        </View>
    );

};

export default GamePreview;
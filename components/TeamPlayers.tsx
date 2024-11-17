import React, { useEffect, useState } from "react"
import { View, Image, Text, FlatList } from "react-native"
import { TeamPlayer } from "../config/types";
import { fetchTeamPlayers } from "../utils/apiFunction";
import { StyleSheet } from "react-native";

interface TeamPlayersProps {
    teamName: string
}

export const TeamPlayers: React.FC<TeamPlayersProps> = ({ teamName }) => {
    const [teamPlayers, setTeamPlayers] = useState<TeamPlayer[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        fetchTeamPlayers(controller.signal, teamName, setTeamPlayers);

        return () => {
            controller.abort();
        };
    }, [teamName]);

    const renderItem = ({ item }: { item: TeamPlayer }) => {
        return (
            <View className="flex flex-col items-center justify-center gap-2 size-20">
                {item?.strThumb ? (
                    <Image
                        className="w-20 h-20 mt-5 rounded-full"
                        source={{ uri: item.strThumb }}
                        resizeMode="contain"
                    />
                ) : null}
                <Text className="text-red font bold">{item.strPlayer}</Text>
            </View>
        );
    };

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={teamPlayers}
            renderItem={renderItem}
            keyExtractor={(item) => item.idPlayer.toString()}
            horizontal={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
});


import React, { useEffect, useState } from "react"
import { ScrollView, View, Image, Text } from "react-native"
import { Venue } from "../config/types";
import { fetchVenue } from "../utils/apiFunction";
import { StyleSheet } from "react-native";

interface VenueProps {
    venueId: string
}

export const Venues: React.FC<VenueProps> = ({ venueId }) => {
    const [venue, setVenue] = useState<Venue>();

    useEffect(() => {
        const controller = new AbortController();
        fetchVenue(venueId, controller.signal, setVenue);

        return () => {
            controller.abort();
        };
    }, [venueId]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {venue && Object.keys(venue).length > 0 ? (
                <View className="flex flex-col items-center justify-center gap-2" >
                    <Image
                        source={{ uri: venue?.strFanart1 }}
                        className="h-40 mb-3 w-60"
                        resizeMode="contain"
                    />
                    <Text>{venue.idVenue}</Text>
                </View>
            ) : (
                null
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        rowGap: 40,
        columnGap: 4
    },
});

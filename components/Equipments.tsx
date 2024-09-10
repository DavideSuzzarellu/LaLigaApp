import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Equipments } from "../config/types";
import { getYearFromDateString } from "../utils/utilsFunctions";
import { fetchEquipment } from "../utils/apiFunction";

interface EquipmentProps {
    teamId: string;
}

export const Equipment: React.FC<EquipmentProps> = ({ teamId }) => {
    const [equipments, setEquipments] = useState<Equipments[]>([]);

    useEffect(() => {
        fetchEquipment(teamId, setEquipments);
    }, [teamId]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {equipments ? (
                equipments?.map((equipment) => (
                    <View className="flex flex-col items-center justify-center gap-2" key={equipment.idEquipment}>
                        <Image
                            source={{ uri: equipment.strEquipment }}
                            className="w-40 h-40 mb-3"
                        />
                        <Text>{getYearFromDateString(equipment.date)}</Text>
                    </View>
                ))
            ) : (
                <Text>Cargando equipo...</Text>
            )}
        </ScrollView>
    );
};

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

import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

export const FacebookLogo: React.FC = () => {
    return <FontAwesome name="facebook-square" size={40} color="#3b5998" />;
};

export const InstagramLogo: React.FC = () => {
    return <Fontisto name="instagram" size={36} color="#C13584" />;
};

export const WebLogo: React.FC = () => {
    return <MaterialCommunityIcons name="web" size={45} color="blue" />;
};

export const XLogo: React.FC = () => {
    return <FontAwesome6 name="x-twitter" size={40} color="black" />;
};

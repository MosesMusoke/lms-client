import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const onboardingStyles = StyleSheet.create({
    first_container : {
        alignItems: "center",
        marginTop: 50,
    },
    logo : {
        width: wp("23%"),
        height: wp("10%"),
    },
    titleWrapper: {
        flexDirection: "row",
    },
    titleTextShape1: {
        position: "absolute",
        left: 28,
        top: -20,
    },
    titleText: {
        fontSize: hp("4%"),
        textAlign: "center",
    },
    titleTextShape2: {
        position: "absolute",
        left: 40,
        top: -20,
    },
    titleTextShape3: {
        position: "absolute",
        left: 60,
        top: -20,
    }
})

export default onboardingStyles;


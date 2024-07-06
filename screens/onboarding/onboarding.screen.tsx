import { View, Text, Image } from 'react-native'
import React from 'react'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { LinearGradient } from 'expo-linear-gradient'
import onboardingStyles from '@/styles/onboarding/onboardingStyles'

export default function OnboardingScreen() {

    let [fontsloaded, fontsError] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    })

    if (!fontsloaded && !fontsError) {
        return null
    }

  return (

    <LinearGradient colors={["#e5ecf9", "f6f7f9"]} style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>

        <View style={onboardingStyles.first_container}>
            <Text style={[onboardingStyles.titleText, {fontFamily: "Montserrat_700Bold"}]} >OnboardingScreen</Text>
            
            <Image style={onboardingStyles.logo} source={require('@/assets/images/seroma.jpeg')} />

            <Image source={require('@/assets/images/splash.png')} />
        </View>

        <View style={onboardingStyles.titleWrapper} >
            <Image style={onboardingStyles.titleTextShape1}  source={require("@/assets/images/icon.png")} />

            <Text style={onboardingStyles.titleText} >
                Start Learning with
            </Text>

            <Image style={onboardingStyles.titleTextShape2} source={require("@/assets/images/finfort.png")} />
        </View>

        <View>

            <Image style={onboardingStyles.titleTextShape3} />

            <Text style={onboardingStyles.titleText}>
                EducationMadeEasy
            </Text>
        </View>

        <View>
            <Text style={onboardingStyles.titleText}>
                Explore a Variety of Interactive Courses
            </Text>
        </View>

    </LinearGradient>

  )
}
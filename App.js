import Color from 'color'
import React from 'react'
import { Home } from './src/screens/home'
import { Info } from './src/screens/info'
import { News } from './src/screens/news'
import { StatusBar } from 'expo-status-bar'
import { theme } from './src/utilities/theme'
import { StoreContextProvider } from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const stackOptions = {
	headerTransparent: true,
	obscureBackground: true,
	headerBlurEffect: 'dark',
	headerTitleAlign: 'center',
	headerShadowVisible: false,
	headerTintColor: theme.colors.white,
	headerStyle: {
		backgroundColor: Color(theme.colors.sacramentoGreen).darken(0.2).rgb().toString(),
	},
}

export default function App() {
	return (
		<StoreContextProvider>
			<StatusBar backgroundColor='transparent' style='light' translucent />
			<NavigationContainer>
				<Stack.Navigator screenOptions={stackOptions}>
					<Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
					<Stack.Screen name='Info' component={Info}/>
					<Stack.Screen name='News' component={News}/>
				</Stack.Navigator>
			</NavigationContainer>
		</StoreContextProvider>
	)
}

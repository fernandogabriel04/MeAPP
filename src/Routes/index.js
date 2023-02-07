import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Curriculum from "../pages/Curriculum";
import TheEnd from "../pages/TheEnd";

const Stack= createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={Home}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="About"
            component={About}
            />

            <Stack.Screen
            name="Contact"
            component={Contact}
            />

            <Stack.Screen
            name="Curriculum"
            component={Curriculum}
            />

            <Stack.Screen
            name="TheEnd"
            component={TheEnd}
            />

        </Stack.Navigator>


    )
}
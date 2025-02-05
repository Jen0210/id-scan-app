import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import StudentLoginScreen from "./src/screens/StudentLoginScreen";
import ProfessorLoginScreen from "./src/screens/ProfessorLoginScreen";
import StudentRegisterScreen from "./src/screens/StudentRegisterScreen";
import ProfessorRegisterScreen from "./src/screens/ProfessorRegisterScreen";
import { RootStackParamList } from "./src/types/navigationTypes";
import SQLite from "react-native-sqlite-storage";

const Stack = createStackNavigator<RootStackParamList>();

// useEffect(() => {
//   //function for creating the nfc token from database
//   const createNfcTokenFromDatabase = () => {
//     SQLite.openDatabase(
//       { name: "databaseName.db", location: "default" },
//       //searching the database to get the user data
//       (db) => {
//         db.transaction((tx) => {
//           tx.executeSql(
//             "SELECT user_data From nfc_data",
//             [],
//             (_, { rows }) => {
//               const { _array } = rows;
//               _array.forEach((row: { user_data: string }) => {
//                 const { user_data } = row;
//                 createNfcToken(user_data);
//               });
//             },
//             (error) => {
//               console.error("Cannot connect to database", error);
//             }
//           );
//         });
//         const token = Math.random().toString(36).substring(2);
//         return token;
//       },
//       (error) => {
//         console.error("Cannot open database", error);
//       }
//     );
//   };
//   // nfc creation
//   createNfcTokenFromDatabase();
// }, []);

// creating nfc token
const createNfcToken = (userData: string) => {
  // to do : nfc creator
};
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
        <Stack.Screen name="ProfessorLogin" component={ProfessorLoginScreen} />
        <Stack.Screen
          name="StudentRegisterScreen"
          component={StudentRegisterScreen}
        />
        <Stack.Screen
          name="ProfessorRegisterScreen"
          component={ProfessorRegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

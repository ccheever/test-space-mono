import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
} from "@expo-google-fonts/space-mono";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default () => {
  let [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_400Regular_Italic,
    SpaceMono_700Bold,
    SpaceMono_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "SpaceMono_400Regular",
          }}
        >
          Space Mono Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "SpaceMono_400Regular_Italic",
          }}
        >
          Space Mono Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "SpaceMono_700Bold",
          }}
        >
          Space Mono Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "SpaceMono_700Bold_Italic",
          }}
        >
          Space Mono Bold Italic
        </Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

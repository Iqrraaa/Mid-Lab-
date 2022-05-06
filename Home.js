import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Switch,Alert } from "react-native";
import { Calendar } from "react-native-calendars";

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <Switch
        trackColor={{ false: "silver", true: "plum" }}
        thumbColor={isEnabled ? "plum" : "plum"}
        ios_backgroundColor="white"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-0" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.containerCalendar}>
          <Calendar
            style={styles.MyCalendar}
            current={date}
            maxDate={date}
            hideExtraDays={true}
            firstDay={1}
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            onPressArrowRight={(addMonth) => addMonth()}
            enableSwipeMonths={true}
            onDayPress = {(day) => {
              console.log(day.dateString.toString());
            }}
          />
        </View>
        <View style={styles.PrayersTabs}>

          <View style={styles.PrayersTab}>
              <Text style={styles.PrayerText}>
                Fajar
              </Text>
            <Pressable style={styles.selectButton}>
              <SwitchButton />
            </Pressable>
          </View>

          <View style={styles.PrayersTab}>
              <Text style={styles.PrayerText}>
                Zuhar
              </Text>
            <Pressable style={styles.selectButton}>
              <SwitchButton />
            </Pressable>
          </View>

          <View style={styles.PrayersTab}>
              <Text style={styles.PrayerText}>
                Asar
              </Text>
            <Pressable style={styles.selectButton}>
              <SwitchButton />
            </Pressable>
          </View>

          <View style={styles.PrayersTab}>
              <Text style={styles.PrayerText}>
                Maghrib
              </Text>
            <Pressable style={styles.selectButton}>
              <SwitchButton />
            </Pressable>
          </View>

          <View style={styles.PrayersTab}>
              <Text style={styles.PrayerText}>
                Eisha
              </Text>
            <Pressable style={styles.selectButton}>
              <SwitchButton />
            </Pressable>
          </View>

        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "whitesmoke",
  },
  containerContent: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 100,
  },
  containerCalendar: {
    padding: 1,
    borderColor: "black",
    borderWidth: 1,
  },
  MyCalendar: {
    justifyContent: "center",
  },
  PrayersTabs: {
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  PrayersTab: {
    flex: 1,
    marginTop: 6,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderColor : 'black',
    borderWidth: 1,
    borderRadius: 4,
  },
  PrayerText: {
    fontSize: 15,
    color: "black",
    justifyContent: 'center',
    marginLeft: 40,
    alignItems: "center",
    position : 'absolute',
  },
  selectButton: {
    justifyContent: 'center',
    alignItems: "center",
    flex : 1,
    flexDirection: "row",
    left : 2,
},
});
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

import { ButtonGroup } from "./ButtonGroup";

import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";

const config = {
  hasXAxisBackgroundLines: true,
  xAxisLabelStyle: {
    position: 'right',
    
  }
};


const Reports = () => {
  const printButtonLabel = (item) => {
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ContentBox}>
        <View style={styles.RecordButtons}>
          <ButtonGroup
            buttons={["Daily", "Weekly", "Monthly", "Date Range"]}
            doSomethingAfterClick={printButtonLabel}
          />
        </View>
        <View style={styles.ChartContainer}>
          <Text style={styles.SubHeading}>Weekly Record</Text>
          <VerticalBarGraph
            data={[3, 4, 1, 4, 3, 1, 5]}
            labels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
            width={300}
            height={270}
            barColor="plum"
            barRadius={3}
            barWidthPercentage={0.5}
            baseConfig={config}
            style={styles.chart}
          />
        </View>
      </View>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
  },
  ChartContainer: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20,
    opacity: 0.9,
    borderRadius: 10,
  },
  chart: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  ContentBox: {
    marginTop: 50,
    marginBottom: 10,
  },
  SubHeading: {
    fontSize: 25,
    fontStyle: "normal",
    color: "plum",
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    fontWeight: "400",
  },
  RecordButtons: {
    marginLeft: 40,
    marginRight: 40,
  },
});
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {PageHeader, Gap, PlainText} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <PageHeader type="withPhoto" />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
      <Gap height={24} />
      <PlainText label="Your Balance"/>
      {/* <Gap height={12} /> */}
      <Text style={styles.textStyle2}>
        Rp. 10.000.000
      </Text>
      <Gap height={24} />

      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  textStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "600",
    fontSize: 24,
    color: "#000000",
    textAlign: "center",
    lineHeight: 36,
  },
});
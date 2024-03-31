/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {PageHeader, Gap, Button} from '../../components';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withPhoto" />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
      <Gap height={24} />
      <Text style={styles.textStyle}>
        Your Balance
      </Text>
      <Gap height={5} />
      <Text style={styles.textStyle2}>
        Rp. 10.000.000
      </Text>
      <Gap height={23} />
      <View style={styles.line}></View>
      <Gap height={23} />
      <Text style={styles.textStyle3}>
        Cash On Hand    Rp. 4.000.000
      </Text>
      <Gap height={15} />
      <Text style={styles.textStyle3}>
        Cash On Bank     Rp. 6.000.000
      </Text>
      <Gap height={44} />
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
      <Gap height={14} />
      <Text style={styles.textStyle}>
        Add Transaction
      </Text>
      <Gap height={9} />
      <Button label="Cash On Hand" onSubmit={() => navigation.navigate('CashOnHand')} />
        <Gap height={12} />
        <Button label="Cash On Bank" onSubmit={() => navigation.navigate('CashOnBank')} />
        <Gap height={12} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  textStyle3: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "400",
    fontSize: 14,
    color: "#000000",
    lineHeight: 21,
  },
  line: {
    borderWidth: 1,

  },
});
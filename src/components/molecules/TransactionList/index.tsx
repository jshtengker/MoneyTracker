/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const TransactionList = ({label, date, description, amount}) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.border}>
        <View>
          <Text style={[styles.transactionDate, {color: 'grey'}]}>{date}</Text>
          <Text style={[styles.transactionDate, {color: 'black'}]}>
            {description}
          </Text>
        </View>
        <View>
          <Text
            style={[
              //   styles.transactionAmount,
              amount.startsWith('+') ? styles.plusAmount : styles.minAmount,
            ]}>
            {amount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  border: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 80,
    marginTop: 35,
    marginBottom: -20,
    marginHorizontal: 5,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionItem: {
    marginBottom: 15,
  },
  transactionDate: {
    fontSize: 14,
    marginBottom: 2,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 15,
  },
  plusAmount: {
    color: '#02CF8E',
    fontFamily: 'Poppins-Medium',
    paddingRight: 15,
  },
  minAmount: {
    color: '#D9435E',
    fontFamily: 'Poppins-Medium',
    paddingRight: 15,
  },
});
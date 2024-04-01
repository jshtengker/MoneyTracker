/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Button, Gap, PageHeader, TextInput, TransactionList} from '../../components';



const CashOnBank = ({navigation}) => {

  const Transactions = [
    {
      date: '17 April 2020',
      description: 'Water, Food',
      amount: '-Rp. 300.000',
    },
    {
      date: '18 April 2020',
      description: 'Office supplies',
      amount: '-Rp. 300.000',
    },
    {
      date: '19 April 2020',
      description: 'Top Up',
      amount: '+Rp. 300.000',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Bank"
        backButton
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <Gap height={24} />
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={24} />
        <TextInput
          label="Type"
          placeholder="Debit / Credit"
        />
        <Gap height={24} />
        <Button
          label="Save"
        />
        <Gap height={54} />
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
      <Gap height={14} />
        <Text style={styles.textStyle}>
            Last 3 Transactions
        </Text>
      <ScrollView>
          {Transactions.map((transaction, index) => (
            <TransactionList
              key={index}
              date={transaction.date}
              description={transaction.description}
              amount={transaction.amount}
            />
          ))}
           <Gap height={40} />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Medium',
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 24,
        color: "#000000"
      },
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
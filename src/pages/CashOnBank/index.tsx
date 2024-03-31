/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';



const CashOnBank = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Hand"
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
        <Gap height={24} />
      </View>
      
    </ScrollView>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Medium',
        fontWeight: "500",
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
  profilePicture: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePictureContainer: {
    alignItems: 'center',
  },
  addPhotoContainer: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
});
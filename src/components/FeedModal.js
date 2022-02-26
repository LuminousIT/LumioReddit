import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBox, faFire} from '@fortawesome/free-solid-svg-icons';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons';

const options = [
  {id: 0, title: 'Top', icon: faBox},
  {id: 1, title: 'New', icon: faNewspaper},
  {id: 2, title: 'Hot', icon: faFire},
];
const FeedModal = ({open, handleClose, activeFeed, handleSelect}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={() => handleClose()}>
      <View style={styles.centeredView} onPress={handleClose}>
        <View style={styles.modalView}>
          {options.map((item, index) => (
            <TouchableOpacity
              style={
                ([styles.optionItem],
                activeFeed == item.title ? {backgroundColor: '#c4c4c4'} : {})
              }
              key={index}
              onPress={() => handleSelect(item.title)}>
              <View style={styles.listItem}>
                <FontAwesomeIcon icon={item.icon} />
                <Text style={styles.text}> {item.title} </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    marginTop: 22,
    marginHorizontal: 10,
    borderWidth: 1,
    position: 'absolute',
    top: 120,
    left: 0,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 10,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionItem: {
    // padding: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: '#000',
  },
});

export default FeedModal;

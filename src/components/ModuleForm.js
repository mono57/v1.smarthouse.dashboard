import React, { Component } from "react";
import { Modal, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Text, Button, Header } from "react-native-elements";

class ModuleFormScreen extends Component {
  state = {
    modalVisible: false
  };

  // setModalVisible = visibility => {
  //   this.setState({modalVisible: visibility})
  // }

  render() {
    const { showModal, isVisible, dismissModal } = this.props;
    return (
      <Modal
        animationType="slide"
        visible={isVisible}
        onShow={showModal}
        onDismiss={dismissModal}
      >
        <Header
          style={{padding:0}} 
          leftComponent={{ icon: "arrow-back", color: 'white' }}
          rightComponent={{text:'cancel', color: 'white'}}
        ></Header>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View style={styles.container}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              labore eos, hic nisi dolorum deleniti error quia optio voluptatem
              eveniet.
            </Text>
            <Button title="close modal" onPress={dismissModal} />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

export default ModuleFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

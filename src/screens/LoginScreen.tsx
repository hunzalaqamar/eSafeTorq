import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LoginScreenProps} from '../constants/types'; // Import the types from the types file

const {height} = Dimensions.get('window');

export default function LoginScreen({navigation}: LoginScreenProps) {
  const handleLogin = () => {
    // Navigate to the Dashboard screen
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      {/* Dismiss keyboard when tapping outside of input */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topSection}>
            <Image
              source={{uri: 'https://your-logo-url.com'}} // Replace with actual logo URL
              style={styles.logo}
            />
          </View>

          <LinearGradient
            colors={['#0077b6', '#00b4d8']}
            style={styles.bottomSection}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}>
            <Text style={styles.title}>Connect to e-SafeTorq™</Text>

            <TextInput
              placeholder="Username"
              style={styles.input}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
            />

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              returnKeyType="done"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>e-SafeTorq™</Text>
          </LinearGradient>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topSection: {
    height: height * 0.4, // 40% of the screen height
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bottomSection: {
    flex: 1, // Remaining 60% of the screen
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00b7a1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  footer: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
});

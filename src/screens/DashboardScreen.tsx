import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LoginScreenProps} from '../constants/types';

const {height} = Dimensions.get('window');

export default function DashboardScreen({navigation}: LoginScreenProps) {
  const handleLogout = () => {
    navigation.navigate('Login'); // Navigate back to the login screen
  };

  const handleConnect = () => {
    navigation.navigate('Connect'); // Navigate to the Connection Screen
  };

  const handleSavedFiles = () => {
    navigation.navigate('SavedFiles'); // Navigate to the Saved Files Screen
  };

  return (
    <View style={styles.container}>
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
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.gridContainer}>
            {/* CONNECT button with handler */}
            <TouchableOpacity style={styles.card} onPress={handleConnect}>
              <Image
                source={{uri: 'https://your-icon-url.com'}} // Replace with actual icon URL
                style={styles.icon}
              />
              <Text style={styles.cardText}>CONNECT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={handleSavedFiles}>
              <Image
                source={{uri: 'https://your-icon-url.com'}}
                style={styles.icon}
              />
              <Text style={styles.cardText}>SAVED FILES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Image
                source={{uri: 'https://your-icon-url.com'}}
                style={styles.icon}
              />
              <Text style={styles.cardText}>RECORD TORQUE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Image
                source={{uri: 'https://your-icon-url.com'}}
                style={styles.icon}
              />
              <Text style={styles.cardText}>EXPORT FILES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Image
                source={{uri: 'https://your-icon-url.com'}}
                style={styles.icon}
              />
              <Text style={styles.cardText}>SAVED TORQUE DATA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={handleLogout}>
              <Image
                source={{uri: 'https://your-icon-url.com'}}
                style={styles.icon}
              />
              <Text style={styles.cardText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    height: height * 0.35,
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
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '40%',
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#0077b6',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

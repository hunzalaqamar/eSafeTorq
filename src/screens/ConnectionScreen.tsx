import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LoginScreenProps} from '../constants/types';

const {height, width} = Dimensions.get('window');

// Dummy Data for new and existing connections
const newConnections = [{id: 31, label: 'TRANSDUCER # 31'}];
const existingConnections = [
  {id: 1, label: 'TRANSDUCER # 1'},
  {id: 2, label: 'TRANSDUCER # 2'},
  {id: 3, label: 'TRANSDUCER # 3'},
  {id: 4, label: 'TRANSDUCER # 4'},
  {id: 5, label: 'TRANSDUCER # 5'},
  {id: 6, label: 'TRANSDUCER # 6'},
  {id: 7, label: 'TRANSDUCER # 7'},
  {id: 8, label: 'TRANSDUCER # 8'},
  {id: 9, label: 'TRANSDUCER # 9'},
  {id: 10, label: 'TRANSDUCER # 10'},
  {id: 11, label: 'TRANSDUCER # 11'},
  {id: 12, label: 'TRANSDUCER # 12'},
  {id: 13, label: 'TRANSDUCER # 13'},
  {id: 14, label: 'TRANSDUCER # 14'},
  {id: 15, label: 'TRANSDUCER # 15'},
  {id: 16, label: 'TRANSDUCER # 16'},
];

export default function ConnectionScreen({navigation}: LoginScreenProps) {
  const [selectedId, setSelectedId] = useState(0); // To manage selected state

  const handleSelect = (id: number) => {
    setSelectedId(id); // Set the selected entry
    // navigation.navigate('Dashboard'); // Navigate to Dashboard
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#003366', '#003366']}
        style={styles.topSection}></LinearGradient>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>NEW CONNECTIONS</Text>
          <Text style={styles.arrow}>⌄</Text>
        </View>
        {newConnections.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.entry,
              selectedId === item.id && styles.selectedEntry,
            ]}
            onPress={() => handleSelect(item.id)}>
            <Image source={{uri: 'icon-url'}} style={styles.entryIcon} />
            <Text
              style={[
                styles.entryText,
                selectedId === item.id && styles.selectedText,
              ]}>
              {item.label}
            </Text>
            <Text style={styles.icon}>✓</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Existing Connections Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>EXISTING CONNECTIONS</Text>
          <Text style={styles.arrow}>⌄</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {existingConnections.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.entry,
                selectedId === item.id && styles.selectedEntry,
              ]}
              onPress={() => handleSelect(item.id)}>
              <Image source={{uri: 'icon-url'}} style={styles.entryIcon} />
              <Text
                style={[
                  styles.entryText,
                  selectedId === item.id && styles.selectedText,
                ]}>
                {item.label}
              </Text>
              <Text style={styles.icon}>✓</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  topSection: {
    height: height * 0.15,
    position: 'absolute',
    width: '120%',
    backgroundColor: '#003366',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: '#fff',
    fontSize: 24,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  scrollContainer: {
    bottom: 1,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#003366',
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 18,
    color: '#003366',
  },
  entry: {
    backgroundColor: '#ffffff', // White background for the cards
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2, // Shadow for card elevation
  },
  entryIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  selectedEntry: {
    backgroundColor: '#cce0ff', // Light blue when selected
    borderWidth: 2,
    borderColor: '#0077b6', // Blue border
  },
  entryText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#0077b6', // Blue text when selected
  },
  icon: {
    fontSize: 18,
    color: '#0077b6',
  },
});

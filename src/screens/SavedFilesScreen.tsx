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
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox from the new package
import LinearGradient from 'react-native-linear-gradient';
import {SavedFilesScreenProps, FileData} from '../constants/types'; // Import types

const {height, width} = Dimensions.get('window');

// Dummy Data for the files
const fileData: FileData[] = [
  {id: 1, fileName: 'Transducer 1.1', timeStamp: '2/2/2023'},
  {id: 2, fileName: 'Transducer 11', timeStamp: '25/2/2023'},
  {id: 3, fileName: 'Transducer 12', timeStamp: '2/2/2023'},
  {id: 4, fileName: 'Transducer 11', timeStamp: '30/2/2023'},
  {id: 5, fileName: 'Transducer 1.1', timeStamp: '2/2/2023'},
  {id: 6, fileName: 'Transducer 11', timeStamp: '2/2/2023'},
  {id: 7, fileName: 'Transducer 12', timeStamp: '2/2/2023'},
  {id: 8, fileName: 'Transducer 11', timeStamp: '2/2/2023'},
  {id: 9, fileName: 'Transducer 1.1', timeStamp: '2/2/2023'},
  {id: 10, fileName: 'Transducer 1.1', timeStamp: '2/2/2023'},
  {id: 12, fileName: 'Transducer 11', timeStamp: '25/2/2023'},
  {id: 13, fileName: 'Transducer 12', timeStamp: '2/2/2023'},
  {id: 14, fileName: 'Transducer 11', timeStamp: '30/2/2023'},
  {id: 15, fileName: 'Transducer 1.1', timeStamp: '2/2/2023'},
  {id: 16, fileName: 'Transducer 11', timeStamp: '2/2/2023'},
  {id: 17, fileName: 'Transducer 12', timeStamp: '2/2/2023'},
  {id: 18, fileName: 'Transducer 11', timeStamp: '2/2/2023'},
  {id: 19, fileName: 'Transducer 1.1', timeStamp: '2/2/2023'},
];

export default function SavedFilesScreen({navigation}: SavedFilesScreenProps) {
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]); // Selected file IDs
  const [selectAll, setSelectAll] = useState(false); // Select all state

  // Handle file selection
  const handleFileSelection = (id: number) => {
    if (selectedFiles.includes(id)) {
      setSelectedFiles(selectedFiles.filter(fileId => fileId !== id));
    } else {
      setSelectedFiles([...selectedFiles, id]);
    }
  };

  // Handle Select All toggle
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedFiles([]);
    } else {
      const allFileIds = fileData.map(file => file.id);
      setSelectedFiles(allFileIds);
    }
    setSelectAll(!selectAll);
  };

  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={['#003366', '#003366']} style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Text style={styles.hamburger}>≡</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EXPORT FILES</Text>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
      </LinearGradient> */}

      <View style={styles.actionBar}>
        <View style={styles.selectAllContainer}>
          <CheckBox value={selectAll} onValueChange={handleSelectAll} />
          <Text style={styles.selectAllText}>Select All</Text>
        </View>
        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportText}>Export</Text>
          <Image source={{uri: 'export-icon-url'}} style={styles.exportIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>FileName</Text>
        <Text style={styles.tableHeaderText}>TimeStamp</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {fileData.map((file, index) => (
          <View
            key={file.id}
            style={[
              styles.tableRow,
              {backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff'},
            ]}>
            <CheckBox
              value={selectedFiles.includes(file.id)}
              onValueChange={() => handleFileSelection(file.id)}
            />
            <Text style={styles.fileText}>{file.fileName}</Text>
            <Text style={styles.timestampText}>{file.timeStamp}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    height: height * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#003366',
  },
  menuIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburger: {
    color: '#fff',
    fontSize: 24,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: '#fff',
    fontSize: 24,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#536d9e',
    alignItems: 'center',
  },
  selectAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectAllText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 16,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exportText: {
    color: '#fff',
    fontSize: 16,
  },
  exportIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  fileText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    marginLeft: 25,
    fontSize: 16,
  },
  timestampText: {
    color: '#333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    fontSize: 16,
  },
});

import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Define the types for the stack navigator
export type RootStackParamList = {
  Login: undefined; // No parameters for the Login screen
  Dashboard: undefined; // No parameters for the Dashboard screen
  Connect: undefined;
  SavedFiles: undefined; // Add ExportFiles screen
};

// Define the type for the navigation prop in the Login screen
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

// Define the type for the route prop (if you ever use it)
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

// Props for the Login screen component (navigation prop)
export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

// Props for the ExportFilesScreen
export type SavedFilesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SavedFiles'>;
};

// Type for the file data
export interface FileData {
  id: number;
  fileName: string;
  timeStamp: string;
}

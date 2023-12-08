import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED", // Neutral background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Added horizontal padding for better spacing
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  title: {
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 35,
    color: '#333', // Dark text color
    marginBottom: 20,
  },
  text: {
    color: '#333', // Dark text color
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20, // Spacing between input sections
  },
  input: {
    color: "#333", // Dark text color
    width: '100%',
    textAlign: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#333', // Dark border color
    borderRadius: 9,
    paddingVertical: 8, // Added vertical padding for input fields
  },
  result: {
    color: '#333', // Dark text color
    textAlign: 'center',
    paddingLeft: 10,
    marginBottom: 20,
  },
  image: {
    width: '25%',
    height: '19%',
    alignSelf: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute buttons evenly
    width: '100%',
    paddingHorizontal: 40, // Added horizontal padding for better spacing
    marginTop: 20, // Added top margin for better spacing
  },
  button: {
    backgroundColor: '#3498db', // Adjusted button color
    width: '48%', // Adjusted button width to fit evenly
    borderRadius: 10, // Added border radius for a rounded look
    marginTop: 20,
    height: 40, // Adjusted button height for better visibility
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff', // Adjusted text color for better visibility
    fontSize: 16, // Adjusted font size for better readability
  },
  choice: {
    width: 200,
    color: "#333", // Dark text color
    marginBottom: 10,
  },
  choiceBorder: {
    borderColor: "#333", // Dark border color
    borderWidth: 2,
    borderRadius: 9,
    marginBottom: 15,
  },
  resultView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#333', // Dark border color
    borderRadius: 9,
    marginTop: 12,
  },
  resultText: {
    color: '#333', // Dark text color
    fontSize: 16, // Adjusted font size for better readability
  },
});

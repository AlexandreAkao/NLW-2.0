import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBlock: {
    width: '48%',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  submitButton: {
    backgroundColor: '#04d361',
    height:  56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
  pickerContainer: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  }
})

export default styles;
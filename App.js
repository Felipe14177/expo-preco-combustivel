import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from './globalStyles'; // Assuming you have a globalStyles file

export default function App() {
  const [valorLitro, setValorLitro] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('');

  const executar = (valorLitro, quantidade, km) => {
    let quantidad = parseInt(quantidade);
    let valor = parseInt(valorLitro);
    let quilo = parseInt(km);
    let dim = valor * quantidad;
    let ks = dim / quilo;
    setResultado(`R$${ks.toFixed(2)}/km`);
  };

  const limpar = () => {
    setKm('');
    setQuantidade('');
    setValorLitro('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: '#555' }]}>Preço do Combustivel</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: '#333' }]}>Valor do litro:</Text>
          <View style={[styles.inputView, { borderColor: '#333' }]}>
            <TextInput
              value={valorLitro}
              onChangeText={setValorLitro}
              style={[styles.input, { color: '#333', textAlign: 'center' }]}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: '#555' }]}>Quantidade Abastecida:</Text>
          <View style={[styles.inputView, { borderColor: '#555' }]}>
            <TextInput
              value={quantidade}
              onChangeText={setQuantidade}
              style={[styles.input, { color: '#555', textAlign: 'center' }]}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: '#777' }]}>Km Rodados:</Text>
          <View style={[styles.inputView, { borderColor: '#777' }]}>
            <TextInput
              value={km}
              onChangeText={setKm}
              style={[styles.input, { color: '#777', textAlign: 'center' }]}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: '#555' }]} onPress={() => executar(valorLitro, quantidade, km)}>
            <Text style={styles.buttonText}>Calcular valor</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: '#777' }]} onPress={limpar}>
            <Text style={styles.buttonText}>Limpar valor</Text>
          </Pressable>
        </View>
        <View style={styles.resultContainer}>
          <Text style={[styles.resultText, { color: '#333', textAlign: 'center' }]}>{`Resultado: ${resultado}`}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

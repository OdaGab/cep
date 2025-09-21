import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, Alert } from "react-native";
import Api from './src/services/api'
export default function App() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");


  async function buscaCep(){
    if(cep == ""){
      Alert.alert("Cep inválido!")
      setCep("")
    }
    try{
       const response = await Api.get(`/${cep}/json/`)
       setLogradouro(response.data.logradouro)
       setBairro(response.data.bairro)
       setLocalidade(response.data.localidade)
       setUf(response.data.uf)
    }catch(error){
      console.log("ERRO" + error)
    }
  }


  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Buscador de Cep</Text>
      </View>

      <View style={styles.containerCep}>
        <TextInput
          style={{
            borderColor:"#000000",
            borderWidth: 2,
            width: 200,
            padding: 10,
            height: 50,
            fontSize: 18,
            marginTop: 20,
            marginEnd: 20,
            marginHorizontal:10,
            borderRadius: 10
          }}
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          placeholder="Cep"
          keyboardType="numeric" // opcional, abre teclado numérico
        />
        <TouchableOpacity style={styles.botaoBuscar} onPress={buscaCep}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>

        </TouchableOpacity>

      </View>
      <TextInput
          style={styles.caixaTexto} 
          value={logradouro}
          onChangeText={(texto) => setLogradouro(texto)}
          placeholder="Logradouro"
         
        />
         <TextInput
         style={styles.caixaTexto} 
          value={bairro}
          onChangeText={(texto) => setBairro(texto)}
          placeholder="Bairro"
         
        />
         <TextInput
          style={styles.caixaTexto} 
          value={localidade}
          onChangeText={(texto) => setLocalidade(texto)}
          placeholder="Cidade"
          
        />

<TextInput
          style={{
            borderColor:"#000000",
            borderWidth: 2,
            width: 100,
            height: 50,
            fontSize: 18,
            marginTop: 20,
            marginEnd: 20,
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 20
          }}
          value={uf}
          onChangeText={(texto) => setUf(texto)}
          placeholder="Estado"
         
        />

    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
  },
  topBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#018786",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  containerCep: {
    flexDirection: "row",
    height: 90,
    marginHorizontal: 2,
  
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  botaoBuscar: {
    backgroundColor: "#018786",
    width: 80,
    height: 50,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 15
  },
  textoBotaoBuscar: {
    color:"#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center"
  },
  caixaTexto: {
    borderColor: "#000000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop:10,
    marginHorizontal:20
  }
});

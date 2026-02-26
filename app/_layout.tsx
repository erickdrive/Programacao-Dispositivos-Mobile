import { SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function RootLayout() {
  const [numero, setNumero] = useState(0);
  const [operador, setOperador] = useState('');
  const [display, setDisplay] = useState('');
  
  function limparTela(){
    setNumero(0);
    setOperador('');
    setDisplay('');
  }
   
  
  
  function calcular(){
    
  }

  return (
    <>
      <View>
          <View style={{alignItems:'center', margin:20}}>
            <Text style={styles.textoDisplay}>CALCULADORA</Text>
          </View>
          <View style={styles.display}>
            <Text style={styles.textoDisplay}>0</Text>
          </View>
          <View style={styles.teclado}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>V</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotaoDigitos}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCalcular}>
              <Text style={styles.textoBotao}>CALCULAR</Text>
            </TouchableOpacity>
          </View>
    
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  botao:{
    borderRadius:8,
    borderWidth:2,
    height:50,
    width:'22%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
  },
  botaoCalcular:{
    borderRadius:8,
    borderWidth:2,
    height:50,
    width:'74%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
    backgroundColor:'#e39221',
  },
  textoBotao:{
    fontWeight:'bold',
    fontSize:16,
    color:'#ffffffe3',
  },
  textoBotaoDigitos:{
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
  },
  
  display:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:20,
    borderRadius:10,
    borderWidth:2,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
  },
  textoDisplay:{
     fontWeight:'bold',
     fontSize:26,
  },
  teclado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    padding:20
  }
})
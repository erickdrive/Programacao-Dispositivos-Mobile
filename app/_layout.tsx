import { SetStateAction, use, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function RootLayout() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [display, setDisplay] = useState('0');
  const [alternarNumero, setAlternarNumero] = useState(false);
  const [fimConta, setFimConta] = useState(false);
  const [operador, setOperador] = useState('');
  const [resultado, setResultado] = useState(0);


  //split
  // 1 variavel primeiro valor 
  // 2 variavel operador 
  // 3 variavel Segundo valor
  
  function limparTela(){
    setNumero1('');
    setNumero2('');
    setOperador('');
    setDisplay('0');
    setAlternarNumero(false);
    setResultado(0);
  }
  
  function definirOperador(op: string){
    setOperador(op);
    setAlternarNumero(true);
    setDisplay(display + " " + op + " ");
  }

  function calcular(){
    let valor = 0;

    switch(operador){
      case '+': 
        valor = Number(numero1) + Number(numero2);
      break;
      case '-': 
        valor = Number(numero1) - Number(numero2);
      break;
      case '/': 
        if(Number(numero2) === 0){
          setDisplay('Erro não é possivel realizar divisão por 0');
          setFimConta(true);
          return;
        }else{
          valor = Number(numero1) / Number(numero2);
        }
      break;
      case '*': 
        valor = Number(numero1) * Number(numero2);
      break;
      case 'V': 
        if(Number(numero1) < 0){
          setDisplay('Erro o número é negativo');
          setFimConta(true);
          return;
        }else{
          valor = Math.sqrt(Number(numero1));
        }
      break;
      case '%': 
        if(numero2 !== ''){
          valor = (Number(numero1) * Number(numero2)) / 100; // se tiver numero2, calcula a porcentagem relativo ao numero1
        }else{
          valor = Number(numero1) / 100; //transforma numero1 em fração
        }
      break;
    }

    setResultado(valor);
    setDisplay(String(valor));
    setNumero1(String(valor));
    setNumero2('');
    setOperador('');
    setAlternarNumero(false);
    setFimConta(true);
  }

  function concatenarValores(numero:string){
    if (fimConta) {
      limparTela();
      setDisplay(numero);
      setNumero1(numero);
      setFimConta(false);
      return;
    }

    if(alternarNumero == false){
      let primeiroValor = numero1 + numero;
      setNumero1(primeiroValor);

      if(display === '0'){
        setDisplay(numero);
      }else{
        setDisplay(display + numero);
      }
    }else{
      let segundoValor = numero2 + numero;
      setNumero2(segundoValor)
      setDisplay(display + numero);
    }
  }
   
  return (
    <>
      <View>
          <View style={{alignItems:'center', margin:20}}>
            <Text style={styles.textoDisplay}>CALCULADORA</Text>
          </View>
          <View style={styles.display}>
            <Text style={styles.textoDisplay}>{display}</Text>
          </View>
          <View style={styles.teclado}>
            <TouchableOpacity style={styles.botao} onPress={()=> limparTela()}>
              <Text style={styles.textoBotaoDigitos}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> definirOperador('V')}>
              <Text style={styles.textoBotaoDigitos}>V</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> definirOperador('%')}>
              <Text style={styles.textoBotaoDigitos}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> definirOperador('/')}>
              <Text style={styles.textoBotaoDigitos}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('7')}>
              <Text style={styles.textoBotaoDigitos}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('8')}>
              <Text style={styles.textoBotaoDigitos}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('9')}>
              <Text style={styles.textoBotaoDigitos}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> definirOperador('*')}>
              <Text style={styles.textoBotaoDigitos}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('4')}>
              <Text style={styles.textoBotaoDigitos}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('5')}>
              <Text style={styles.textoBotaoDigitos}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('6')}>
              <Text style={styles.textoBotaoDigitos}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> definirOperador('-')}>
              <Text style={styles.textoBotaoDigitos}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('1')}>
              <Text style={styles.textoBotaoDigitos}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('2')}>
              <Text style={styles.textoBotaoDigitos}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('3')}>
              <Text style={styles.textoBotaoDigitos}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> definirOperador('+')}>
              <Text style={styles.textoBotaoDigitos}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> concatenarValores('0')}>
              <Text style={styles.textoBotaoDigitos}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCalcular} onPress={()=> calcular()}>
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
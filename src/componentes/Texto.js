import React from "react";
import { StyleSheet, Text } from 'react-native';


export default function Texto({ children, style }) {

    let estilo = estilos.texto;
    // ? em style? serve para, se houver style, segue com a condicional, se não, não segue e
    // não quebra a aplicação
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoBold;
    }

    // style recebe um array de estilos. Children engloba tudo que está dentro dos brackets,
    // Já o style engloba o estilo declarado específico para o texto
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})
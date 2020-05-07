import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/nome.png';

import styles from './styles';

export default function Info() {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color={'#9ECBFF'} />
                </TouchableOpacity>
                
                <Image source = { logoImg } />
                
                <TouchableOpacity>
                    <Feather name='info' size={28} color={'#9ECBFF'} />
                </TouchableOpacity>
            </View>

            <View style={styles.box}>
                <Text style={styles.definition}>
                    A.ta.lai.a - 1. aquele que vigia, que observa; sentinela. 2. substantivo feminino lugar elevado de onde se observa ou se vigia.
                </Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoText}>Esse app foi desenvolvido com o intuito de manter todos os terráqueos informados sobre a possibilidade de colisão com algum corpo celeste forasteiro.</Text>
                <Text style={styles.infoText}>São listados todos os asteróides ou cometas que possuem distância de periélio menor ou igual a 1.3 UA (unidade astronômica. 1UA equivale à distância entre a Terra e o Sol).</Text>
                <Text style={styles.infoText}>Na ocasião de impacto iminente, é recomendado buscar o abrigo mais próximo e assistir à trilogia Mad Max® como meio educativo de reinserção numa sociedade pós-apocalíptica (Mad Max: Fury Road® e Water World® podem ser assistidos como bibliografia complementar).</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.infoText}>Essa aplicação consome a API NeoWs (Near Earth Object Web Service) com dados oriundos da NASA JPL Asteroid Team (Time de Asteróides do Laboratório de Propulsão a Jato da NASA).</Text>
                <Text style={styles.infoText}>A documentação dessa API e outras podem ser encontradas em:</Text>
                <Text style={styles.infoText}>https://api.nasa.gov/</Text>
                <Text style={styles.infoText}>Atribuições artísticas:</Text>
                <Text style={styles.infoText}>https://befonts.com/azedo-font.html</Text>
                <Text style={styles.infoText}>https://www.flaticon.com/authors/flat-icons</Text>
            </View>

        </View>
    );
}
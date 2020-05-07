import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles'; 

export default function Asteroids() {

    const [loading, setLoading] = useState();
    const [asteroids, setAsteroids] = useState([]);
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(asteroid) {
        navigation.navigate('Detail', {asteroid});
    }

    function navigateToInfo() {
        navigation.navigate('Info')
    }

    function salvarData(data) {
        setData(data.split('-'));
    }

    async function loadAsteroids(url = 'rest/v1/feed/today?detailed=true') {
        // Confere se já está sendo realizada uma requisição
        if(loading) {
            return
        }
        // Caso não haja nenhuma requisição em progresso, levanta a flag e realiza uma
        setLoading(true);

        // Busca a lista de asteroides próximos à Terra hoje.
        const response = await api.get(url);
        setTotal(response.data.element_count);

        // Instancia em listaAsteroidesHoje o array de um único elemento da response
        var listaAsteroidesHoje = response.data.near_earth_objects;
        // Instancia em chaveData o valor utilizado para nomear o objeto de hoje, que no caso é a data da realização do request 
        var chaveData = Object.keys(response.data.near_earth_objects)[0];
        // Finalmente, instancia a lista de asteroides próximos à Terra no dia em que o request foi realizado
        setAsteroids(listaAsteroidesHoje[chaveData]);        
        // Formata e armazena o valor da data separadamente
        salvarData(chaveData);

        // Altera a flag para indicar que não existem requests sendo realizados a partir de agora
        setLoading(false);


        console.log(asteroids);
    }

    function loadAsteroidsYesterday() {
        let dia = String(parseInt(data[2][0]) * 10) + String(parseInt(data[2][1]) - 1);
        let ontem = data[0] + '-' + data[1] + '-' + dia;
        loadAsteroids(`rest/v1/feed?start_date=${ontem}&end_date=${ontem}&detailed=true`);
    }

    function loadAsteroidsTomorrow() {
        let dia = String(parseInt(data[2][0]) * 10) + String(parseInt(data[2][1]) + 1);
        let amanha = data[0] + '-' + data[1] + '-' + dia;
        loadAsteroids(`rest/v1/feed?start_date=${amanha}&end_date=${amanha}&detailed=true`);
    }

    useEffect(() => {
        loadAsteroids();
    }, []);

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source = { logoImg } />
                <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={navigateToInfo}>
                    <Feather name="info" size={16} color={'#2288FF'} />
                </TouchableOpacity>
                <Text></Text>
                <Text style = {styles.headerText}>
                    Total de <Text style = {styles.headerTextBold }>{total} asteróides</Text>.
                </Text>
                </View>
            </View>
            
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Mantenha-se informado sobre os asteróides e cometas ao seu redor com esse vigia de bolso.</Text>
            
            <View style={styles.dateSelection}>
                <TouchableOpacity onPress={loadAsteroidsYesterday}>
                    <Feather name="arrow-left" size={16} color={'#2288FF'} />
                </TouchableOpacity>

                <Text style={styles.date}>{data[2] + '/' + data[1] + '/' + data[0]}</Text>
                
                <TouchableOpacity onPress={loadAsteroidsTomorrow}>
                    <Feather name="arrow-right" size={16} color={'#2288FF'} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={asteroids}
                style={styles.asteroidsList}
                keyExtractor={asteroid => String(asteroid.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: asteroid}) => (
                    <View style={styles.asteroid}>
                        <View style={styles.asteroidInfo}>
                            <Text style={styles.asteroidProperty}>NOME:</Text>
                            <Text style={styles.asteroidValue}>{asteroid.name}</Text>
                        </View>

                        <View style={styles.asteroidInfo}>
                            <Text style={styles.asteroidProperty}>EXISTE RISCO DE IMPACTO:</Text>
                            <Text style={styles.asteroidValue}>
                            {asteroid.is_potentially_hazardous_asteroid
                                ? <Text style={{color: '#ff0000', fontWeight: 'bold'}}>SIM</Text>
                                : <Text style={{color: '#00ff00', fontWeight: 'bold'}}>NÃO</Text>
                            }
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.asteroidButton} onPress={() => {navigateToDetail(asteroid)}}>
                            <Text style={styles.asteroidButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color={'#9ECBFF'} />
                        </TouchableOpacity>
                    </View>
            )}/>

        </View>
    );
}

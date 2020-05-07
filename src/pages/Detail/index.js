import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const asteroid = route.params.asteroid
    
    function navigateBack() {
        navigation.goBack();
    }

    function openLink() {
        Linking.openURL(asteroid.nasa_jpl_url)
        .catch((err) => console.error('Erro ao tentar abrir URL.', err));
    }

    function sendWhatsapp() {
        const message = `${asteroid.nasa_jpl_url}\n\nAsteróide: *${asteroid.name}*\nData de maior aproximação: ${convertDate(asteroid.close_approach_data[0].close_approach_date)}`;
        Linking.openURL(`whatsapp://send?text=${message}`);
    }

    function convertDate(data) {
        let arrData = data.split('-');
        return arrData[2] + '/' + arrData[1] + '/' + arrData[0];
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source = { logoImg } />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color={'#9ECBFF'} />
                </TouchableOpacity>
            </View>

            <View style={styles.asteroid}>
                <View style={styles.asteroidPropertyRow}>
                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Nome:</Text>
                        <Text style={styles.asteroidValue}>{asteroid.name}</Text>
                    </View>

                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>É uma ameaça:</Text>
                        <Text style={styles.asteroidValue}>
                            {asteroid.is_potentially_hazardous_asteroid
                                ? <Text style={{color: '#ff0000', fontWeight: 'bold'}}>SIM</Text>
                                : <Text style={{color: '#00ff00', fontWeight: 'bold'}}>NÃO</Text>
                            }
                        </Text>
                    </View>
                </View>

                <View style={styles.asteroidInfo}>
                    <Text style={styles.asteroidProperty}>Diâmetro estimado:</Text>
                    <Text style={styles.asteroidValue}>{(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(5)} m ~ {(asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(5)} m</Text>
                </View>

                <View style={styles.asteroidPropertyRow}>
                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Velocidade relativa:</Text>
                        <Text style={styles.asteroidValue}>{parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(5)} km/s</Text>
                    </View>

                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Menor distância:</Text>
                        <Text style={styles.asteroidValue}>{parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(5)} km</Text>
                    </View>
                </View>

                <View style={styles.asteroidInfo}>
                    <Text style={styles.asteroidProperty}>Magnitude absoluta:</Text>
                    <Text style={styles.asteroidValue}>{asteroid.absolute_magnitude_h}</Text>
                </View>          

                <View style={styles.asteroidPropertyRow}>
                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Primeira observação:</Text>
                        <Text style={styles.asteroidValue}>{convertDate(asteroid.orbital_data.first_observation_date)}</Text>
                    </View>

                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Última Observação:</Text>
                        <Text style={styles.asteroidValue}>{convertDate(asteroid.orbital_data.last_observation_date)}</Text>
                    </View>
                </View>

                <View style={styles.asteroidPropertyRow}>
                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Número de observações:</Text>
                        <Text style={styles.asteroidValue}>{asteroid.orbital_data.observations_used}</Text>
                    </View>

                    <View style={styles.asteroidInfo}>
                        <Text style={styles.asteroidProperty}>Arco de observação:</Text>
                        <Text style={styles.asteroidValue}>{asteroid.orbital_data.data_arc_in_days} dias</Text>
                    </View>
                </View>

                <View style={styles.asteroidInfo}>
                    <Text style={styles.asteroidProperty}>Está na Tabela de Risco de Sentry:</Text>
                    <Text style={styles.asteroidValue}>
                        {asteroid.is_sentry_object ? 'SIM' : 'NÃO'}
                    </Text>
                </View>

            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={openLink}>
                    <Text style={styles.actionText}>Site JPL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                    <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

/*
      "name": "(2010 PW58)",
      "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3544935",
      "neo_reference_id": "3544935",
      "orbital_data": Object {
        "aphelion_distance": "1.076823164033825",
        "ascending_node_longitude": "324.4466806697351",
        "data_arc_in_days": 1883,
        "eccentricity": ".2117576170922935",
        "epoch_osculation": "2459000.5",
        "equinox": "J2000",
        "first_observation_date": "2010-08-05",
        "inclination": "14.2352936316362",
        "jupiter_tisserand_invariant": "6.638",
        "last_observation_date": "2015-10-01",
        "mean_anomaly": "122.8557130942934",
        "mean_motion": "1.176552002985568",
        "minimum_orbit_intersection": ".0214845",
        "observations_used": 32,
        "orbit_class": Object {
          "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
          "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU",
          "orbit_class_type": "ATE",
        },
        "orbit_determination_date": "2017-04-06 08:56:59",
        "orbit_id": "14",
        "orbit_uncertainty": "2",
        "orbital_period": "305.9788254887837",
        "perihelion_argument": "131.0188954613782",
        "perihelion_distance": ".700468183418557",
        "perihelion_time": "2458896.079870007836",
        "semi_major_axis": ".8886456737261909",
*/
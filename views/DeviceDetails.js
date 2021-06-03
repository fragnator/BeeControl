import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  Button,
  TextInput,
  RadioButton,
  Card,
  Title,
  Paragraph,
  IconButton,
  Avatar,
  ActivityIndicator,
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {LineChart} from 'react-native-chart-kit';

const DeviceDetails = props => {
  const [description, setDescription] = React.useState('');
  const [data, setData] = React.useState([]);
  const [lastTemperature, setLastTemperature] = React.useState('');
  const [lastHumidity, setLastHumidity] = React.useState('');
  const [lastStatus, setLastStatus] = React.useState('');
  const [lastEvent, setLastEvent] = React.useState('');
  const [graphTemperatureData, setGraphTemperatureData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [noData, setNoData] = React.useState(true);

  useEffect(() => {
    // firestore()
    //   .collection('data')
    //   .doc('1')
    //   .update({
    //     temperature: firestore.FieldValue.arrayUnion({
    //       timestamp: new Date().toISOString(),
    //       value: Math.random() * (30 - 20) + 20,
    //     }),
    //   });

    Navigation.mergeOptions(props.componentId, {
      topBar: {
        title: {
          text: props.title,
        },
        rightButtons: [
          {
            component: {
              name: 'NavigationButtonDeviceEditComponent',
              passProps: {
                deviceId: props.deviceId,
                title: props.name,
                parentComponent: props.componentId,
              },
            },
          },
        ],
      },
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setNoData(false);
    let promises = [
      firestore().collection('devices').doc(props.deviceId).get(),
      firestore()
        .collection('data')
        .where('deviceId', '==', props.deviceId)
        .get(),
    ];

    Promise.all(promises)
      .then(values => {
        setDescription(values[0].data().description);

        let result = values[1].docs.map(element => {
          return {...element.data(), data: element.id};
        });

        setData({
          data: result[0].temperature.map(tempe => tempe.value).slice(0, 5),
        });

        setGraphTemperatureData(
          result[0].temperature.slice(
            result[0].temperature.length - 7,
            result[0].temperature.length,
          ),
        );
        setLastEvent(result[0].event[result[0].event.length - 1].value);
        setLastStatus(result[0].status[result[0].status.length - 1].value);
        setLastHumidity(
          result[0].humidity[result[0].humidity.length - 1].value,
        );
        setLastTemperature(
          result[0].temperature[result[0].temperature.length - 1].value,
        );
        setLoading(false);
      })
      .catch(err => {
        setNoData(true);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {loading && (
          <ActivityIndicator
            style={{marginTop: 48}}
            animating={true}
            color="#ffb300"
            size="large"></ActivityIndicator>
        )}
      </View>
      <View>
        {!loading && noData && (
          <Card style={styles.card}>
            <Card.Title
              title="No data available yet"
              left={props => (
                <Avatar.Icon
                  color="#ffffff"
                  style={{backgroundColor: '#fdd835'}}
                  {...props}
                  icon="alert-circle"
                />
              )}
            />
          </Card>
        )}
      </View>
      {!loading && !noData && (
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Card style={styles.upperCard}>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  icon="thermometer"
                  style={{marginLeft: 5, paddingLeft: 0}}
                  onPress={() => {}}
                />
                <Title
                  style={{
                    marginTop: 8,
                    paddingLeft: 0,
                    fontSize: 16,
                    fontWeight: '100',
                  }}>
                  Temperature
                </Title>
              </View>
              <Card.Content>
                <Title
                  style={{
                    marginTop: 5,
                  }}>
                  {lastTemperature} °C
                </Title>
              </Card.Content>
            </Card>

            <Card style={styles.upperCard}>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  icon="water-percent"
                  style={{marginLeft: 5, paddingLeft: 0}}
                  onPress={() => {}}
                />
                <Title
                  style={{
                    marginTop: 8,
                    paddingLeft: 0,
                    fontSize: 16,
                    fontWeight: '100',
                  }}>
                  Humidity
                </Title>
              </View>
              <Card.Content>
                <Title
                  style={{
                    marginTop: 5,
                  }}>
                  {lastHumidity} %
                </Title>
              </Card.Content>
            </Card>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Card style={styles.upperCard}>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  icon="alert-circle-check"
                  style={{marginLeft: 5, paddingLeft: 0}}
                  onPress={() => {}}
                />
                <Title
                  style={{
                    marginTop: 8,
                    paddingLeft: 0,
                    fontSize: 16,
                    fontWeight: '100',
                  }}>
                  Status
                </Title>
              </View>
              <Card.Content>
                <Title
                  style={{
                    marginTop: 5,
                  }}>
                  {lastStatus} %
                </Title>
              </Card.Content>
            </Card>

            <Card style={styles.upperCard}>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  icon="calendar-alert"
                  style={{marginLeft: 5, paddingLeft: 0}}
                  onPress={() => {}}
                />
                <Title
                  style={{
                    marginTop: 8,
                    paddingLeft: 0,
                    fontSize: 16,
                    fontWeight: '100',
                  }}>
                  Events
                </Title>
              </View>
              <Card.Content>
                <Title
                  style={{
                    marginTop: 5,
                  }}>
                  {lastEvent}
                </Title>
              </Card.Content>
            </Card>
          </View>

          <Card>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  icon="chart-arc"
                  style={{marginLeft: 10, marginTop: 10}}
                  onPress={() => {}}
                />
                <Title
                  style={{
                    marginTop: 12,
                    paddingLeft: 0,
                    fontSize: 16,
                    fontWeight: '100',
                  }}>
                  Chart
                </Title>
              </View>
            </View>

            <View style={{marginTop: 16}}>
              <LineChart
                data={{
                  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  datasets: [data],
                }}
                width={Dimensions.get('window').width - 30} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=" °C"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#FFFFFF',
                  backgroundGradientFrom: '#FFFFFF',
                  backgroundGradientTo: '#FFFFFF',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(253, 216, 53, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffb300',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              />
            </View>
          </Card>

          <Card style={{marginTop: 16, marginBottom: 50}}>
            <View>
              <TextInput
                theme={{
                  colors: {
                    text: '#fdd835',
                    accent: '#fdd835',
                    primary: '#fdd835',
                    placeholder: '#fdd835',
                    background: 'transparent',
                  },
                }}
                editable={false}
                style={{margin: 16}}
                underlineColor="#fdd835"
                label="Description"
                value={description}
                onChangeText={description => setDescription(description)}
                dense
                numberOfLines={10}
              />
            </View>
          </Card>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 16,
    padding: 16,
    backgroundColor: 'whitesmoke',
  },
  card: {
    marginBottom: 50,
  },
  cardContent: {
    marginTop: 20,
  },
  cancelButton: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
  upperCard: {
    width: '48%',
    marginBottom: 15,
  },
  editButton: {
    marginTop: 15,

    marginRight: 20,
    marginLeft: 'auto',
  },
});

export default DeviceDetails;

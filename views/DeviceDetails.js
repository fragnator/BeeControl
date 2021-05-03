import React from 'react';
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
} from 'react-native-paper';

import {LineChart} from 'react-native-chart-kit';

const DeviceDetails = props => {
  const [description, setDescription] = React.useState(
    'Checkout beehive tomorrow',
  );

  return (
    <View style={styles.container}>
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
                24 °C
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
                83 %
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
                79 %
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
                Queen
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
                datasets: [
                  {
                    data: [
                      Math.random() * (30 - 20) + 20,
                      Math.random() * (30 - 20) + 20,
                      Math.random() * (30 - 20) + 20,
                      Math.random() * (30 - 20) + 20,
                      Math.random() * (30 - 20) + 20,
                      Math.random() * (30 - 20) + 20,
                    ],
                  },
                ],
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
    </View>
  );
};

DeviceDetails.options = {
  topBar: {
    title: {
      text: 'Device #1',
    },
  },
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

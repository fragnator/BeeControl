import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  List,
  Banner,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

const HomeScreen = props => {
  const [expanded, setExpanded] = React.useState(true);
  const [visible, setVisible] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'Learn more',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({size}) => (
            <Image
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}>
          There was a problem with BeeHive #1
        </Banner>

        <Card style={styles.card}>
          <Card.Content>
            <Title>BeeHive #1</Title>
          </Card.Content>
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
        </Card>
        <Card style={styles.lastCard}>
          <Card.Content>
            <Title>BeeHive #2</Title>
          </Card.Content>
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
  },
  card: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  lastCard: {
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 50,
  },
});

export default HomeScreen;

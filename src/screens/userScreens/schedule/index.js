import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const Items = {
  '2024-05-01': [
    {height: 130, name: 'Item for 2024-05-01 #0'},
    {height: 50, name: 'Item for 2024-05-01 #1'},
    {height: 50, name: 'Item for 2024-05-01 #2'},
  ],
  '2024-05-02': [
    {height: 96, name: 'Item for 2024-05-02 #0'},
    {height: 123, name: 'Item for 2024-05-02 #1'},
  ],
  '2024-05-03': [
    {height: 140, name: 'Item for 2024-05-03 #0'},
    {height: 94, name: 'Item for 2024-05-03 #1'},
    {height: 81, name: 'Item for 2024-05-03 #2'},
  ],
  '2024-05-05': [
    {height: 63, name: 'Item for 2024-05-22 #0'},
    {height: 51, name: 'Item for 2024-05-02 #1'},
    {height: 50, name: 'Item for 2024-05-12 #2'},
  ],
  '2024-05-04': [
    {height: 50, name: 'Item for 2024-05-05 #0'},
    {height: 54, name: 'Item for 2024-05-05 #1'},
    {height: 50, name: 'Item for 2024-05-05 #2'},
  ],
  '2024-05-06': [{height: 145, name: 'Item for 2024-05-06 #0'}],
  '2024-05-07': [
    {height: 97, name: 'Item for 2024-05-07 #0'},
    {height: 107, name: 'Item for 2024-05-07 #1'},
    {height: 106, name: 'Item for 2024-05-07 #2'},
  ],
  '2024-05-08': [
    {height: 114, name: 'Item for 2024-05-08 #0'},
    {height: 63, name: 'Item for 2024-05-08 #1'},
    {height: 112, name: 'Item for 2024-05-08 #2'},
  ],
  '2024-05-09': [
    {height: 68, name: 'Item for 2024-05-09 #0'},
    {height: 87, name: 'Item for 2024-05-09 #1'},
    {height: 123, name: 'Item for 2024-05-09 #2'},
  ],
  '2024-05-10': [
    {height: 103, name: 'Item for 2024-05-10 #0'},
    {height: 50, name: 'Item for 2024-05-10 #1'},
  ],
  '2024-05-11': [
    {height: 50, name: 'Item for 2024-05-11 #0'},
    {height: 117, name: 'Item for 2024-05-11 #1'},
  ],
  '2024-05-12': [
    {height: 134, name: 'Item for 2024-05-12 #0'},
    {height: 75, name: 'Item for 2024-05-12 #1'},
    {height: 116, name: 'Item for 2024-05-12 #2'},
  ],
  '2024-05-13': [
    {height: 123, name: 'Item for 2024-05-13 #0'},
    {height: 50, name: 'Item for 2024-05-13 #1'},
  ],
  '2024-05-14': [{height: 77, name: 'Item for 2024-05-14 #0'}],
  '2024-05-15': [
    {height: 50, name: 'Item for 2024-05-15 #0'},
    {height: 50, name: 'Item for 2024-05-15 #1'},
  ],
  '2024-05-16': [{height: 50, name: 'Item for 2024-05-16 #0'}],
  '2024-05-17': [{height: 50, name: 'Item for 2024-05-17 #0'}],
  '2024-05-18': [{height: 77, name: 'Item for 2024-05-18 #0'}],
  '2024-05-19': [
    {height: 72, name: 'Item for 2024-05-19 #0'},
    {height: 50, name: 'Item for 2024-05-19 #1'},
    {height: 59, name: 'Item for 2024-05-19 #2'},
  ],
  '2024-08-10': [
    {height: 85, name: 'Item for 2024-08-10 #0'},
    {height: 50, name: 'Item for 2024-08-10 #1'},
    {height: 57, name: 'Item for 2024-08-10 #2'},
  ],
  '2024-08-11': [
    {height: 58, name: 'Item for 2024-08-11 #0'},
    {height: 55, name: 'Item for 2024-08-11 #1'},
    {height: 63, name: 'Item for 2024-08-11 #2'},
  ],
};

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" /> 
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
      minDate='2024-01-01'
      maxDate='2025-01-01'
        items={Items}
       ///loadItemsForMonth={loadItems}
        selected={'2024-05-16'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;

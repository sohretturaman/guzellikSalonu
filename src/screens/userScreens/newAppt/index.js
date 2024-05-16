import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
//display available times on each day on aganda then take an appointment based on that time and clock !!
const Items = {
  '2024-05-14': [
    { height: 77, clock: '12.00 AM' },
    { height: 50, clock: '20.00 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
  ],
  '2024-05-15': [
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    
  ],
  '2024-05-16': [
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
  ],
  '2024-05-17': [
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },

    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height: 50, clock: '13.00 PM' },
    { height: 50, clock: '17.30 PM' },
    { height:50, clock: '13.00 PM' },
    { height:50, clock: '17.30 PM' },
    { height:50, clock: '13.00 PM' },
    { height:50, clock: '17.30 PM' },
    { height:50, clock: '13.00 PM' },
    { height:50, clock: '17.30 PM' },

  ],
  '2024-05-18': [
    { height:50, clock: '13.00 PM' },
    
  ],
  '2024-05-19': [
    { height:50, clock: '13.00 PM' },
    { height:50, clock: '17.30 PM' },
    { height:50, clock: '13.00 PM' },
    { height:50, clock: '17.30 PM' },
  ],
};

const Schedule = () => {
  const [items, setItems] = useState(Items);
  const [selectedDay, setSelectedDay] = useState('2024-05-16'); // Initialize with the current day



  const takeAppointment = (day) => {
    console.log('data from day', day);
  } 
  const renderItem = (item) => {
    return (
      <TouchableOpacity 
        onPress={() => takeAppointment(item)}
      style={{ marginRight: 10, marginTop: 17, flex: 1 }}>
        <Card style={{ height: item?.height }}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {item?.clock && item.height ?
               ( <View>
                <Text>{item.clock}</Text>
                <Text>{item.height}</Text>
                </View>):

              
              <Text >No events</Text>}
            
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };


  const filteredItems = {
    [selectedDay]: items[selectedDay] || [],
  };

  const generateMarkedDates = (items) => {
    const markedDates = {};
    Object.keys(items).forEach((key) => {
      markedDates[key] = { marked: true };
    });
    return markedDates;
  };

  const markedDates = generateMarkedDates(items);

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        minDate="2024-01-01"
        maxDate="2025-01-01"
        items={filteredItems}
        markedDates={markedDates}
        selected={selectedDay}
        renderItem={(item) => renderItem(item)}
        onDayPress={(day) => {
          setSelectedDay(day.dateString);
        }}
      />
    </View>
  );
};

export default Schedule;

import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, FAB} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import CalendarData from '../../../data';
import { RouterNames } from '../../../config';

//superadmins have default available hour for everyday normally , but they can change it and add new hours ,they also can add details about appointments

const Schedule = (props) => {
  const {navigation} = props
  const [items, setItems] = useState(CalendarData);
  const [selectedDay, setSelectedDay] = useState('2024-05-16'); // Initialize with the current day
  const [date, setDate] = useState(new Date(selectedDay));
  const [open, setOpen] = useState(false);
 

  const takeAppointment = day => {
    console.log('data from day', day);
    // go to event detail screen and change date or time based on that
    navigation.navigate(RouterNames.EDIT_EVENT, {EventData: day})
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => takeAppointment(item)}
        style={{marginRight: 10, marginTop: 17, flex: 1}}>
        <Card style={{height: item?.height}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {item?.clock && item.height ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Text>{item.clock}</Text>
                  <Text>{item.height}</Text>
                  <Text>Disable time</Text>
                </View>
              ) : (
                <Text>No events</Text>
              )}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const filteredItems = {
    [selectedDay]: items[selectedDay] || [],
  };

  const generateMarkedDates = items => {
    const markedDates = {};
    Object.keys(items).forEach(key => {
      markedDates[key] = {marked: true};
    });
    return markedDates;
  };

  const markedDates = generateMarkedDates(items);

  const onDayPress = day => {
    setSelectedDay(day.dateString);
    setDate(new Date(day.dateString));
  };

  const onConfirmTime = date => {
    setOpen(false);
    setDate(date);

    // Format time to 'HH.MM AM/PM' format
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const clock = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${
      hours >= 12 ? 'PM' : 'AM'
    }`;

    // Create new event object
    const newEvent = {height: 50, clock};

    // Update items state with the new event
    setItems(prevItems => {
      const updatedItems = {...prevItems};
      if (updatedItems[selectedDay]) {
        updatedItems[selectedDay].push(newEvent);
      } else {
        updatedItems[selectedDay] = [newEvent];
      }
      return updatedItems;
    });

    console.log('Updated items:', items);


  };



  return (
    <View style={{flex: 1}}>
      <Text style={{margin: 10, fontSize: 20, color: 'gray'}}>
        Set Your available Hours for Appointment, Add private events
      </Text>
      <Text>diable selected for all events </Text>
      <Text>diable this week  for all events </Text>
      <DatePicker
        modal
        mode="time"
        open={open}
        date={date}
        title="Select Time" 
        confirmText="Confirm" 
        cancelText="Cancel" 
        onConfirm={onConfirmTime}
        onCancel={() => setOpen(false)}
      />
      <Agenda
        minDate="2024-01-01"
        maxDate="2025-01-01"
        items={filteredItems}
        markedDates={markedDates}
        selected={selectedDay}
        renderItem={renderItem}
        onDayPress={onDayPress}
      />

      <FAB icon="plus" style={styles.fab} onPress={() => setOpen(true)} />

   
    </View>
  );
};

export default Schedule;

import React, {useState} from 'react';
import {View, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, FAB} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import CalendarData from '../../../data';
import {RouterNames} from '../../../config';
import CalendarEventItems from '../../../data/CalendarEventItems';
import ModalComp from '../../../components/modal/Modal';
import {Text} from '../../../components';
import {COLORS} from '../../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Schedule = props => {
  const {navigation} = props;
  const [items, setItems] = useState(CalendarEventItems);
  const [selectedDay, setSelectedDay] = useState('2024-05-16'); // Initialize with the current day
  const [date, setDate] = useState(new Date(selectedDay));
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [column, setColumn] = useState(2);

  const takeAppointment = day => {
    console.log('data from day', day);
    navigation.navigate(RouterNames.EDIT_EVENT, {EventData: day});
  };

  const renderItem = item => (
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
            {item?.name ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text text={item.name} />
                <Text text={'Disable Time'} />
              </View>
            ) : (
              <Text text={'No events'} />
            )}
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

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

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const clock = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${
      hours >= 12 ? 'PM' : 'AM'
    }`;

    const newEvent = {height: 50, clock};

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

  const onSelectTime = ({clock}) => {
    console.log('clock', clock);
    navigation.navigate(RouterNames.CHOOSE_CATEGORY);
  };
  const availableTimesOfDay = CalendarData[selectedDay] || [];

  const AvailableTimesList = () => (
    <View style={{flex: 1, padding: windowWidth * 0.05}}>
      <FlatList
        numColumns={column}
        data={availableTimesOfDay}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => onSelectTime(item.clock)}
            style={{
              margin: 5,
              width: windowWidth * 0.3,
              height: windowWidth * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: windowWidth * 0.05,
              backgroundColor: COLORS.primary,
              padding: windowWidth * 0.01,
              borderRadius: windowWidth * 0.01,
            }}>
            <Text
              text={item.clock}
              textWeight={'bold'}
              textSize={18}
              textColor={'white'}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
      />
    </View>
  );

  return (
    <View style={{flex: 1, height: windowHeight}}>
      <Text
        style={{margin: 10, fontSize: 20, color: 'gray'}}
        text={'Set Your available Hours for Appointment, Add private events'}
      />

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

      <ModalComp modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <AvailableTimesList />
      </ModalComp>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default Schedule;

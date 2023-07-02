import React, { useState, useEffect } from "react"
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "../utils/styles/colors";
import DriverDash from './driverDash';
import DriverQrActive from './driverQRActive';

export default function DriverTabView(props) {

  const renderTabBar = props => (
    <TabBar
      {...props}
      tabStyle={{ backgroundColor: PRIMARY_COLOR}}
      labelStyle={{ color: PRIMARY_TEXT_COLOR }}
      activeLabelStyle={{ color: 'white' }}
      indicatorStyle={{ backgroundColor: 'red' }} // Change the color here


    />
  );


  const FirstRoute = () => (
    <DriverDash data={props.route.params.data} nav={props.route.params.navigation} />
  );
  
  const SecondRoute = () => (
    <DriverQrActive data={props.route.params.data} nav={props.route.params.navigation}/>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [autoNumber, setautoNumber] = React.useState('');

  const [routes] = React.useState([
    { key: 'first', title: 'Dashboard' , style: {color : "red"} },
    { key: 'second', title: 'QR Status' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}

    />
  );
}
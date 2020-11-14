import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList1173046Navigator from '../features/ArticleList1173046/navigator';
import CalendarView2173045Navigator from '../features/CalendarView2173045/navigator';
import Dashboard23173044Navigator from '../features/Dashboard23173044/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList1173046: { screen: ArticleList1173046Navigator },
CalendarView2173045: { screen: CalendarView2173045Navigator },
Dashboard23173044: { screen: Dashboard23173044Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

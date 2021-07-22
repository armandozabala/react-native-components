
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';


const menuItems = [
      {
          name: 'Animation 101',
          icon: 'cube-outline',
          component: 'Animation101Screen'
      },
      {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
      },
      {
        name: 'Text Input',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
      },
      {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen'
      }
]

export const HomeScreen = () => {




    const itemSeparator = () => {
        return(
              <View style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
              }}>

              </View>
        )
    }

    return (
        <View style={{flex: 1, ...styles.globalMargin}}>

                  

                    <FlatList
                         data = { menuItems }
                         renderItem = { ({item})  =>  <FlatListMenuItem menuItem={item}/> }
                         keyExtractor={ (item) => item.name }
                         ListHeaderComponent = { () => <HeaderTitle title='Opciones de menú'/> }
                         ItemSeparatorComponent = {  itemSeparator }
                    />

        </View>
    )
}


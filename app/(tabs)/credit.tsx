import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

const credit = () => {
  return (
    <View>
      <Text
        variant="bodyLarge"
        className="text-party-one-liner"
        onPress={() => {
          console.log('this log is to test if prettier is working properly')
        }}>
        CREDIT PAGE
      </Text>
    </View>
  )
}

export default credit

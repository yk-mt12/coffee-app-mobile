import React from "react"
import { useSelector } from "react-redux";
import { Text, View } from '../Themed';


export const AmountView = () => {
  const amount = useSelector((state) => state.amount.amount)
  return (
    <View>
      <Text>{amount}</Text>
    </View>
  )
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function CustomButton(props) {
    const {color,text, setTextParent, ...restProps} = props;
    console.log(color,text);

    return (
        <Button
            onPress={() => { setTextParent(text)}}
            title={text}
            color={color}
            accessibilityLabel="Learn more about this purple button"
        />
    );
}

const styles = StyleSheet.create({
});

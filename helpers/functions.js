import React from 'react';
import { Avatar } from 'react-native-paper';

import { categories } from './style';
import ProfileFemale from '../assets/profiles/profileFemale'
import ProfileMale from '../assets/profiles/profileMale'

export const profilePicture = (profile, dimensions) => {
    if (profile === "M")
        return <ProfileMale width={dimensions} height={dimensions} />
    else
        if (profile === "F") {
            return <ProfileFemale width={dimensions} height={dimensions} />
        }
        else {
            return <Avatar.Image size={dimensions} source={{ uri: profile }} />
        }
}

export const chooseColor = (category) => {
    switch (category) {
        case "University":
            return categories.university
        case "Work":
            return categories.work
        case "Lifestyle":
            return categories.lifestyle
        case "Sport":
            return categories.sport
        case "Shopping":
            return categories.shopping
        case "Holiday":
            return categories.holiday
    }
}

export const compareTime = (obj1, obj2) => {
    if (obj1.time < obj2.time) {
        return -1;
    }
    if (obj1.time > obj2.time) {
        return 1;
    }
    return 0;
}

export const compareStartTime = (obj1, obj2) => {
    if (obj1.startTime < obj2.startTime) {
        return -1;
    }
    if (obj1.startTime > obj2.startTime) {
        return 1;
    }
    return 0;
}

export const compareProgress = (obj1, obj2) => {
    if (obj1.progress < obj2.progress) {
        return -1;
    }
    if (obj1.progress > obj2.progress) {
        return 1;
    }
    return 0;
}

export const occuarnce = (array) => {
    if (array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
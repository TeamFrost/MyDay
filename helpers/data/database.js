const KB = [
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '20:00-20:30 Monday Friday' }
    }, // 1
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Monday Friday' }
    }, // 2
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:00-21:00 Monday Thursday' }
    }, // 3
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '17:00-17:30 Tuesday Thursday' }
    }, // 4
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '17:00-18:00 Tuesday Thursday' }
    }, // 5
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '18:00-20:00 Tuesday Friday' }
    }, // 6
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '15:00-15:30 Weekend' }
    }, // 7
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '15:00-16:00 Weekend' }
    }, // 8
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '15:00-17:00 Weekend' }
    }, // 9
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '20:00-20:30 Tuesday Friday' }
    }, // 10
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Monday Friday' }
    }, // 11
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '18:00-20:00 Monday Saturday' }
    }, // 12
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Tuesday Thursday' }
    }, // 13
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Tuesday Thursday' }
    }, // 14
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Tuesday Friday' }
    }, // 15
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Monday Thursday' }
    }, // 16
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Wednesday Friday' }
    }, // 17
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Tuesday Friday' }
    }, // 18
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Thursday Saturday' }
    }, // 19
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Weekend' }
    }, // 20
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Monday Thursday' }
    }, // 21
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:00-09:30 Monday Wednesday' }
    }, // 22
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Wednesday Friday' }
    }, // 23
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Tuesday Saturday' }
    }, // 24
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '13:00-13:30 Weekend' }
    }, // 25
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '12:00-13:00 Weekend' }
    }, // 26
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '12:00-14:00 Tuesday Friday' }
    }, // 27
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '21:00-21:30 Monday Wednesday Friday' }
    }, // 28
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Monday Wednesday Friday' }
    }, // 29
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:30-21:30 Monday Thursday' }
    }, // 30
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '17:00-17:30 Tuesday Thursday Saturday' }
    }, // 31
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '17:00-18:00 Tuesday Thursday Saturday' }
    }, // 32
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '17:00-19:00 Monday Tuesday Friday Saturday' }
    }, // 33
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '14:00-14:30 Monday Wednesday Weekend' }
    }, // 34
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '14:00-15:00 Monday Wednesday Weekend' }
    }, // 35
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '15:30-17:30 Monday Thurday Weekend' }
    }, // 36
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '19:00-19:30 Tuesday Friday Saturday' }
    }, // 37
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:30-21:30 Monday Wednesday Friday Saturday' }
    }, // 38
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '18:00-20:00 Monday Wednesday Saturday' }
    }, // 39
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Tuesday Thursday Saturday' }
    }, // 40
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Tuesday Thursday Saturday' }
    }, // 41
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:30-11:30 Tuesday Friday Saturday' }
    }, // 42
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '11:00-11:30 Monday Thursday Friday' }
    }, // 43
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:30-10:30 Wednesday Friday Saturday' }
    }, // 44
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Tuesday Friday Saturday' }
    }, // 45
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Monday Thursday Saturday' }
    }, // 46
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Tuesday Wednesday Weekend' }
    }, // 47
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Monday Thursday Saturday' }
    }, // 48
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:00-09:30 Monday Wednesday Weekend' }
    }, // 49
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Monday Wednesday Friday' }
    }, // 50
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Tuesday Thursday Saturday' }
    }, // 51
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:30-10:00 Monday Thursday Weekend' }
    }, // 52
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '12:00-13:00 Monday Thursday Weekend' }
    }, // 53
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '11:00-13:00 Tuesday Friday Weekend' }
    }, // 54
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '20:00-20:30 Weekdays' }
    }, // 55
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Monday Tuesday Thursday Friday Saturday' }
    }, // 56
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:00-21:00 Weekdays' }
    }, // 57
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '19:30-20:00 Monday Tuesday Thursday Friday Saturday' }
    }, // 58
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '18:00-19:00 Weekdays' }
    }, // 59
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '17:30-19:30 Weekdays' }
    }, // 60
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '15:00-15:30 Monday Tuesday Thursday Friday Saturday' }
    }, // 61
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '15:00-16:00 Weekdays' }
    }, // 62
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '15:00-17:00 Monday Tuesday Thursday Friday Saturday' }
    }, // 63
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '21:00-21:30 Weekdays' }
    }, // 64
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '19:00-20:00 Weekdays' }
    }, // 65
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:00-21:00 Weekdays' }
    }, // 66
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Weekdays' }
    }, // 67
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Monday Tuesday Thursday Friday Saturday' }
    }, // 68
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Weekdays' }
    }, // 69
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:30-11:00 Weekdays' }
    }, // 70
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Weekdays' }
    }, // 71
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Monday Tuesday Thursday Friday Saturday' }
    }, // 72
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '11:00-11:30 Monday Tuesday Thursday Friday Saturday' }
    }, // 73
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '11:00-12:00 Weekdays' }
    }, // 74
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '11:00-13:00 Weekdays' }
    }, // 75
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:00-09:30 Weekdays' }
    }, // 76
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:30-10:30 Weekdays' }
    }, // 77
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Monday Tuesday Thursday Friday Saturday' }
    }, // 78
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '11:00-11:30 Monday Tuesday Thursday Friday Saturday' }
    }, // 79
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '12:00-13:00 Weekdays' }
    }, // 80
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '12:00-14:00 Weekdays' }
    }, // 81
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Sewing \ Painting' }
    }, // 82
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Reading' }
    }, // 83
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Gardening \ Fishing' }
    }, // 84
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Bird-Watching \ Hiking' }
    }, // 85
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Chess' }
    }, // 86
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Coding' }
    }, // 87
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Redecorate' }
    }, // 88
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "yes" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Running' }
    }, // 89
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Board Games' }
    }, // 90
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Movie Night' }
    }, // 91
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Barbeque' }
    }, // 92
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "yes" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Road Trip' }
    }, // 93
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Cooking with friends' }
    }, // 94
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "yes" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Group Study' }
    }, // 95
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "yes" }
        ],
        conclusion: { attribute: 'result', value: 'Camping' }
    }, // 96
    {
        premises: [
            { attribute: 'category', value: "lifestyle" },
            { attribute: 'alone', value: "no" },
            { attribute: 'relaxing', value: "no" },
            { attribute: 'inside', value: "no" },
            { attribute: 'equipment', value: "no" }
        ],
        conclusion: { attribute: 'result', value: 'Team sport' }
    }, // 97


];

export default KB;
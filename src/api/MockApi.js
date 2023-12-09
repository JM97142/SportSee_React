import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/Data-mock'

const id = 12

export const getUser = async () => {
    try {
        const data = USER_MAIN_DATA.find(user =>
            user.id === id
        )
        return data.keyData
    } catch {
    }
}

// Récupère User information
export const getUserInfo = async () => {
    try {
        const data = USER_MAIN_DATA.find(user =>
            user.id === id
        )
        return data.userInfos
    } catch {
    }
}

// Récupère Activity data
export const getActivity = async () => {
    try {
        const data = USER_ACTIVITY.find(user =>
            user.userId === id
        )
        const newData = activityData({
            sessions: data.sessions,
            day: data.sessions.day,
            kilogram: data.sessions.kilogram,
            calories: data.sessions.calories
        })
        return newData
    } catch {
    }
}
function activityData(originalData) {
    const { sessions } = originalData
    const newData = []
    let date
    sessions.forEach(session => {
        date = new Date(session.day)
        newData.push({
            day: date.getDate(),
            kilogrammes: session.kilogram,
            calories: session.calories
        })
    })
    return newData
}

// Récupère Average sessions data
export const getAverageSessions = async () => {
    try {
        const data = USER_AVERAGE_SESSIONS.find(user =>
            user.userId === id
        )
        const newData = daysFormat({
            sessions: data.sessions,
            day: data.sessions.day,
            sessionLength: data.sessions.sessionLength
        })
        return newData
    } catch {
    }
}
const day = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
}
function daysFormat(originalData) {
    const { sessions } = originalData
    const newData = []
    sessions.forEach(session => {
        newData.push({
            day: day[session.day],
            sessionLength: session.sessionLength
        })
    })
    return newData
}

// Récupère Performance data
export const getPerformance = async () => {
    try {
        const data = USER_PERFORMANCE.find(user =>
            user.userId === id
        )
        const newData = performanceFormat({
            data: data.data,
            kind: data.kind
        })
        newData.reverse()
        return newData
    } catch {
    }
}
const nameActivity = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité'
}
function performanceFormat(originalData) {
    const { data, kind } = originalData
    const newData = []
    data.forEach(performance => {
        newData.push({
            value: performance.value,
            kind: nameActivity[kind[performance.kind]]
        })
    })
    return newData
}

// Récupère Score data
export const getScore = async () => {
    try {
        const data = USER_MAIN_DATA.find(user =>
            user.id === id
        )
        const newData = scoreFormat({
            data: data
        })
        return newData
    } catch {
    }
}
function scoreFormat(originalData) {
    const { data } = originalData
    let score
    if (data.todayScore === undefined) {
        score = data.score
    } else {
        score = data.todayScore
    }
    const newData = []
    newData.push({
        userId: data.userId,
        todayScore: score * 100
    })
    newData.push({
        userId: data.userId,
        todayScore: 100,
        fill: '#ffffff00'
    })
    return newData
}
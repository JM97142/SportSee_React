import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/Data-mock'

const [siteUrl, search] = window.location.href.split('?')
const id = parseInt(siteUrl.split('/')[4]) || 12
const isMocked = search === 'isMocked'

export const getUserMocked = async () => {
    if (isMocked) {
        const data = USER_MAIN_DATA.find(user =>
            user.userId === id
        )
        return data.keyData
    }
}

export const getUserInfoMocked = async () => {
    if (isMocked) {
        const data = USER_MAIN_DATA.find(user =>
            user.userId === id
        )
        return data.userInfos
    }
}

export const getActivityMocked = async () => {
    if (isMocked) {
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

export const getAverageMocked = async () => {
    if (isMocked) {
        const data = USER_AVERAGE_SESSIONS.find(user =>
            user.userId === id
        )
        const newData = daysFormat({
            sessions: data.sessions,
            day: data.sessions.day,
            sessionLength: data.sessions.sessionLength
        })
        return newData
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

export const getPerfMocked = async () => {
    if (isMocked) {
        const data = USER_PERFORMANCE.find(user =>
            user.userId === id
        )
        const newData = performanceFormat({
            data: data.data,
            kind: data.kind
        })
        newData.reverse()
        return newData
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

export const getScoreMocked = async () => {
    if (isMocked) {
        const data = USER_MAIN_DATA.find(user =>
            user.userId === id
        )
        const newData = scoreFormat({
            data: data
        })
        return newData
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
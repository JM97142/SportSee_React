const id = 12
const server = 'http://localhost:3000/user/' + id

export const getUser = async () => {
    let response
    let data
    response = await fetch(server)
    data = await response.json()
    return data.data.keyData
}

// Récupère User information
export const getUserInfo = async () => {
    let response
    let data
    response = await fetch(server)
    data = await response.json()
    return data.data.userInfos
}

// Récupère Activity data
export const getActivity = async () => {
    let response
    let data
    response = await fetch(server + '/activity')
    data = await response.json()
    const newData = activityData({
        sessions: data.data.sessions,
        day: data.data.sessions.day,
        kilogrammes: data.data.sessions.kilogram,
        calories: data.data.sessions.calories
    })
    return newData
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
    let response
    let data
    response = await fetch(server + '/average-sessions')
    data = await response.json()
    const newData = daysFormat({
        sessions: data.data.sessions,
        day: data.data.sessions.day,
        sessionLength: data.data.sessions.sessionLength
    })
    return newData
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
    let response
    let data
    response = await fetch(server + '/performance')
    data = await response.json()
    const newData = performanceFormat({
        data: data.data.data,
        kind: data.data.kind
    })
    newData.reverse()
    return newData
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
    let response
    let data
    response = await fetch(server)
    data = await response.json()
    const newData = scoreFormat({
        data: data.data
    })
    return newData
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
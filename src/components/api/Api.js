
export const getUser = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    const userData = await response.json()

    return userData
}
export const getActivity = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const activityData = await response.json()

    return activityData
}

export const getAverageSessions = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const averageSessionData = await response.json()

    return averageSessionData
}

export const getPerformance = async (userId) => {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const performanceData = await response.json()

    return performanceData
}
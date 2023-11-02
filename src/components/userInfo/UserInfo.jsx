import { useEffect, useState } from "react"
import { getUser } from "../api/Api"

function UserInfos(props) {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchUserData()
    }, [])

    async function fetchUserData() {
        const userData = await getUser(props.userId)
        const infosFormatted = {
            age: userData.data.UserInfos.age,
            firstName: userData.data.UserInfos.firstName,
            lastName: userData.data.UserInfos.lastName
        }
        setUserData(infosFormatted)
    }

    return (
        <div><h1>{userData}</h1></div>
    )
}

export default UserInfos
import './App.css';
import { useState, useEffect } from 'react';
// API
import { getUser, getUserInfo } from '../../components/api/Api';
// Components
import UserActivity from '../../components/UserActivity/UserActivity';
import UserAverageSessions from '../../components/UserAverageSessions/UserAverageSessions';
import UserPerformance from '../../components/UserPerformance/UserPerformance';
import UserScore from '../../components/UserScore/UserScore';

import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import Card from '../../components/Card/Card';

function App() {
  const [user, setUser] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const user = await getUser()
      setUser(user)
      const userInfo = await getUserInfo()
      setUserInfo(userInfo)
    }
    catch {
      setError(true)
    }
  }

  if (error) {
    return (
      <div className='error'>
        <h1>404</h1>
        <p>Impossible de récupérer les données de l'utilisateur.</p>
      </div>)
  }
  return (
    <div className='home-body'>
      <h1>Bonjour <span className='user-name'>{userInfo?.firstName}</span></h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
      <div className='-wrapper'>
        <div className='allstats-wrapper'>
          <div className='activity-wrapper'>
            <UserActivity />
          </div>
          <div className='stats-wrapper'>
            <UserAverageSessions />
            <UserPerformance />
            <UserScore />
          </div>
        </div>
        <div className='cards-wrapper'>
          <Card icon={caloriesIcon} unit={user?.calorieCount} type='Calories' />
          <Card icon={proteinIcon} unit={user?.proteinCount} type='Protéines' />
          <Card icon={carbsIcon} unit={user?.carbohydrateCount} type='Glucides' />
          <Card icon={fatIcon} unit={user?.lipidCount} type='Lipides' />
        </div>
      </div>
    </div>
  )
}

export default App;

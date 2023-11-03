import './App.css';
import { useState, useEffect } from 'react';
// API
import { getUser } from '../../components/api/Api';
// Components
import UserInfos from '../../components/UserInfo/UserInfo';
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
  const [user, setUser] = useState()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    const user = await getUser()
    setUser(user)
  }
  return (
    <div className='home-body'>
      <div className='graph-activity'>
        <UserActivity />
      </div>
      <div className='graph-'>
        <UserAverageSessions />
      </div>
      <div className='graph-'>
        <UserPerformance />
      </div>
      <div className='graph-'>
        <UserScore />
      </div>
      <div className='cards-wrapper'>
        <Card icon={caloriesIcon} unit={user?.calorieCount} type='Calories' />
        <Card icon={proteinIcon} unit={user?.proteinCount} type='Protéines' />
        <Card icon={carbsIcon} unit={user?.carbohydrateCount} type='Glucides' />
        <Card icon={fatIcon} unit={user?.lipidCount} type='Lipides' />
      </div>
    </div>
  )
}

export default App;

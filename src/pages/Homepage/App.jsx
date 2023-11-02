import './App.css';
// Components
import UserInfos from '../../components/UserInfo/UserInfo';
import UserActivity from '../../components/UserActivity/UserActivity';
import UserAverageSessions from '../../components/UserAverageSessions/UserAverageSessions';
import UserPerformance from '../../components/UserPerformance/UserPerformance';
import UserScore from '../../components/UserScore/UserScore';

function App() {
  const userId = '12'

  return (
    <div>
      {/* <UserInfos userId={userId} /> */}
      <UserActivity userId={userId} />
      <UserAverageSessions userId={userId} />
      <UserPerformance userId={userId} />
      <UserScore userId={userId} />
    </div>
  );
}

export default App;

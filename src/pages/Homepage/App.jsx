import './App.css';
// Components
import UserActivity from '../../components/userActivity/UserActivity';
import UserAverageSessions from '../../components/userAverageSessions/UserAverageSessions';

function App() {
  const userId = '12'

  return (
    <div>
      <UserActivity userId={userId} />
      <UserAverageSessions userId={userId} />
    </div>
  );
}

export default App;

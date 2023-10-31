import './App.css';
import UserActivity from '../../components/userActivity/UserActivity';

function App() {
  const userId = '12'

  return (
    <div>
      <UserActivity userId={userId} />
    </div>
  );
}

export default App;

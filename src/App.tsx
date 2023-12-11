import "./App.css";
import UserMessage from "./user-message/user-message";

function App() {
  const response = {
    age: 20,
    isLoggedIn: true,
    isSubscribed: false,
  };
  return (
    <div>
      <UserMessage
        age={response.age}
        isLoggedIn={response.isLoggedIn}
        isSubscribed={response.isSubscribed}
      />
    </div>
  );
}

export default App;

import { getUserMessage } from "./get-user-message";
import styles from "./user-message.module.css";

export interface UserMessageProps {
  age: number;
  isLoggedIn: boolean;
  isSubscribed: boolean;
}

export default function UserMessage({
  age,
  isLoggedIn,
  isSubscribed,
}: UserMessageProps): JSX.Element {
  const message = getUserMessage({ age, isLoggedIn, isSubscribed });

  return (
    <div className={styles.container}>
      <p className={styles.message}>TDD FTW :)</p>
    </div>
  );
}

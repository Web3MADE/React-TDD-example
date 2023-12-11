import { UserMessageProps } from "./user-message";

export function getUserMessage({
  age,
  isLoggedIn,
  isSubscribed,
}: UserMessageProps) {
  console.log(age, isLoggedIn, isSubscribed);
  if (age >= 18) {
    return "please log in";
  }

  if (age < 18) {
    return "you are under 18";
  }
}

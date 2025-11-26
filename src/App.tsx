import { useState } from "react";
import "./App.css";
import Review from "./components/Review/Review";
import UserReviews from "./components/UserReviews/UserReviews";
import clsx from "clsx";
import ReviewForm from "./components/ReviewForm/ReviewForm";

function App() {
  const [isOpenComments, setIsOpenComments] = useState(false);

  return (
    <div>
      <Review setIsOpenComments={setIsOpenComments} />

      <div className={clsx(isOpenComments ? "contentOpen" : "contentClosed")}>
        <UserReviews />
        <UserReviews />
        <UserReviews />
        <ReviewForm setIsOpenComments={setIsOpenComments} />
      </div>
    </div>
  );
}

export default App;

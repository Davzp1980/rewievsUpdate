import clsx from "clsx";
import css from "./UserReviews.module.css";
import { useState } from "react";

const name = "Arnold";
const surname = "Schwarzenegger";

function UserReviews() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(150);
  const [ratingStars, setRatingStars] = useState(0);
  const [animate, setAnimate] = useState(false);

  const shortSurname = surname.slice(0, 8);

  const text =
    "Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и море теплое и пиво холодное и обслуживание нормас. приеду еще в это райское место и буду наслаждатся солнышком. Благодарю!";

  function setLiked() {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));

    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  }

  function SetRating(index: number) {
    setRatingStars(index + 1);
  }

  return (
    <div className={css.container}>
      <div className={css.reviewMainContainer}>
        <div className={css.namesAndDateDiv}>
          <div>
            <p className={css.nameP}>{name}</p>
            <p className={css.nameP}>
              {surname.length > 8 ? shortSurname + "..." : surname}
            </p>
          </div>

          <p className={css.dateP}>19 Вер 2021</p>
          <p className={css.hotelNameP}>Hilton JBSX</p>
        </div>

        <div className={css.firstDiv}>
          <div className={css.photoContainer}>
            <div className={css.photoDiv}>
              <img
                className={css.photoUserImg}
                src="/img/Lama.png"
                alt="authors photo"
              />
              <div className={css.karmaDiv}>
                <p className={css.karmaText}>Booking Karma</p>
                <p className={css.karmaNumber}>36</p>
              </div>
            </div>
          </div>

          <div className={css.raringStarDiv}>
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                className={css.starSvg}
                key={index}
                onClick={() => SetRating(index)}
              >
                <use
                  href={
                    index < ratingStars
                      ? "/sprite.svg#blurStar"
                      : "/sprite.svg#GrayStar"
                  }
                ></use>
              </svg>
            ))}
          </div>

          <div className={css.photoContainer}>
            <div className={css.hotelPhotoDiv}>
              <img src="/img/author2.png" alt="authors photo" />
              <div className={css.ratingDiv}>
                <p className={css.ratingNumber}>7.2</p>
              </div>
            </div>
          </div>
        </div>

        <p className={css.reviewTextP}>{text}</p>

        <div className={css.usersPhotoDiv}>
          <img
            className={css.photoImg}
            src="/img/hotel-big.jpg"
            alt="hotel photo"
          />
          <img
            className={css.photoImg}
            src="/img/hotel-big.jpg"
            alt="hotel photo"
          />
        </div>

        <div className={css.commentsAndLikesDiv}>
          <div className={css.svgPlusText}>
            <div
              className={clsx(
                css.svgDivLikes,
                isLiked && css.svgDivLikeD,
                animate ? css.active : ""
              )}
              onClick={setLiked}
            ></div>
            <p className={css.pText}>{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviews;

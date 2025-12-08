import { useState } from "react";
import type { ReviewProps } from "../Review/Review";
import css from "./ReviewForm.module.css";

function ReviewForm({ setIsOpenComments }: ReviewProps) {
  const [textLength, setTextLength] = useState(0);
  function sendForm(e: React.FormEvent<HTMLFormElement>) {
    setTextLength(e.currentTarget.length);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("comment");

    console.log("Comment:", text);
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextLength(e.currentTarget.value.length);
  }
  return (
    <div className={css.reviewFormContainer}>
      <h2 className={css.h2}>Напишите комментарий {textLength}/500</h2>
      <form onSubmit={sendForm}>
        <div className={css.inputDiv}>
          <textarea
            className={css.input}
            name="comment"
            maxLength={500}
            onChange={handleChange}
          />

          <p className={css.lettersCounter}>{textLength}/500</p>
        </div>

        <button className={css.submitBtn} type="submit">
          Отправить
        </button>
      </form>
      <button
        className={css.closeBtn}
        type="button"
        onClick={() => setIsOpenComments((prev) => !prev)}
      >
        <svg className={css.closeBtnSvg}>
          <use href="/sprite.svg#arrow-left"></use>
        </svg>
      </button>

      <label className={css.downloadLabel}>
        <svg className={css.downloadSvg}>
          <use href="sprite.svg#download"></use>
        </svg>
        <input className={css.downloadInput} type="file" hidden />
      </label>
    </div>
  );
}

export default ReviewForm;

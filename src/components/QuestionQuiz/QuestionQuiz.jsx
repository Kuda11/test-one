import React from "react";
import styles from "./QuestionQuiz.module.scss";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const QuestionQuiz = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault()
    const strAnswer = data.answer.toLowerCase()
    if (strAnswer === 'two' || strAnswer === '2') {
      return alert('Well done thats right')
    } else {
      alert('Wrong Answer')
    }
  }
  return (
    <div className={styles.backgroundImg}>
      <h1 className={styles.title}>One Question Quiz!!</h1>
      <p className={styles.info}> <strong> Answer the question if correct you get on with your day!!</strong> </p>
      <div className={styles.GameContainer}>
        <h2>How many breeds of Elephants are there?</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <Form.Label>Answer:</Form.Label>
            <Form.Control type="text" name="answer" ref={register} placeholder="Answer" />
          </div>
          <div className={styles.Btn}>
            <Button className={styles.Btn} variant="danger" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default QuestionQuiz;

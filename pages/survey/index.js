import Head from 'next/head'
import Layout from '@components/Layout'
import Form from '@components/Form'
import TextField from '@components/TextField'
import Submit from '@components/Submit'

import styles from '../../styles/rsvp.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function SurveyHome() {
  const router = useRouter();
  const error = router.query.error;
  let surveyEnabled = false;

  useEffect(() => {
    surveyEnabled = process.env.SURVEY_ENABLED;
  }, []);

  return (
    <>
      <Head>
        <title>Guest Survey :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>

      {surveyEnabled ? <>
        <h3>Look Yourself Up</h3>
        <Form action="/api/guests/auth" method="get" error={error} className={styles.form}>
          <TextField name="name" label="Name" placeholder="Firstname Lastname" hero />
          <input type="hidden" name="redirect" value="survey" />
          <Submit id="auth" label="Look Me Up" />
        </Form>

        <p className={styles.footer}>
          Having trouble? E-mail or text us!
          <br /><br />
          <a href="/#content">Return home</a> for more wedding information.
        </p>
      </> : <>
        <h3>Thank you for your guest survey response!</h3>
        <p className={styles.footer}>
          <a href="/#content">Return home</a> for more wedding information.
        </p>
      </>
      }
    </>
  );
};

SurveyHome.getLayout = function getLayout(page) {
  return (
    <Layout ctaText="More Details" ctaHref="/" noHeaderOnMobile>
      {page}
    </Layout>
  )
}

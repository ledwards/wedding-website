import Head from 'next/head'
import Layout from '@components/Layout'
import Form from '@components/Form'
import TextField from '@components/TextField'
import Submit from '@components/Submit'

import styles from '../../styles/rsvp.module.css'
import { useRouter } from 'next/router'

export default function RsvpHome() {
  const router = useRouter();
  const error = router.query.error;

  return (
    <>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>

      <h3>Find Your Invitation</h3>
      <Form action="/api/guests/auth" method="get" error={error} className={styles.form}>
        <TextField name="name" label="Name" placeholder="Firstname Lastname" hero />
        <p className={styles.or}>&mdash;or&mdash;</p>
        <TextField name="email" label="Email Address" placeholder="you@emailaddress.com" hero />
        <input type="hidden" name="redirect" value="rsvp" />
        <Submit id="auth" label="Look Me Up" />
      </Form>

      <p className={styles.footer}>
        Having trouble? E-mail us at <a href="mailto:aloha@leenicolewedding.com">aloha@leenicolewedding.com</a>
        <br /><br />
        <a href="/#content">Return home</a> for more wedding information.
      </p>
    </>
  );
};

RsvpHome.getLayout = function getLayout(page) {
  return (
    <Layout ctaText="More Details" ctaHref="/" noHeaderOnMobile>
      {page}
    </Layout>
  )
}

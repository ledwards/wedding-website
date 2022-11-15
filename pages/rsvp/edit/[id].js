import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head'
import Layout from '@components/Layout'
import RsvpFields from '@components/RsvpFields'
import Form from '@components/Form'
import Submit from '@components/Submit'

import styles from '../../../styles/rsvp.module.css'

export default function RsvpEdit(props) {
  const [currentUser, _setCurrentUser] = useState(props.user);

  return (
    <>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>

      <h3>Early R.S.V.P.</h3>

      <p className={styles.intro}>
        Aloha, {currentUser.name.split(" ")[0]}!
        <br />
        We've reserved {currentUser.party.length + 1} seat{currentUser.party.length > 0 ? "s" : ""} for your party.
        <br />
        Please make sure the information below is accurate, and then click submit.
      </p>

      <Form action={`/api/guests/update`} method="get" nested>
        <RsvpFields user={currentUser} index={0} />

        {currentUser.party.map((u, index) => {
          return <RsvpFields key={index} user={u} index={index + 1} />
        })}

        <Submit label="Save Response" />
      </Form>

    </>
  );
};

RsvpEdit.getLayout = function getLayout(page) {
  return (
    <Layout ctaText="More Details" ctaHref="/" scrollable noHeaderOnMobile>
      {page}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.SITE_URL}/api/guests/${context.query.id}`);

  return {
    props: {
      user: res.data
    },
  };
}

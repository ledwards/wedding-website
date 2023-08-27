import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head';
import Layout from '@components/Layout'
import SurveyResponse from '@components/SurveyResponse';

import styles from '../../styles/rsvp.module.css'

export default function SurveyShow(props) {
  const [currentUser, setCurrentUser] = useState(props.user);
  const party = [currentUser].concat(currentUser.party);

  return (
    <div className={styles.thankYou}>
      <Head>
        <title>Guest Survey :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>
      <h3>Your Responses to the Guest Survey</h3>

      <p className={styles.intro}>
        Aloha, {currentUser.name.split(" ")[0]}!
        <br /><br />
        Below, please find the responses you have given to our guest survey for your reference.
        Please note that at this point, we have finalized details with our vendors and cannot
        any make changes. We are so excited to celebrate with you!
      </p>

      {
        party.map((u, index) => {
          return <SurveyResponse key={index} user={u} index={index} />
        })
      }
    </div>
  )
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.SITE_URL}/api/guests/${context.query.id}`);

  return {
    props: {
      user: res.data
    },
  };
}

SurveyShow.getLayout = function getLayout(page) {
  return (
    <Layout noHeaderOnMobile>
      {page}
    </Layout>
  )
}

import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head';
import Layout from '@components/Layout'
import styles from '../../styles/ThankYou.module.css'

export default function SurveyShow(props) {
  const [currentUser, setCurrentUser] = useState(props.user);
  const partyMembersNames = [currentUser.name].concat(currentUser.party.map(u => u.name));
  let joinedPartyMembersNames;
  if (partyMembersNames.length == 1) {
    joinedPartyMembersNames = currentUser.name;
  } else {
    joinedPartyMembersNames = partyMembersNames.slice(0, -1).join(', ') + ' & ' + partyMembersNames.slice(-1);
  }

  return (
    <div className={styles.thankYou}>
      <Head>
        <title>Survey :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>

      <h3>Thank you!</h3>
      <p>We recorded your guest survey response{partyMembersNames.length > 1 ? 's' : ''} for {joinedPartyMembersNames}.</p>
      <br />
      <p>Please <a href="/#content">return to our homepage</a> for more details about the event.</p>
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
    <Layout ctaText="More Details" ctaHref="/" noHeaderOnMobile>
      {page}
    </Layout>
  )
}

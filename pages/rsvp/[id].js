import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head';
import Layout from '@components/Layout'

export default function RsvpEdit(props) {
  const [currentUser, setCurrentUser] = useState(props.user);
  const partyMembersNames = [currentUser.name].concat(currentUser.party.map(u => u.name));
  let joinedPartyMembersNames;
  if (partyMembersNames.length == 1) {
    joinedPartyMembersNames = currentUser.name;
  } else {
    joinedPartyMembersNames = partyMembersNames.slice(0, -1).join(', ') + ' & ' + partyMembersNames.slice(-1);
  }

  return (
    <>
      <Head>
        <title>RSVP :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>

      <h3>Thank you!</h3>
      <p>We saved the reservation{partyMembersNames.length > 1 ? 's' : ''} for {joinedPartyMembersNames}</p>
    </>
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

RsvpEdit.getLayout = function getLayout(page) {
  return (
    <Layout ctaText="More Details" ctaHref="/">
      {page}
    </Layout>
  )
}

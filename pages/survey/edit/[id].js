import React, { useState } from 'react'
import axios from 'axios'

import Head from 'next/head'
import Layout from '@components/Layout'
import SurveyFields from '@components/SurveyFields'
import Form from '@components/Form'
import Submit from '@components/Submit'

import styles from '../../../styles/rsvp.module.css'

export default function SurveyEdit(props) {
  const [currentUser, _setCurrentUser] = useState(props.user);

  return (
    <>
      <Head>
        <title>Guest Survey :: Lee & Nicole Wedding 09.09.2023</title>
      </Head>

      <h3>Complete the Guest Survey</h3>

      <p className={styles.intro}>
        Aloha, {currentUser.name.split(" ")[0]}!
        <br /><br />
        We've reserved {currentUser.party.length + 1} seat{currentUser.party.length > 0 ? "s" : ""} for your party.
        <br /><br />
        Please share any serious dietary restrictions you and your party have so that we can make plans to accomodate them.
        Let us know where you are staying, so that we can allocate shuttle services accordingly.
      </p>

      <Form action={`/api/guests/update`} method="get" nested>
        <input type="hidden" name="redirect" value="survey/edit" />
        <SurveyFields user={currentUser} index={0} />

        {currentUser.party.map((u, index) => {
          return <SurveyFields key={index} user={u} index={index + 1} />
        })}

        <Submit label="Save Response" />
      </Form>

    </>
  );
};

SurveyEdit.getLayout = function getLayout(page) {
  return (
    <Layout scrollable noHeaderOnMobile>
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

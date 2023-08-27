import NavButton from './NavButton'
import styles from '../styles/ButtonNavigation.module.css'
import { withRouter } from 'next/router';

function ButtonNavigation({ router }) {

  return (
    <nav id={styles.buttonNavigation}>
      {router.asPath !== '/schedule' &&
        <NavButton text="Wedding & Shuttle Schedule" href="/schedule" />
      }

      {router.asPath !== '/faq' &&
        <NavButton text="Frequently Asked Questions" href="/faq" />
      }

      {router.asPath !== '/local-recommendations' &&
        <NavButton text="Local Recommendations" href="/local-recommendations" />
      }

      {router.asPath !== '/travel-information' &&
        <NavButton text="Travel Information" href="/travel-information" />
      }

      <NavButton text="Wedding Registry" href="https://www.crateandbarrel.com/gift-registry/nicole-wilke-and-lee-edwards/r6745137" target="_blank" />
    </nav>
  );
}

export default withRouter(ButtonNavigation);

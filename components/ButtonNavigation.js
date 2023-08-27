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

      {router.asPath !== '/food-activity' &&
        <NavButton text="Food & Activity Recommendations" href="/food-activity" />
      }

      {router.asPath !== '/lodging-transportation' &&
        <NavButton text="Lodging & Transportation Info" href="/lodging-transportation" />
      }

      {router.asPath !== '/registry' &&
        <NavButton text="Wedding Registry" href="/registry" />
      }
    </nav>
  );
}

export default withRouter(ButtonNavigation);

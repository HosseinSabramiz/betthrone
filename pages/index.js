import Head from 'next/head'
import HomeCountdown from '../src/component/countdownHome/HomeCountdown'
import Footer from '../src/component/footer/Footer'
import GotoTop from '../src/component/GotoTop/GotoTop'
import Jackpot from '../src/component/Jackpot/Jackpot'
import LogoRedAndBlue from '../src/component/logobetweentopgames/LogoRedAndBlue'
import RegisterInHome from '../src/component/RegisterInHome/RegisterInHome'
import TopGames from '../src/component/TopGames/TopGames'
import UnderHeader from '../src/component/UnderHeader/UnderHeader'
import Winners from '../src/component/Winners/Winners'

export default function Home() {






  return (
        <div>
          <Head>
            <title>BETTHRONE</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <UnderHeader />
          <TopGames />
          <LogoRedAndBlue />
          <div className={"bg3d float-left w-100 mainJP"}>
          <Jackpot />
          <Winners />
          <RegisterInHome />
          <HomeCountdown />
          <GotoTop />

          </div>
          <Footer />

      </div>
 
  )
}

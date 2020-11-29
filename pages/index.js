import Head from 'next/head'
import HomeCountdown from '../src/component/countdownHome/HomeCountdown'
import Jackpot from '../src/component/Jackpot/Jackpot'
import LogoRedAndBlue from '../src/component/logobetweentopgames/LogoRedAndBlue'
import RegisterInHome from '../src/component/RegisterInHome/RegisterInHome'
import TopGames from '../src/component/TopGames/TopGames'
import Winners from '../src/component/Winners/Winners'

export default function Home() {
  return (
        <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <TopGames />
          <LogoRedAndBlue />
          <Jackpot />
          <Winners />
          <RegisterInHome />
          <HomeCountdown />

      </div>
 
  )
}

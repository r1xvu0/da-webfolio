import CallLeft from '../components/CallLeft'
import CallRight from '../components/CallRight'
import Hero from '../components/Hero'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <CallRight
        image="https://simple-nft-rpg.vercel.app/pixel-bg.jpg"
        topTitle="Another NFT Project - ETA (2022)"
        title="Simple NFT RPG"
        description="SNR is new NFT Project that also incorporates a very simple RPG elements for you to enjoy. Project is aimed to hopefuly launch in early 2022."
        tools="React, Web3, Supabase"
      />
      <CallLeft
        image="https://i.ibb.co/ZYXw11D/fantomies.png"
        topTitle="NFT on Fantom Network"
        title="Fantomies NFT"
        description="Fantomies are upcomming FTM/Polygon Network NFT. Currently I'm working on the Pixel Art and will soon move to the programming of Smart Contract."
        tools="Pixelorama, Solidity, React, Web3"
        btnText="Find out More"
        link="https://r1xvu0.vercel.app/nft-fantoms"
        />
      <CallRight
        image="https://ipfs.io/ipfs/Qma61dDDjWRnpgKiBwuAit85RXUKXpCDxsnizritFJBVju?filename=avaxbobs_banner.png"
        topTitle="NFT Project LIVE on Rinkeby"
        title="AVAXBobs"
        description="AVAXBobs is an NFT series of randomly generated robots, all with unique and special traits with only supply of 2222 pieces. Not a single one is like the other."
        tools="Svelte, Web3"
        btnText="Visit AVAXBobs"
        link="https://avaxbobs.vercel.app"
        btnText2="Visit OpenSea"
        link2="https://testnets.opensea.io/collection/avaxbobs-testnet-1"
      />
      <CallLeft 
        image="https://champion-maker.netlify.app/img/yasuo.6b455849.png"
        topTitle="Build your own Champion"
        title="LoL Champion Maker"
        description="One of my early projects in web development using Quasar Framework. Unfortunately not finished, but mostly working as it should have. The project is a combination of Quasar Framework paired with Firebase SDK."
        tools="Quasar, Firebase"
        btnText="Visit Champion Maker"
        link="https://champion-maker.netlify.app/#/"
      />
      <CallRight
        image="https://i.ibb.co/pbMt990/Screenshot-20211012-092924.png"
        topTitle="Text-Based Command-line Python RPG"
        title="pyRPG"
        description="My old Python script that incorporates some ideas into the Text-Based RPG genre. Pretty old, still working, probably bugged at some points."
        tools="Python"
        btnText="GITHUB"
        link="https://github.com/r1xvu0/pyRPG"
      />
      <CallLeft
        image="https://png2.cleanpng.com/sh/fcf8205513a97cd08576dd22788fbacc/L0KzQYi4UsIxN6ZqfZGAYUPkQoi3UsMyPGdnS5CCNUKzRYm8VcE2OWQ8TqIAMUS1QIKBUsE4Ol91htk=/5a3a27023146b3.75205855151376051420182172.png"
        topTitle="Python - Yannick's Bitcoin Profit Multi-Tool"
        title="PyYBPMT"
        description="My set of old scripts I used to count my profits in Crypto trading. Project is not finished, yet doesn't feel extra bad to use."
        tools="Python + (some API?)"
        btnText="GITHUB"
        link="https://github.com/r1xvu0/pyYBPMT"
      />
      
    </>
  )
}

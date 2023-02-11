import React, { Fragment } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers, BigNumber } from "ethers";

const Home = () => {

    const {
        activate,
        deactivate,
        library,
        account
    } = useWeb3React();

    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 97],
    });

    const onConnectClicked = async () => {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    };

    const onDisconnectClicked = () => {
        try {
            deactivate();
        } catch (ex) {
            console.log(ex);
        }
    };

  return (
    <>
      <div className="body-div w-auto h-auto sm:h-screen md:h-screen">
        <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-none grid-cols-12 pt-2 px-2 md:px-10 h-36">
          <div className="row-span-auto col-span-12 sm:col-span-7 md:col-span-7 flex flex-auto justify-center sm:justify-around md:justify-start gap-2">
            <img className="grow w-8 sm:w-12 h-8 sm:h-12 my-auto ml-4" src="assets/image/discord.png" alt="" />
            <img className="grow w-8 sm:w-12 h-8 sm:h-12 my-auto mx-2" src="assets/image/twitter.png" alt="" />
            <img className="grow my-auto top-title w-64" src="assets/image/toptitle.png" alt="" />
          </div>
          {/* <div className="col-span-2">
            <p className="logo-title font-['Source_Code_Pro'] text-white text-[33px] text-center font-semibold">The Pickled</p>
          </div>
          <div className="row-span-1 col-span-2">
            <p className="tracking-widest logo_title text-white text-[50px] text-center font-bold
            ">Lottery</p>
          </div> */}
          {/* <div className="row-span-1 col-span-7 sm:col-span-3 flex flex-auto justify-start pl-3">
          </div> */}
          <div className="row-span-auto col-span-12 sm:col-start-8 md:col-start-9 sm:col-span-5 md:col-span-4 my-auto flex flex-auto justify-evenly gap-1">
            <div className="top-button sm:text-[19px] md:text-[20px] py-[18px]">Result</div>
            <div className="top-button connect-button sm:text-[19px] md:text-[20px] py-[18px]">Connect Wallet</div>
          </div>
        </div>
        <div className="main-div mx-auto w-11/12 sm:w-9/12">
          <div className="jackpot-div grid grid-flow-col grid-cols-2">
            <div className="col-span-1 pl-6 sm:pl-10 z-20">
              <p className="jackpot-title text-[30px] sm:text-[45px] mt-12">Jackpot</p>
              <p className="sol-title text-[30px] sm:text-[50px] md:text-[60px]">2500 SOL</p>
              <div className="buy-button mt-[70px] sm:mt-[120px] lg:mt-[180px] mb-[20px] sm:mb-[30px] py-[5px] w-[110px] sm:w-40 text-[15px] sm:text-[20px]">BUY TICKET</div>
            </div>
            <img className="col-span-1 justify-self-end hologram m-auto sm:my-[40px] h-[200px] w-[220px] sm:h-[300px] sm:w-96 lg:h-[400px] lg:w-[500px] sm:mb-[30px] z-20" alt=""></img>
            <div className="solana-div h-5/6 z-10">
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-3 sm:grid-rows-none md:grid-cols-3 gap-2 sm:gap-1 md:gap-2 lg:gap-8 mt-[10px] info-total-div">
            <div className="md:col-span-1 info-div px-[30px] sm:px-[20px] py-[15px] sm:py-[20px]">
              <p className="info-title text-[28px] md:text-[36px] lg:text-[45px]">3h 16m 35s</p>
              <p className="deps-title text-[23px] md:text-[30px]">Round 3</p>
            </div>
            <div className="md:col-span-1 info-div px-[30px] sm:px-[20px] py-[15px] sm:py-[20px]">
              <p className="info-title text-[28px] md:text-[36px] lg:text-[45px]">5678/10000</p>
              <p className="deps-title text-[23px] md:text-[30px]">Tickets Sold</p>
            </div>
            <div className="md:col-span-1 info-div px-[30px] sm:px-[20px] py-[15px] sm:py-[20px]">
              <p className="info-title text-[28px] md:text-[36px] lg:text-[45px]">2500 SOL</p>
              <p className="deps-title text-[23px] md:text-[30px]">Jackpot</p>
            </div>
          </div>
        </div>
        {/* <div className="solana-div top-[150px] w-full h-1/3 z-10">
        </div> */}
      </div>
    </>
  );
}

export default Home;

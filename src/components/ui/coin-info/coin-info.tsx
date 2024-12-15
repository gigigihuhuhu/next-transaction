"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Coin } from "@/model/coin";
import { Market } from "@/model/market";
import { SettingsIcon } from "@/components/icons";
import MiniChart from "@/components/ui/coin-info/lw-minichart";
import { getDisplayAccTradePrice, getDisplayPrice } from "@/utils/currency";
import Links from "@/components/ui/links/links";
import { useCoinData } from "@/context/coin-data-context";

const CoinInfo = ({ market }: { market: string }) => {
  const { coins } = useCoinData();
  const [coin, setCoin] = useState<Coin>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [marketInstance, setMarketInstance] = useState<Market>(
    Market.getDefaultMarket()
  );

  const parsedMarket = Market.fromObject(JSON.parse(market));
  useEffect(() => {
    setMarketInstance(parsedMarket);
    setCoin(coins?.findCoin(parsedMarket.marketCode));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market,coins]);

  if (!coin) {
    return <div></div>;
  }

  return (
    <>
      <div className="px-4 flex flex-row items-center justify-between border-b border-solid border-gray-200">
        <div className="flex flex-row items-center grow">
          <Image
            src={`https://cdn.kyungsu.com/samples/coin/${coin.coinCode()}.png`}
            alt={coin.coinCode()}
            width={26}
            height={26}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsqQcAAZ0BDTSBuAQAAAAASUVORK5CYII="
            priority
          ></Image>
          <h2 className="ml-2 text-xl font-bold">{`${marketInstance.koreanName}`}</h2>
          <h3 className="ml-1 text-xs text-gray-500 font-medium">{`${coin.coinCode()}/${coin.currencyType()}`}</h3>
        </div>

        <div className="*:w-32 *:text-lg *:font-bold *:py-1 *:transition-colors *:duration-200">
          <button
            className={
              activeTab === 0
                ? "text-blue-600 border-b-4 border-blue-600"
                : "hover:border-b-4 hover:border-gray-400 hover:text-gray-800"
            }
            onClick={() => setActiveTab(0)}
          >
            시세
          </button>
          <button
            className={
              activeTab === 1
                ? "text-blue-600 border-b-4 border-blue-600"
                : "hover:border-b-4 hover:border-gray-400 hover:text-gray-800"
            }
            onClick={() => setActiveTab(1)}
          >
            정보
          </button>
        </div>

        <div className="border-l border-gray-200">
          <button className="pt-3 pb-3 pl-4">
            <SettingsIcon></SettingsIcon>
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={
            "w-full absolute overflow-hidden " +
            (activeTab === 0 ? "block" : "hidden")
          }
        >
          <div className="grid grid-cols-4 py-4 px-5 justify-items-stretch gap-6">
            <div
              className={
                "flex flex-col justify-center *:flex *:flex-row *:gap-2 *:items-end" +
                (coin.change == "FALL" ? " text-green-700" : "") +
                (coin.change == "RISE" ? " text-red-600" : "")
              }
            >
              <div>
                <h1 className="text-3xl font-bold">
                  {getDisplayPrice(coin.trade_price, coin.currencyType())}
                </h1>
                <h3 className="text-sm">{coin.currencyType()}</h3>
              </div>
              <div className="flex flex-row items-center font-semibold">
                <h3>{`${
                  (coin.signed_change_rate > 0 ? "+" : "") +
                  (coin.signed_change_rate * 100).toFixed(2)
                }%`}</h3>
                <h3>
                  {(coin.change == "FALL" ? "▼" : "") +
                    (coin.change == "RISE" ? "▲" : "") +
                    getDisplayPrice(
                      coin.signed_change_price,
                      coin.currencyType()
                    )}
                </h3>
              </div>
            </div>
            <div className="justify-self-end">
              <MiniChart market={market}></MiniChart>
            </div>
            <div className="flex flex-col *:flex *:flex-row *:justify-between *:items-center font-medium">
              <div className="">
                <h3 className="text-xs text-gray-700">고가</h3>
                <h3 className="font-semibold text-sm text-red-600">
                  {getDisplayPrice(coin.high_price, coin.currencyType())}
                </h3>
              </div>
              <hr className="my-2" />
              <div>
                <h3 className="text-xs text-gray-700">저가</h3>
                <h3 className="font-semibold text-sm text-green-700">
                  {getDisplayPrice(coin.low_price, coin.currencyType())}
                </h3>
              </div>
            </div>

            <div className="flex flex-col *:flex *:flex-row *:justify-between *:items-center">
              <div className="font-medium">
                <h3 className="text-xs text-gray-700">거래량(24h)</h3>
                <div className="flex flex-row gap-1 items-center">
                  <h3 className="text-sm">
                    {coin.acc_trade_volume_24h.toLocaleString()}
                  </h3>
                  <h4 className="text-xs text-gray-500">{coin.coinCode()}</h4>
                </div>
              </div>
              <hr className="my-2" />
              <div>
                <h3 className="font-medium text-xs text-gray-700">
                  거래대금(24h)
                </h3>
                <div className="text-[0.7rem] flex flex-row gap-1 items-center">
                  <h3>
                    {getDisplayAccTradePrice(
                      coin.acc_trade_price_24h,
                      coin.currencyType()
                    )}
                  </h3>
                  <h4 className="text-gray-500">{coin.currencyType()}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"absolute " + (activeTab === 1 ? "block" : "hidden")}>
          <Links></Links>
        </div>
      </div>
    </>
  );
};

export default CoinInfo;

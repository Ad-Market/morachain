import React from "react";

import MainLayout from "../layouts/MainLayout";

const Staking = () => {
  return (
    <MainLayout rootClassName="staking" title="STAKING">
      <div className="section stake-container">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="main-row row gy-4">
              {[
                {
                  title: "STAKE-MOR",
                  coinImg: "./assets/imgs/coin-md.png",
                  apy: 0,
                  stroke: 0.0,
                  staked: false,
                  period: "1 Year",
                },
                {
                  title: "STAKE - MOR - LP (MATIC)",
                  coinImg: "./assets/imgs/coin-2.png",
                  apy: 0,
                  stroke: 0.0,
                  staked: false,
                  period: "1 Year",
                },
                {
                  title: "STAKE-MOR",
                  coinImg: "./assets/imgs/coin-md.png",
                  apy: 0,
                  stroke: 0.0,
                  staked: false,
                  period: "(Expired)",
                },
                {
                  title: "STAKE - MOR - LP (MATIC)",
                  coinImg: "./assets/imgs/coin-2.png",
                  apy: 0,
                  stroke: 0.0,
                  staked: false,
                  period: "(Expired)",
                },
              ].map((el) => {
                const {
                  title,
                  coinImg,
                  // apy, stroke, staked, period
                } = el;

                return (
                  <div className="col-lg-3">
                    <div className="card">
                      <div className="card-head">{title}</div>
                      <div className="card-body">
                        <div className="coin-vector">
                          <img src={coinImg} alt="coin" />
                        </div>

                        <div className="container-fluid px-0">
                          <div className="row">
                            <div className="col-7">
                              <small className="text-light-1">APY:</small>
                            </div>
                            <div className="col-5">
                              <small className="text-light-1">0.00%</small>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-7">
                              <small className="text-light-1">
                                Your Stake:
                              </small>
                            </div>
                            <div className="col-5">
                              <small className="text-light-1">0.000 MOR%</small>
                            </div>
                          </div>
                        </div>

                        <button className="mt-4 btn btn-gradient">
                          Stake Now
                        </button>
                      </div>

                      <div className="card-foot">
                        <div className="row">
                          <div className="col-7">
                            <small className="text-light-1">APY:</small>
                          </div>
                          <div className="col-5">
                            <small className="text-light-1">0.00%</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="section text-section sec-1">
        <div className="page-container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="section-vector"
                src="./assets/imgs/text-section-1.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <p className="text-light-1 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-light-1 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section text-section sec-2">
        <div className="page-container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <p className="text-light-1 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-light-1 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="section-vector"
                src="./assets/imgs/text-section-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section calculation">
        <div className="bg"></div>
        <div className="page-container">
          <div className="container-fluid px-0">
            <h2 className="text-center">
              How is the Price calculated for the Property Share Token
            </h2>

            <div className="calc">
              <h3>Property Share Token </h3>
              <h1 className="mx-4">=</h1>

              <div className="div">
                <h3>Property Valuation In (U.S.D)</h3>
                <h3>Property Area In Square Feet</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section text-section sec-3">
        <div className="page-container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="section-vector"
                src="./assets/imgs/text-section-3.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <p className="text-light-1 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-light-1 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Staking;

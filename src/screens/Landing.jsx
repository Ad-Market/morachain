import React from "react";

import MainLayout from "../layouts/MainLayout";
import MoraChainHero from "../partials/MoraChainHero";
import Input from "../components/Input";

const Landing = () => {
  return (
    <MainLayout rootClassName="landing" titleComp={<MoraChainHero />}>
      <div className="section stats px-4">
        <div className="page-container">
          <div className="hero-bottom-displaced">
            <div className="container-fluid px-0">
              <div className="top d-flex justify-content-between align-items-center">
                <div className="">
                  <img
                    className="logo-dark"
                    src="./assets/imgs/logo-dark.png"
                    alt="logo"
                  />
                </div>
                <div className="">
                  <h4>Morachain</h4>
                  <strong>123.000</strong>
                </div>
                <div className="">
                  <h4>Total token supply:</h4>
                  <strong>99,805,267.06</strong>
                </div>
                <div className="">
                  <h4>Circulating Supply:</h4>
                  <strong>2,332,159.15</strong>
                </div>
                <div className="">
                  <h4>Fully diluted Market Cap:</h4>
                  <strong>$3,728,376.74</strong>
                </div>
                <div className="">
                  <h4>Market Cap:</h4>
                  <strong>$87,121.33</strong>
                </div>
              </div>

              <div className="bottom d-flex justify-content-between align-items-center mt-5">
                <div className="">
                  <Input
                    rootClassName="mt-0"
                    rightIcon="./assets/imgs/copy.png"
                    fancyLabel="Mor Address"
                    value="0xae204...1cf02"
                  />
                </div>
                <div className="">
                  <Input
                    rootClassName="mt-0"
                    rightIcon="./assets/imgs/copy.png"
                    fancyLabel="Pair Address"
                    value="0xae204...1cf02"
                  />
                </div>
                <div className="">
                  <Input
                    rootClassName="mt-0"
                    rightIcon="./assets/imgs/copy.png"
                    fancyLabel="Burn Address"
                    value="0xae204...1cf02"
                  />
                </div>
                <div className="flex-shrink-0">
                  <button className="btn btn-gradient fs-18">
                    Buy Morhain
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section listed text-center">
        <div className="page-container">
          <h2>
            <span className="text-grad">Morachain</span> Token <br />
            is now listed on
          </h2>

          <p className="mt-5 text-light-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="mt-4">
            <div className="listing-cards">
              <div className="container-fluid px-0">
                <div className="row gy-5">
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-1.png" alt="listing" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-2.png" alt="listing" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-3.png" alt="listing" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-4.png" alt="listing" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ox-hidden">
        <div className="section real-estate">
          <div className="bg"></div>
          <div className="page-container">
            <div className="container-fluid px-0">
              <div className="row flex-lg-row flex-column-reverse">
                <div className="col-lg-8">
                  <h2>
                    World’s First Decentralized Real Estate NFT Marketplace with
                    Metaverse
                  </h2>

                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p className="mt-3">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>

                  <p className="mt-3">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text.
                  </p>
                </div>

                <div className="col-lg-4">
                  <img
                    className="side-vector"
                    src="./assets/imgs/morachain-vector-1.png"
                    alt="morachain-vector-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section tokenization">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="./assets/imgs/morachain-vector-2.png"
                  alt="morachain-vector-2"
                  className="side-vector"
                />
              </div>
              <div className="col-lg-6">
                <div className="text">
                  <h2>
                    <span className="text-grad">Tokenization</span> Platform
                  </h2>

                  <p className="mt-3 text-light-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p className="mt-3 text-light-2">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>

                  <p className="mt-3 text-light-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section metaverse">
        <div className="bg"></div>
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row flex-lg-row flex-column-reverse">
              <div className="col-lg-6">
                <h1>Metaverse</h1>

                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <p className="mt-3">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>

                <p className="mt-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  className="side-vector"
                  src="./assets/imgs/morachain-vector-3.png"
                  alt="morachain-vector-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-2-e">
        <div className="page-container text-center">
          <h2>
            Play 2 Earn <span className="text-grad">(P2E)</span>
          </h2>
          <p className="text-light-2 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p className="text-light-2 mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text.
          </p>
        </div>
      </div>

      <div className="section showcase">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row gy-4">
              <div className="col-xxl-6 col-md-7"></div>
              <div className="col-xxl-6 col-md-5">
                <div className="row main-row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-main">
                        <img src="./assets/imgs/nft-showcase-1.png" alt="nft" />

                        <h6>NFT</h6>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-main">
                        <img src="./assets/imgs/nft-showcase-2.png" alt="nft" />

                        <h6>METAVERSE</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-main">
                        <img src="./assets/imgs/nft-showcase-3.png" alt="nft" />

                        <h6>FRACTIONALIZATION</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section why-us">
        <div className="page-container">
          <div className="text">
            <h2>
              Why <span className="text-grad">Morachain</span>
            </h2>

            <p className="mt-4 text-light-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="cards mt-5">
            <div className="container-fluid px-0">
              <div className="row gy-4">
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-1.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-1.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>ACCESSIBILITY</h3>

                      <p className="text-light-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-2.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-2.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>FREEDOM</h3>

                      <p className="text-light-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-3.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-3.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>DIVERSITY</h3>

                      <p className="text-light-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-4.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-4.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>CREATIVITY</h3>

                      <p className="text-light-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section fractional-ownership">
        <div className="bg"></div>
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-lg-5">
                <img
                  src="./assets/imgs/morachain-vector-4.png"
                  alt="morachain-vector-4.png"
                  className="side-vector"
                />
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h2>What is Fractional Ownership</h2>

                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p className="mt-3">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>

                  <p className="mt-3">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section token-utility">
        <div className="page-container">
          <div className="text text-center">
            <h2>
              <span className="text-grad">Morchain</span> Token Utility
            </h2>

            <p className="text-light-2 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="container-fluid px-0">
            <div className="row gx-5 gy-4">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <img
                  className="w-100"
                  src="./assets/imgs/coin.png"
                  alt="coin"
                />
              </div>
              <div className="col-lg-6">
                <div className="right">
                  <ul>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Landing;

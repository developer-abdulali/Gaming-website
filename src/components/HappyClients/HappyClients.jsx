import React from "react";

const HappyClients = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 my-5">
      <div className="text-white my-4 text-center text-lg sm:text-3xl md:text-4xl md:tracking-normal lg:text-6xl font-bold tracking-tighter lg:tracking-[-5px] font-custom">
        <span>HAPPY CLIENTS</span>
      </div>
      {/* happy clients carousel */}
      <div className="px-3">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators gap-3">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active !w-5 !h-5 rounded-circle"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="!w-5 !h-5 rounded-circle"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class="!w-5 !h-5 rounded-circle"
            ></button>
          </div>
          <div class="carousel-inner border-2 border-[#A1A1A1] rounded-md">
            <div class="carousel-item active">
              <div class="flex align-items-center justify-content-center mt-5">
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
              </div>
              <p class="text-white mt-3 md:mt-10 px-1 md:!px-32 text-xl text-center">
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable. <br /> <br /> Quick and
                adaptable, SoundPart consistently meets these key necessities.
                The capacity to talk straightforwardly with a senior guarantor
                makes this conceivable.
                <div class="flex align-items-center justify-content-center my-20">
                  <img src="/imgs/clientImg.svg" alt="client" />
                </div>
              </p>
            </div>
            <div class="carousel-item">
              <div class="flex align-items-center justify-content-center mt-5">
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
              </div>
              <p class="text-white mt-3 md:mt-10 text-xl px-1 md:!px-32 text-center">
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable. <br /> <br /> Quick and
                adaptable, SoundPart consistently meets these key necessities.
                The capacity to talk straightforwardly with a senior guarantor
                makes this conceivable.
                <div class="flex align-items-center justify-content-center  my-20 ">
                  <img src="/imgs/clientImg.svg" alt="" />
                </div>
              </p>
            </div>
            <div class="carousel-item">
              <div class="flex align-items-center justify-content-center mt-5">
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
                <img src="/imgs/star.svg" alt="star" />
              </div>
              <p class="text-white mt-3 md:mt-10 px-1 md:!px-32 text-xl text-center">
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable. <br /> <br /> Quick and
                adaptable, SoundPart consistently meets these key necessities.
                The capacity to talk straightforwardly with a senior guarantor
                makes this conceivable.
                <div class="flex align-items-center justify-content-center my-20 ">
                  <img src="/imgs/clientImg.svg" alt="" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;

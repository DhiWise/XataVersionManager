import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/reactversionmanagement");
  }
  function handleNavigate2() {
    navigate("/flutterversionmanagement");
  }

  return (
    <>
      <Column className="bg-gray_50 font-sourcesanspro items-center mx-[auto] lg:pb-[334px] xl:pb-[382px] 2xl:pb-[430px] 3xl:pb-[516px] w-[100%]">
        <Row className="bg-deep_purple_500 items-center justify-between lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Img
            src="images/img_cut.svg"
            className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
            alt="cut"
          />
          <Img
            src="images/img_profileimglarg.png"
            className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[64px] 3xl:mr-[76px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
            alt="ProfileImgLarg"
          />
        </Row>
        <Row className="items-center justify-center lg:mt-[256px] xl:mt-[293px] 2xl:mt-[330px] 3xl:mt-[396px] w-[58%]">
          <Row
            className="common-pointer bg-white_A700 border border-deep_purple_500 border-solid items-center justify-center lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius8 w-[48%]"
            onClick={handleNavigate2}
          >
            <Img
              src="images/img_fluttersvg.png"
              className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[11%]"
              alt="Fluttersvg"
            />
            <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[94px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Flutter
            </Text>
          </Row>
          <Row
            className="common-pointer bg-white_A700 border border-deep_purple_500 border-solid items-center justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:p-[51px] xl:p-[58px] 2xl:p-[66px] 3xl:p-[79px] rounded-radius8 w-[48%]"
            onClick={handleNavigate1}
          >
            <Img
              src="images/img_globe.svg"
              className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] mb-[1px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] w-[13%]"
              alt="globe"
            />
            <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[82px] 3xl:mr-[98px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              React
            </Text>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default Home1Page;

import React from "react";

import { getReactData } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteReactDataModalModal from "modals/DeleteReactDataModal";
import EditReactDataModalModal from "modals/EditReactDataModal";
import AddReactDataPopupModal from "modals/AddReactDataPopup";
import { Column, Row, Img, Text, Button, List, Line } from "components";

const ReactVersionManagementPage = () => {
  const [apiData6, setapiData6] = React.useState();
  const recordRef = React.useRef(null);
  const [isOpenDeleteReactDataModalModal, setDeleteReactDataModalModal] =
    React.useState(false);
  const [isOpenEditReactDataModalModal, setEditReactDataModalModal] =
    React.useState(false);
  const [isOpenAddReactDataPopupModal, setAddReactDataPopupModal] =
    React.useState(false);
  React.useEffect(() => {
    callApi6();
  }, []);

  function callApi6() {
    const req = {};

    getReactData(req)
      .then((res) => {
        setapiData6(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error");
      });
  }
  function handleOpenDeleteReactDataModalModal() {
    setDeleteReactDataModalModal(true);
  }
  function handleCloseDeleteReactDataModalModal() {
    setDeleteReactDataModalModal(false);
  }
  function handleOpenEditReactDataModalModal() {
    setEditReactDataModalModal(true);
  }
  function handleCloseEditReactDataModalModal() {
    setEditReactDataModalModal(false);
  }
  function handleOpenAddReactDataPopupModal() {
    setAddReactDataPopupModal(true);
  }
  function handleCloseAddReactDataPopupModal() {
    setAddReactDataPopupModal(false);
  }

  return (
    <>
      <Column className="bg-gray_50 font-sourcesanspro items-center mx-[auto] lg:pb-[136px] xl:pb-[155px] 2xl:pb-[175px] 3xl:pb-[210px] w-[100%]">
        <Row className="bg-bluegray_901 items-center justify-between lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
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
        <Column className="items-center lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[88%]">
          <Row className="justify-end pl-[2px] py-[2px] w-[100%]">
            <Img
              src="images/img_globe.svg"
              className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] mt-[1px] w-[3%]"
              alt="globe"
            />
            <Text className="font-semibold font-sourcesanspro 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              React Version Management
            </Text>
            <Button
              className="2xl:ml-[830px] 3xl:ml-[996px] flex items-center justify-center lg:ml-[645px] my-[1px] text-center w-[9%] xl:ml-[738px]"
              onClick={handleOpenAddReactDataPopupModal}
              leftIcon={
                <Img
                  src="images/img_plus.svg"
                  className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[7px] xl:w-[11px] xl:h-[12px] xl:mr-[8px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[9px] 3xl:w-[15px] 3xl:h-[16px] 3xl:mr-[10px]"
                  alt="plus"
                />
              }
              variant="FillBluegray901"
            >
              <div className="common-pointer bg-transparent font-gilroy font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Add Data
              </div>
            </Button>
          </Row>
          <Column className="bg-white_A700 items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pb-[19px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] w-[100%]">
            <Row className="bg-bluegray_700 items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
              <Text className="font-semibold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Generator Name
              </Text>
              <Text className="font-semibold mb-[1px] lg:ml-[320px] xl:ml-[366px] 2xl:ml-[412px] 3xl:ml-[494px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Version
              </Text>
              <Text className="font-semibold mb-[1px] lg:ml-[399px] xl:ml-[457px] 2xl:ml-[514px] 3xl:ml-[617px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Action
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[92%]"
              orientation="vertical"
            >
              {apiData6?.records?.map((apiData6RecordsEle, index) => {
                return (
                  <React.Fragment key={`apiData6RecordsEle${index}`}>
                    <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] pr-[2px] py-[2px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        {apiData6RecordsEle?.["generator_name"]}
                      </Text>
                      <Text className="font-normal lg:ml-[311px] xl:ml-[356px] 2xl:ml-[401px] 3xl:ml-[481px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        {apiData6RecordsEle?.version}
                      </Text>
                      <Img
                        src="images/img_edit.svg"
                        className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[376px] xl:ml-[430px] 2xl:ml-[484px] 3xl:ml-[581px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                        onClick={() => {
                          recordRef.current = apiData6RecordsEle;
                          handleOpenEditReactDataModalModal();
                        }}
                        alt="edit"
                      />
                      <Img
                        src="images/img_trash.svg"
                        className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[2%]"
                        onClick={() => {
                          recordRef.current = apiData6RecordsEle;
                          handleOpenDeleteReactDataModalModal();
                        }}
                        alt="trash"
                      />
                    </Row>
                    {index < apiData6?.records?.length - 1 && (
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                    )}
                  </React.Fragment>
                );
              })}
            </List>
          </Column>
        </Column>
      </Column>

      <ToastContainer />
      {(isOpenDeleteReactDataModalModal && recordRef?.current) ? (
        <DeleteReactDataModalModal
          isOpen={isOpenDeleteReactDataModalModal}
          record={recordRef?.current}
          onRequestClose={handleCloseDeleteReactDataModalModal}
        />
      ) : null}
      {(isOpenEditReactDataModalModal && recordRef?.current) ? (
        <EditReactDataModalModal
          isOpen={isOpenEditReactDataModalModal}
          record={recordRef?.current}
          onRequestClose={handleCloseEditReactDataModalModal}
        />
      ) : null}
      {isOpenAddReactDataPopupModal ? (
        <AddReactDataPopupModal
          isOpen={isOpenAddReactDataPopupModal}

          onRequestClose={handleCloseAddReactDataPopupModal}
        />
      ) : null}
    </>
  );
};

export default ReactVersionManagementPage;

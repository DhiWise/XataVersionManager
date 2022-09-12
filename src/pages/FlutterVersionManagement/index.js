import React from "react";

import { getFlutterData } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddFlutterDataPopupModal from "modals/AddFlutterDataPopup";
import DeleteFlutterDataModalModal from "modals/DeleteFlutterDataModal";
import EditFlutterDataModalModal from "modals/EditFlutterDataModal";
import { Column, Row, Img, Text, Button, List, Line } from "components";

const FlutterVersionManagementPage = () => {
  const [apiData7, setapiData7] = React.useState();
  const recordRef = React.useRef(null);
  const [isOpenAddFlutterDataPopupModal, setAddFlutterDataPopupModal] =
    React.useState(false);
  const [isOpenDeleteFlutterDataModalModal, setDeleteFlutterDataModalModal] =
    React.useState(false);
  const [isOpenEditFlutterDataModalModal, setEditFlutterDataModalModal] =
    React.useState(false);
  React.useEffect(() => {
    callApi7();
  }, []);

  function callApi7() {
    const req = {};

    getFlutterData(req)
      .then((res) => {
        setapiData7(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error");
      });
  }
  function handleOpenAddFlutterDataPopupModal() {
    setAddFlutterDataPopupModal(true);
  }
  function handleCloseAddFlutterDataPopupModal() {
    setAddFlutterDataPopupModal(false);
  }
  function handleOpenDeleteFlutterDataModalModal() {
    setDeleteFlutterDataModalModal(true);
  }
  function handleCloseDeleteFlutterDataModalModal() {
    setDeleteFlutterDataModalModal(false);
  }
  function handleOpenEditFlutterDataModalModal() {
    setEditFlutterDataModalModal(true);
  }
  function handleCloseEditFlutterDataModalModal() {
    setEditFlutterDataModalModal(false);
  }

  return (
    <>
      <Column className="bg-gray_50 font-sourcesanspro items-center mx-[auto] lg:pb-[136px] xl:pb-[155px] 2xl:pb-[175px] 3xl:pb-[210px] w-[100%]">
        <Row className="bg-blue_700 items-center justify-between lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
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
          <Row className="justify-end pl-[1px] py-[1px] w-[100%]">
            <Img
              src="images/img_fluttersvg.png"
              className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] w-[2%]"
              alt="Fluttersvg"
            />
            <Text className="font-semibold font-sourcesanspro lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Flutter Version Management
            </Text>
            <Button
              className="2xl:ml-[818px] 3xl:ml-[982px] flex items-center justify-center lg:ml-[636px] mt-[1px] text-center w-[9%] xl:ml-[727px]"
              onClick={handleOpenAddFlutterDataPopupModal}
              leftIcon={
                <Img
                  src="images/img_plus.svg"
                  className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[7px] xl:w-[11px] xl:h-[12px] xl:mr-[8px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[9px] 3xl:w-[15px] 3xl:h-[16px] 3xl:mr-[10px]"
                  alt="plus"
                />
              }
              variant="FillBlue700"
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
              {apiData7?.records?.map((apiData7RecordsEle, index) => {
                return (
                  <React.Fragment key={`apiData7RecordsEle${index}`}>
                    <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] pr-[2px] py-[2px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        {apiData7RecordsEle?.["generator_name"]}
                      </Text>
                      <Text className="font-normal lg:ml-[311px] xl:ml-[356px] 2xl:ml-[401px] 3xl:ml-[481px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        {apiData7RecordsEle?.version}
                      </Text>
                      <Img
                        src="images/img_edit.svg"
                        className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[376px] xl:ml-[430px] 2xl:ml-[484px] 3xl:ml-[581px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                        onClick={() => {
                          recordRef.current = apiData7RecordsEle;
                          handleOpenEditFlutterDataModalModal()
                        }}
                        alt="edit"
                      />
                      <Img
                        src="images/img_trash.svg"
                        className="common-pointer lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[2%]"
                        onClick={() => {
                          recordRef.current = apiData7RecordsEle;
                          handleOpenDeleteFlutterDataModalModal();
                        }}
                        alt="trash"
                      />
                    </Row>
                    {index < apiData7?.records?.length - 1 && (
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
      {isOpenAddFlutterDataPopupModal ? (
        <AddFlutterDataPopupModal
          isOpen={isOpenAddFlutterDataPopupModal}
          onRequestClose={handleCloseAddFlutterDataPopupModal}
        />
      ) : null}
      {(isOpenDeleteFlutterDataModalModal && recordRef?.current) ? (
        <DeleteFlutterDataModalModal
          isOpen={isOpenDeleteFlutterDataModalModal}
          record={recordRef?.current}
          onRequestClose={handleCloseDeleteFlutterDataModalModal}
        />
      ) : null}
      {(isOpenEditFlutterDataModalModal && recordRef?.current) ? (
        <EditFlutterDataModalModal
          isOpen={isOpenEditFlutterDataModalModal}
          record={recordRef?.current}
          onRequestClose={handleCloseEditFlutterDataModalModal}
        />
      ) : null}
    </>
  );
};

export default FlutterVersionManagementPage;

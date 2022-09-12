import React from "react";
import ModalProvider from "react-modal";

import { deleteFlutterData } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Column, Text, Row, Button } from "components";

const DeleteFlutterDataModalModal = (props) => {
  const [apiData3, setapiData3] = React.useState();

  function callApi3() {
    const req = { id: props?.record?.id };

    deleteFlutterData(req)
      .then((res) => {
        setapiData3(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error");
      }).finally(() => {
        props.onRequestClose();
      });
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[22%]"
        overlayClassName="bg-gray_900_a2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius10 shadow-bs w-[100%]">
            <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Delete Version
            </Text>
            <Text className="font-medium lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[85%]">
              Your are about to delete record id [{props?.record?.id}] named as {props?.record?.generator_name} and {props?.record?.version} as version. The operation is irreversible. Are you sure?
            </Text>
            <Row className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[89%]">
              <Button
                className="common-pointer font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
                onClick={props.onRequestClose}
              >
                Cancel
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
                onClick={() => {
                  callApi3();
                }}
                variant="FillRed700"
              >
                Delete
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default DeleteFlutterDataModalModal;

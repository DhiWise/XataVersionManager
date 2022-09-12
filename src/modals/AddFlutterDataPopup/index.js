import React from "react";
import ModalProvider from "react-modal";

import { addFlutterData } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import * as yup from "yup";
import { Column, Text, Input, Row, Button } from "components";

const AddFlutterDataPopupModal = (props) => {
  const [apiData5, setapiData5] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      ["generator_name"]: yup
        .string()
        .min(5, "Generator_name must be minimum of length 5")
        .required("Generator_name is required"),
      version: yup
        .string()
        .min(3, "Version must be minimum of length 3")
        .required("Version is required"),
    });
  const form = useForm(
    { generator_name: "", version: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  function callApi5(data) {
    const req = { data: { ...data } };

    addFlutterData(req)
      .then((res) => {
        setapiData5(res);
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
          <Column className="bg-white_A700 justify-end xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[92px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius10 shadow-bs w-[100%]">
            <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Add data
            </Text>
            <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
              Generator Name
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
              type="text"
              onChange={(e) => {
                form.handleChange("generator_name", e.target.value);
              }}
              errors={form?.errors?.["generator_name"]}
              value={form?.values?.["generator_name"]}
              name="InputField"
              placeholder="Enter generator name"
            ></Input>
            <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
              Version
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
              type="text"
              onChange={(e) => {
                form.handleChange("version", e.target.value);
              }}
              errors={form?.errors?.version}
              value={form?.values?.version}
              name="InputField One"
              placeholder="Enter version name"
            ></Input>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Button
                className="common-pointer font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
                onClick={props.onRequestClose}
              >
                Cancel
              </Button>
              <Button
                className="common-pointer font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
                onClick={() => {
                  form.handleSubmit(callApi5);
                }}
                variant="FillDeeppurple500"
              >
                Save
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default AddFlutterDataPopupModal;

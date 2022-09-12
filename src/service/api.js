import { apis } from "service";

const COMMON_URL = `https://versions-crnuho.xata.sh/db/live:main/tables/`;

const API_URLS = {
  GET_FLUTTER_DATA: `${COMMON_URL}flutter/query`,
  ADD_FLUTTER_DATA: `${COMMON_URL}flutter/data`,
  DELETE_FLUTTER_DATA: `${COMMON_URL}flutter/data`,
  UPDATE_FLUTTER_DATA: `${COMMON_URL}flutter/data`,
  DELETE_REACT_DATA: `${COMMON_URL}react/data`,
  EDIT_REACT_DATA: `${COMMON_URL}react/data`,
  ADD_REACT_DATA: `${COMMON_URL}react/data`,
  GET_REACT_DATA: `${COMMON_URL}react/query`,
};

export const getFlutterData = (payload) => apis.post(API_URLS.GET_FLUTTER_DATA, payload);

export const addFlutterData = (payload) => apis.post(`${API_URLS.ADD_FLUTTER_DATA}/${payload?.id ?? ""}`, payload);

export const deleteFlutterData = (payload) =>
  apis.delete(`${API_URLS.DELETE_FLUTTER_DATA}/${payload?.id ?? ""}`, payload);

export const updateFlutterData = (payload) =>
  apis.patch(`${API_URLS.UPDATE_FLUTTER_DATA}/${payload?.id ?? ""}`, payload);

export const deleteReactData = (payload) =>
  apis.delete(`${API_URLS.DELETE_REACT_DATA}/${payload?.id ?? ""}`, payload);

export const editReactData = (payload) =>
  apis.patch(`${API_URLS.EDIT_REACT_DATA}/${payload?.id ?? ""}`, payload);

export const addReactData = (payload) => apis.post(`${API_URLS.ADD_REACT_DATA}/${payload?.id ?? ""}`, payload);

export const getReactData = (payload) => apis.post(API_URLS.GET_REACT_DATA, payload);

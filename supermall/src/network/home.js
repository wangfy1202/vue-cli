import { request } from "network";

export const getHomeMultidata = () =>
  request({
    url: "/home/multidata"
  });

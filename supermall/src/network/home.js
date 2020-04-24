import { request } from "network";

export const getHomeMultidata = () =>
  request({
    url: "/home/multidata"
  });

export const getHomeGoods = (type, page) =>
  request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });

import {
  request
} from "./request";

export function getHomeMultiData(params) {
  return request({
    url: '/home/multidata'
  })
}
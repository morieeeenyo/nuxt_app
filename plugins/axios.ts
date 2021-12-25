import { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios"

export default ({ $axios }: { $axios: any }) => {
  // リクエストログ
  $axios.onRequest((config: AxiosRequestConfig) => {
    console.log(config)
  })
  // レスポンスログ
  $axios.onResponse((config: AxiosResponse) => {
    console.log(config)
  })
  // エラーログ
  $axios.onError((e: AxiosError) => {
    console.log(e.response)
  })
}

import { CapacitorHttp } from '@capacitor/core'
import prependSymbolIfExists from '@/shared/utils/prependSymbolIfExists'
import type { HttpResponse } from '@capacitor/core/types/core-plugins'

type HttpCapacitorResponse<Result> = Omit<HttpResponse, 'data'> & { data: Result }

type ApiRequestParams<Payload = unknown, QueryParams = unknown, UrlParams = unknown> = {
  urlParams?: UrlParams
  queryParams?: QueryParams
  payload?: Payload
}

type CreateApiRequestArgs<QueryParams, UrlParams> = {
  url: string
  opts?: RequestInit
  defaultParams?: {
    urlParams?: Partial<UrlParams>
    queryParams?: Partial<QueryParams>
  }
}

export const compileApiUrl = <Payload, QueryParams, UrlParams>(
  url: CreateApiRequestArgs<QueryParams, UrlParams>['url'],
  urlParams?: ApiRequestParams<Payload, QueryParams, UrlParams>['urlParams']
): string => {
  const paramsNames = url.match(/:\w+/g)

  if (!paramsNames || !urlParams) return url

  return paramsNames?.reduce((acc, paramName) => {
    const urlParam = (urlParams as Record<string, string>)[paramName.slice(1)]
    return acc.replace(paramName, urlParam)
  }, url)
}

const createApiRequest = (baseUrl: string) => {
  return <Result, Payload, QueryParams, UrlParams>({
    url,
    opts,
    defaultParams
  }: CreateApiRequestArgs<QueryParams, UrlParams>) => {
    return async (
      params?: ApiRequestParams<Payload, QueryParams, UrlParams>
    ): Promise<HttpCapacitorResponse<Result>> => {
      const queryParams = { ...defaultParams?.queryParams, ...params?.queryParams }
      const urlParams = { ...defaultParams?.urlParams, ...params?.urlParams } as UrlParams

      const resultUrl = [
        baseUrl,
        compileApiUrl<Payload, QueryParams, UrlParams>(url, urlParams),
        prependSymbolIfExists('?', new URLSearchParams(queryParams).toString())
      ].join('')

      const response = await CapacitorHttp.request({
        ...opts,
        url: resultUrl,
        data: params?.payload,
        responseType: 'json',
        headers: opts?.headers as Record<string, string>
      })

      if (response.status < 400) {
        return response as HttpCapacitorResponse<Result>
      }

      const responseError = {
        type: 'http_error',
        message: response.data.message || 'Something went wrong',
        data: response.data || '',
        code: response.data.code || ''
      }

      let error = new Error()
      error = { ...error, ...responseError }
      throw error
    }
  }
}

export default createApiRequest

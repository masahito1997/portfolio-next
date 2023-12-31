type Method = "GET" | "POST" | "PUT" | "DELETE";
type apiRequestInit = {
  method: Method,
  headers: {
    'Content-Type': "application/json",
    Authorization: string,
  },
  body?: string,
}
const useApiClient = () => {
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  const apiHost = process.env.NEXT_PUBLIC_API_HOST;
  if (!apiToken || !apiHost) {
    throw new Error("API Token not found");
  }

  const requestTo = async (path: string, method: Method, body: any) => {
    let requestBody;
    let url = `${apiHost}${path}`;
    if (method === "GET") {
      if (body) {
        const query = new URLSearchParams(body);
        url += `?${query.toString()}`;
      }
    } else {
      requestBody = JSON.stringify(body)
    }

    const defaultRequestInit: apiRequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiToken}`,
      },
    }
    if (method != 'GET' && body) {
      defaultRequestInit.body = requestBody
    }

    return await fetch(url, defaultRequestInit)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.statusText)
      })
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
  }

  return {
    get: async (path: string, query?: any) => {
      return await requestTo(path, "GET", query)
    },
    post: async (path: string, body?: any) => {
      return await requestTo(path, "POST", body)
    },
    put: async (path: string, body?: any) => {
      return await requestTo(path, "PUT", body)
    },
    delete: async (path: string, body?: any) => {
      return await requestTo(path, "DELETE", body)
    },
  }
}
export default useApiClient;

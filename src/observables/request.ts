import axios, { AxiosResponse } from "axios";
import { Observable, PartialObserver } from "rxjs";

const getRequestWithCancel$ = <T>(url: string) =>
  new Observable<T>((observer: PartialObserver<any>) => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(url, {
        headers: { "Content-Type": "application/json" },
        cancelToken: cancelToken.token,
      })
      .then(
        (result: AxiosResponse) => {
          observer.next?.({ body: result.data });
          observer.complete?.();
        },
        (error) => {
          if (axios.isCancel(error)) {
            observer.complete?.();
          } else {
            observer.error?.(error);
          }
        },
      );

    return () => cancelToken.cancel();
  });

export default getRequestWithCancel$;

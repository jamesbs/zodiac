import { ServerUnaryCall, sendUnaryData } from 'grpc'

export function passThroughRequest<T, U>(target: (arg: T) => U) {
  return (call: ServerUnaryCall<T>, onComplete: sendUnaryData<U>) => {
    onComplete(
      null,
      target(call.request),
    )
  }
}

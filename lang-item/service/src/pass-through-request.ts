export function passThroughRequest<T>(target: (arg: T) => unknown) {
  return (call: { request: T }, onComplete) => onComplete(
    null,
    target(call.request),
  )
}

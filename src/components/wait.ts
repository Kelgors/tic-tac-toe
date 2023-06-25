export function wait(timeout: number) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(undefined), timeout);
  });
}

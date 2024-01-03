export default function returnHowManyArguments(...args) {
  let argCount = 0;

  for (let i = 0; i < args.length; i += 1) {
    argCount += 1;
  }
  return argCount;
}

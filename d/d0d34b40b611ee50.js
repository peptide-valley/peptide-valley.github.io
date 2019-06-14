// https://observablehq.com/d/d0d34b40b611ee50@3
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Peptide Valley`
)});
  return main;
}

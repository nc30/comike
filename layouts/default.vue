<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
   -webkit-print-color-adjust: exact;
}

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.sub {
  display: none
}
@media print{
  .container {
    height: 40%;
  }
  .sub {
    border-top: #fff solid 2px;
    display: block !important;
  }
  .out {
    display: none !important;
  }
}
@page {
  size: 182mm 257mm;
  margin: 0;
}

</style>

<template>
  <div class="container">
    <TwoCols />
    <ThreeCols />
    <FourCols />
    <FiveCols />
    <SixCols />
  </div>
</template>

<script>
import FiveCols  from "./ResponsiveBlocks/FiveCols";
import SixCols   from "./ResponsiveBlocks/SixCols";
import ThreeCols from "./ResponsiveBlocks/ThreeCols";
import FourCols  from "./ResponsiveBlocks/FourCols";
import TwoCols   from "./ResponsiveBlocks/TwoCols";

export default {
  name      : "MainResponsiveBlocks",
  components: {
    FiveCols,
    SixCols,
    ThreeCols,
    FourCols,
    TwoCols
  }
};
</script>

<style scoped>

</style>

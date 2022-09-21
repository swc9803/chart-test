<template>
  <div class="container">
    <div class="section">
      <h1 class="title">chart1</h1>
      <div class="articleWrap">
        <div class="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem at minus, unde eos dolorem totam molestiae, laboriosam
          eveniet cum voluptatum autem maxime modi! Consectetur voluptatibus
          nihil aliquid. Hic, minus!
        </div>
        <div class="chart">
          <Test1Chart />
        </div>
      </div>
    </div>
    <div class="section">
      <h1 class="title">chart1</h1>
      <div class="articleWrap">
        <div class="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem at minus, unde eos dolorem totam molestiae, laboriosam
          eveniet cum voluptatum autem maxime modi! Consectetur voluptatibus
          nihil aliquid. Hic, minus!
        </div>
        <div class="chart">
          <Test1Chart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Test1Chart from "@/components/Test1Chart.vue";
</script>
<style lang="scss" scoped>
.container {
  width: 70%;
  min-width: 700px;
  margin: 0 auto;
  .section {
    border: 2px solid black;
    padding: 1%;
    margin-bottom: 20px;
    .title {
      margin: 0;
    }
    .articleWrap {
      display: flex;
      .box {
        flex: 1 1 0;
        width: 50%;
        background: silver;
        padding: 1%;
      }
      .chart {
        flex: 2 1 0;
        width: 50%;
        border: 1px solid black;
      }
    }
  }
}
</style>

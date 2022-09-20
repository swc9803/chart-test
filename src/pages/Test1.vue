<template>
  <div>
    <canvas ref="chart1" width="400" height="300"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js";
const chart1 = ref();
Chart.register(...registerables);

onMounted(() => {
  const ctx = chart1.value.getContext("2d") as HTMLCanvasElement;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "test dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 40],
        },
      ],
    },
    options: {},
  });
});
</script>
<style lang="scss" scoped></style>

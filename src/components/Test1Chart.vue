<template>
  <canvas ref="chart1" width="400" height="300"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js";
const chart1 = ref();
Chart.register(...registerables);

("Test1Chart");
const monthsArray = ref([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
let monthsAmountArray = [10, 0, 20, 30, 50, 70, 20, 40, 40, 60, 40, 20];

onMounted(() => {
  setTimeout(() => {
    monthsArray.value[0] = "dd";
    // 실시간?
  }, 1000);
  const ctx = chart1.value.getContext("2d") as HTMLCanvasElement;
  new Chart(ctx, {
    type: "line",
    data: {
      labels: monthsArray.value,
      datasets: [
        {
          label: "test dataset",
          backgroundColor: "rgb(255, 255, 92)",
          borderColor: "rgb(255, 0, 0)",
          data: monthsAmountArray,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0,
          max: 100,
        },
      },
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 14,
              weight: "Bold",
            },
          },
        },
      },
    },
  });
});
</script>

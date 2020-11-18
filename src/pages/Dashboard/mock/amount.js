export const dataAmount = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        type: "bar",
        label: "Comissões",
        backgroundColor: `rgb(104, 191, 183)`,
        fill: true,
        data: [
         1579,
         1689,
         1980,
         1354,
         2698,
         1476,
         2098,
         1734,
         2760,
         1769,
         1326,
         2276
        ],
      },
      {
        type: "bar",
        label: "Faturamento",
        backgroundColor: `rgb(219, 93, 121)`,
        data: [
            15800, 15200, 16300, 15000, 14803, 16809, 15500, 14900, 16000, 15700, 15100, 15500
        ],
      },
    ],
  };
  
  export const optionsBanner = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  
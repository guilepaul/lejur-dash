export const dataUsers = {
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
        type: "line",
        label: "Novos Usuários",
        borderColor: `rgb(132, 184, 226)`,
        borderWidth: 6,
        fill: true,
        data: [
          154, 146, 176, 198, 227, 213, 177, 189, 166, 190, 272, 235
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
  
  
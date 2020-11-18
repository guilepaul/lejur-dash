export const dataAppointments = {
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
      label: "Agendamentos",
      borderColor: `rgb(219, 93, 121)`,
      borderWidth: 2,
      fill: true,
      data: [
        59,
        63,
        66,
        57,
        68,
        63,
        59,
        61,
        55,
        68,
        60,
        69,
      ],
    },
    {
      type: "bar",
      label: "Cancelados",
      backgroundColor: `rgb(104, 191, 183)`,
      data: [
        45, 44, 49, 42, 48, 47, 53, 42, 48, 43, 51, 44
      ],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Confirmados",
      backgroundColor: `rgb(132, 184, 226)`,
      data: [
        6, 7, 6, 6, 8, 5, 7, 8, 4, 6, 5, 9
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


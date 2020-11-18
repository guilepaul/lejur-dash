export const dataInvoices = {
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
        label: 'LGBTQ+',
        data: [2, 3, 7, 5, 1, 4, 2, 3, 8, 5, 1, 4],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Hétero',
        data: [12, 19, 14, 7, 8, 13, 12, 19, 20, 14, 9, 11],
        backgroundColor: 'rgb(104, 191, 183)',
      }
    ],
  }
  
  export const optionsInvoices = {
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
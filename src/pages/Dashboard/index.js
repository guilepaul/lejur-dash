import React, { useState, useEffect } from "react";
import { Bar, Doughnut, HorizontalBar } from "@reactchartjs/react-chart.js";
import Menu from "../../components/Menu";
import Header from "../../components/Header";

import api from "../../services/api";

// import { WeddingHook } from "../../hooks/wedding";

import * as S from "./styles";

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
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
      label: "Cadastros",
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: true,
      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
      ],
    },
    {
      type: "bar",
      label: "Agendamentos",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
      ],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Casamentos",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
      ],
    },
  ],
});

const options = {
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

const Dashboard = () => {
  const [data, setData] = useState(genData());
  const [weddings, setWeddings] = useState([]);
  const [user, setUser] = useState([]);
  const [userPerMonth, setUserPerMonth] = useState(0);

  const [vendorCategory, setVendorCategory] = useState([]);
  const [singleCategory, setSingleCategory] = useState([]);

  const getWedding = async () => {
    const response = await api.get("/wedding").catch((err) => console.log(err));

    console.log("wed", response.data);

    return setWeddings(response.data);
  };

  const getUser = async () => {
    const response = await api.get("/user").catch((err) => console.log(err));

    console.log("user", response.data);

    return setUserPerMonth(Math.ceil(response.data.length / 30));
  };

  useEffect(() => {
    getWedding();
    getUser();
  }, []);

  const data2 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
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

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <Header />
      <Menu />
      <S.ChartBannerWrapper>
        <Bar data={data} options={options} />
      </S.ChartBannerWrapper>
      <S.ContainerSquareChart>
        <S.ChartSquareWrapper>
          <Doughnut data={data2} />
        </S.ChartSquareWrapper>
        <S.ChartSquareWrapper>
          <HorizontalBar
            data={data3}
            options={options2}
            width={80}
            height={80}
          />
        </S.ChartSquareWrapper>
      </S.ContainerSquareChart>
      <S.ContainerSquareChart>
        <S.ChartSquareWrapper>
          <Doughnut data={data2} />
        </S.ChartSquareWrapper>
        <S.ChartSquareWrapper>
          <HorizontalBar
            data={data3}
            options={options2}
            width={80}
            height={80}
          />
        </S.ChartSquareWrapper>
      </S.ContainerSquareChart>
    </S.Container>
  );
};

export default Dashboard;

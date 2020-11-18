
import React, { useState, useEffect } from "react";
import {
  Bar,
  Doughnut,
  HorizontalBar,
  VerticalBar,
} from "@reactchartjs/react-chart.js";
import Menu from "../../components/Menu";
import Header from "../../components/Header";


import api from "../../services/api";
import Highlights from "./components/Highlights";

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

  const [isRustico, setIsRustico] = useState([]); //array com todos os rusticos -- usar .length
  const [isModerno, setIsModerno] = useState([]);
  const [isClassico, setIsClassico] = useState([]);

  const [vendorCategory, setVendorCategory] = useState([]);
  const [singleCategory, setSingleCategory] = useState([]);
  const [arrayVendor, setArrayVendor] = useState([]);

  const [created, setCreated] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [canceled, setCanceled] = useState([]);

  const getWedding = async () => {
    const response = await api.get("/wedding").catch((err) => console.log(err));

    console.log("wed", response.data);
    setIsRustico(response.data.filter((item) => item.STYLE === "rustico"));
    setIsModerno(response.data.filter((item) => item.STYLE === "moderno"));
    setIsClassico(response.data.filter((item) => item.STYLE === "classico"));

    return setWeddings(response.data);
  };

  const getApointments = async () => {
    const response = await api
      .get("/appointment")
      .catch((err) => console.log(err));

    console.log("appoint", response.data);

    setCreated(response.data.filter((item) => item.STATUS === "CREATED"));
    setConfirmed(response.data.filter((item) => item.STATUS === "CONFIRMED"));
    setCanceled(response.data.filter((item) => item.STATUS === "CANCELED"));

    // return setUserPerMonth(Math.ceil(response.data.length / 30));
  };

  const getUser = async () => {
    const response = await api.get("/user").catch((err) => console.log(err));

    console.log("user", response.data);

    return setUserPerMonth(Math.ceil(response.data.length / 30));
  };

  const getCategories = async () => {
    const response = await api.get("/invoice").catch((err) => console.log(err));
    console.log("invoice", response.data);

    const singleCat = response.data
      .map((item) => item.VENDOR_CATEGORY)
      .filter(
        (item, i) =>
          response.data.map((item) => item.VENDOR_CATEGORY).indexOf(item) === i
      );
    console.log("single", singleCat);

    setArrayVendor(
      singleCat.map((item) => item[0].toUpperCase() + item.slice(1))
    );

    return setSingleCategory(singleCat);
  };

  useEffect(() => {
    getWedding();
    getUser();
    getCategories();
    getApointments();
  }, []);

  const data2 = {
    labels: ["Criadas", "Confirmadas", "Canceladas"],
    datasets: [
      {
        label: "Visitas",
        data: [created.length, confirmed.length, canceled.length],
        backgroundColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",

        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
    labels: ["Clássico", "Rústico", "Moderno"],
    datasets: [
      {
        label: "Total",
        data: [isClassico.length, isRustico.length, isModerno.length],
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
  const data4 = {
    labels: arrayVendor,
    datasets: [
      {
        label: "Total",
        data: [70, 10, 20, 5, 5, 6, 8, 5, 9, 5, 4, 10, 15, 20, 10, 19],
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
    legend: {
      display: false,
    },
  };
  const options3 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },

      ],
    },
    legend: {
      display: false,
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
      <Highlights mediaUsuarios={userPerMonth} casamentos={weddings.length} />
      <S.ContainerSquareChart>
        <S.ChartSquareWrapper>
          <Doughnut data={data2} width={85} height={85} />
        </S.ChartSquareWrapper>
        <S.ChartSquareWrapper>
          <Bar
            data={data3}
            label={true}
            options={options3}
            width={85}
            height={85}
          />
        </S.ChartSquareWrapper>
      </S.ContainerSquareChart>
      <S.ContainerSquareChart>
        <S.ChartSquareWrapper>
          <Doughnut data={data2} />
        </S.ChartSquareWrapper>
        <S.ChartSquareWrapper>
          <HorizontalBar
            data={data4}
            options={options2}
            width={85}
            height={85}
          />
        </S.ChartSquareWrapper>
      </S.ContainerSquareChart>
    </S.Container>
  );
};

export default Dashboard;


import { Chart, RadarController, LineElement, PointElement, Title, RadialLinearScale } from 'chart.js';

import './scss/style.scss';
import $ from "jquery";
import Paladin from "./paladin.svg";
import GoodFairy from "./goodFairy.svg";

const dataPaladin = {
  labels: [
    'Stärke',
    'Geschick',
    'Intelligenz',
    'Zurückhaltung',
    'Loyalität',
  ],
  datasets: [{
    label: 'Paladin',
    data: [5, 7, 8, 1, 10],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  },]
};

const configPaladin = {
  type: "radar",
  data: dataPaladin,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 10,
        }
    }
  },
};

const dataGoodFairy = {
  labels: [
    'Charisma',
    'Geschick',
    'Intelligenz',
    'Zurückhaltung',
    'Loyalität',
  ],
  datasets: [{
    label: 'GoodFairy',
    data: [8, 7, 8, 7, 10],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  },]
};

const configGoodFairy = {
  type: "radar",
  data: dataGoodFairy,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 10,
        }
    }
  },
};

$(function () {
    let svgPaladin = new Image();
    svgPaladin.src = Paladin;
    $(".character-paladin .character-avatar").prepend(svgPaladin);

    let svgGoodFairy = new Image();
    svgGoodFairy.src = GoodFairy;
    $(".character-goodFairy .character-avatar").prepend(svgGoodFairy);

    Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Title);
    new Chart($(".character-paladin .character-mainStats--radar-chart").get(), configPaladin);

    Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Title);
    new Chart($(".character-goodFairy .character-mainStats--radar-chart").get(), configGoodFairy);
});

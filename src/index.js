import { Chart, RadarController, LineElement, PointElement, Title, RadialLinearScale } from 'chart.js';

import './scss/style.scss';
import $ from "jquery";
import Paladin from "./paladin.svg";
import GoodFairy from "./goodFairy.svg";
import Ring from "./rings.svg";


Chart.defaults.font.family = "Minecraft";
Chart.defaults.font.size = 20;
Chart.defaults.color = "#fff2e1";
Chart.defaults.borderColor = "#fff2e1";
Chart.defaults.backgroundColor = "#fff2e1";

const dataPaladin = {
  labels: [
    'Kampfstärke',
    'Geschick',
    'Intelligenz',
    'Zurückhaltung',
    'Loyalität',
  ],
  datasets: [{
    label: 'Paladin',
    data: [8, 7, 8, 1, 10],
    fill: true,
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    borderColor: '#ff9000',
    pointBackgroundColor: '#ff9000',
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
            ticks: {
                display: false,
                stepSize: 2,
            },
            suggestedMin: 0,
            suggestedMax: 10,
        }
    }
  },
};

const dataGoodFairy = {
  labels: [
    'Charisma',
    'Magie',
    'Intelligenz',
    'Zurückhaltung',
    'Loyalität',
  ],
  datasets: [{
    label: 'GoodFairy',
    data: [8, 8, 8, 7, 10],
    fill: true,
    backgroundColor: 'rgba(255, 0, 0, 1.0)',
    borderColor: '#ff9000',
    pointBackgroundColor: '#ff9000',
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
                ticks: {
                    display: false,
                    stepSize: 2,
                },
                suggestedMin: 0,
                suggestedMax: 10,
            }
        },
    }
};

$(function () {
    let svgPaladin = new Image();
    svgPaladin.src = Paladin;
    $(".character-paladin .character-avatar").prepend(svgPaladin);

    let svgGoodFairy = new Image();
    svgGoodFairy.src = GoodFairy;
    $(".character-goodFairy .character-avatar").prepend(svgGoodFairy);

    let ring = new Image();
    ring.src = Ring;
    $(".ring").append(ring);

    Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Title);
    new Chart($(".character-paladin .character-mainStats--radar-chart").get(), configPaladin);

    Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Title);
    new Chart($(".character-goodFairy .character-mainStats--radar-chart").get(), configGoodFairy);
});

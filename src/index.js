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
    'Kampfstaerke',
    'Geschick',
    'Intelligenz',
    'Zurueckhaltung',
    'Loyalitaet',
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
    'Zurueckhaltung',
    'Loyalitaet',
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
    let input = document.getElementById("le-input");
    let button = document.getElementById("le-button");

    input.addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            button.click();
        }
    });
    let $input = $(".le-input");
    $("form").on("submit", (e) => {e.preventDefault();})
    let $failText = $(".fail-text");
    $(".le-button").on('click', 
        () => {
            if (hash($input.val()) === -1436117927
                || hash($input.val()) === 1547226824
                || hash($input.val()) === -1569982744
                || hash($input.val()) === -642826119) {
                $(".transition-text-1").fadeIn(1300).promise()
                    .then(() => $(".transition-text-2").fadeIn(1300).delay(1500).promise())
                    .then(() => $(".pseudo-login").fadeOut(1300).promise())
                    .then(() => $(".content").fadeIn(1300));
            }else{
                let failAnswers = [
                    "Grauenhaft...",
                    "Schrecklich...",
                    "Enttaeuschend...",
                    "Viel du noch lernen musst...",
                    "Deine Ahnen weinen bitterlich ob deiner Torheit!",
                    "Du denkst wahrscheinlich auch Mozart haette diese suessen Kugeln erfunden, was?",
                    "Sitzt du auch abends auf dem Fernseher und guckst Couch?",
                    "Egal wie tief du im Keller bohrst...Maggi findest du trotzdem nicht!",
                    "Naja...Unwissenheit ist ja auch manchmal ein Segen, nicht wahr?",
                ];
                $failText.html(failAnswers[Math.floor(Math.random() * failAnswers.length)])
                $(".fail-text").fadeIn(1300).delay(1500).promise()
                    .then(() => $(".fail-text").fadeOut(1300).promise());
            }
        }
    );

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

function hash(string) {
    let hash = 0;
        
    if (string.length == 0) return hash;
        
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
        
    return hash;
}
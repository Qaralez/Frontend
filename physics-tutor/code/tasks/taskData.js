// tasks/tasksData.js
const physicsTasks = [
    {
        id: 1,
        difficulty: 7, 
        topics: ["kinematics", "speed"],
        
        problem: {
            ru: "Автомобиль проехал {distance} км за {time} часа. Найдите среднюю скорость автомобиля. Ответ округлите до целых.",
            en: "A car traveled {distance} km in {time} hours. Find the average speed of the car. Round your answer to the nearest whole number.",
            uk: "Автомобіль проїхав {distance} км за {time} години. Знайдіть середню швидкість автомобіля. Відповідь округліть до цілих.",
            de: "Ein Auto fuhr {distance} km in {time} Stunden. Finden Sie die Durchschnittsgeschwindigkeit des Autos. Runden Sie Ihre Antwort auf die nächste ganze Zahl.",
            tr: "Bir araba {distance} km'yi {time} saatte kat etti. Arabanın ortalama hızını bulun. Cevabınızı tam sayıya yuvarlayın.",
            kk: "Көлік {distance} км жолды {time} сағатта жүрді. Көліктің орташа жылдамдығын табыңыз. Жауапты бүтін санға дейін дөңгелектеңіз."
        },
        
        generateParams: () => {
            const distance = Math.floor(Math.random() * 100) + 50; // 50-150 км
            const time = Math.floor(Math.random() * 4) + 2;        // 2-5 часов
            return { distance, time };
        },
        
        calculateAnswer: (params) => {
            return params.distance / params.time;
        },
        
        formatAnswer: (answer) => Math.round(answer),
        answerUnit: {
            ru: "км/ч",
            en: "km/h",
            uk: "км/год",
            de: "km/h",
            tr: "km/sa",
            kk: "км/сағ"
        }
    },
    {
        id: 2,
        difficulty: 7,
        topics: ["density", "mass", "volume"],
        problem: {
            ru: "Тело массой {mass} кг имеет объем {volume} м³. Найдите его плотность. Ответ округлите до десятых.",
            en: "A body with a mass of {mass} kg has a volume of {volume} m³. Find its density. Round your answer to the nearest tenth.",
            uk: "Тіло масою {mass} кг має об'єм {volume} м³. Знайдіть його густину. Відповідь округліть до десятих.",
            de: "Ein Körper mit einer Masse von {mass} kg hat ein Volumen von {volume} m³. Finden Sie seine Dichte. Runden Sie Ihre Antwort auf das nächste Zehntel.",
            tr: "Kütlesi {mass} kg olan bir cismin hacmi {volume} m³'tür. Yoğunluğunu bulun. Cevabınızı en yakın ondalığa yuvarlayın.",
            kk: "Массасы {mass} кг дененің көлемі {volume} м³. Оның тығыздығын табыңыз. Жауапты ондық бөлшекке дейін дөңгелектеңіз."
        },
        generateParams: () => {
            const mass = Math.floor(Math.random() * 100) + 10; // 10-110 кг
            const volume = (Math.floor(Math.random() * 50) + 5) / 10; // 0.5-5.5 м³
            return { mass, volume };
        },
        calculateAnswer: (params) => params.mass / params.volume,
        formatAnswer: (answer) => Math.round(answer * 10) / 10, // Округление до десятых
        answerUnit: {
            ru: "кг/м³",
            en: "kg/m³",
            uk: "кг/м³",
            de: "kg/m³",
            tr: "kg/m³",
            kk: "кг/м³"
        }
    },
    {
        id: 3,
        difficulty: 8,
        topics: ["force", "pressure"],
        problem: {
            ru: "Сила {force} Н действует на площадь {area} м². Какое давление оказывает эта сила? Ответ округлите до целых.",
            en: "A force of {force} N acts on an area of {area} m². What pressure does this force exert? Round your answer to the nearest whole number.",
            uk: "Сила {force} Н діє на площу {area} м². Який тиск чинить ця сила? Відповідь округліть до цілих.",
            de: "Eine Kraft von {force} N wirkt auf eine Fläche von {area} m². Welchen Druck übt diese Kraft aus? Runden Sie Ihre Antwort auf die nächste ganze Zahl.",
            tr: "{force} N'luk bir kuvvet {area} m²'lik bir alana etki ediyor. Bu kuvvet ne kadar basınç uygular? Cevabınızı tam sayıya yuvarlayın.",
            kk: "{force} Н күші {area} м² ауданына әсер етеді. Бұл күш қандай қысым түсіреді? Жауапты бүтін санға дейін дөңгелектеңіз."
        },
        generateParams: () => {
            const force = Math.floor(Math.random() * 500) + 100; // 100-600 Н
            const area = (Math.floor(Math.random() * 15) + 1) / 10; // 0.1-1.6 м²
            return { force, area };
        },
        calculateAnswer: (params) => params.force / params.area,
        formatAnswer: (answer) => Math.round(answer),
        answerUnit: {
            ru: "Па",
            en: "Pa",
            uk: "Па",
            de: "Pa",
            tr: "Pa",
            kk: "Па"
        }
    },
    {
        id: 4,
        difficulty: 9,
        topics: ["electrics", "power"],
        problem: {
            ru: "Электрический прибор с сопротивлением {resistance} Ом работает при напряжении {voltage} В. Найдите мощность тока в приборе. Ответ округлите до целых.",
            en: "An electrical device with a resistance of {resistance} Ω operates at a voltage of {voltage} V. Find the power of the current in the device. Round your answer to the nearest whole number.",
            uk: "Електричний прилад з опором {resistance} Ом працює при напрузі {voltage} В. Знайдіть потужність струму в приладі. Відповідь округліть до цілих.",
            de: "Ein elektrisches Gerät mit einem Widerstand von {resistance} Ω arbeitet bei einer Spannung von {voltage} V. Finden Sie die Leistung des Stroms im Gerät. Runden Sie Ihre Antwort auf die nächste ganze Zahl.",
            tr: "Direnci {resistance} Ω olan bir elektrikli cihaz {voltage} V voltajda çalışır. Cihazdaki akımın gücünü bulun. Cevabınızı tam sayıya yuvarlayın.",
            kk: "Кедергісі {resistance} Ом болатын электр құрылғысы {voltage} В кернеуде жұмыс істейді. Құрылғыдағы ток күшін табыңыз. Жауапты бүтін санға дейін дөңгелектеңіз."
        },
        generateParams: () => {
            const resistance = Math.floor(Math.random() * 200) + 10; // 10-210 Ом
            const voltage = Math.floor(Math.random() * 220) + 10; // 10-230 В
            return { resistance, voltage };
        },
        
        calculateAnswer: (params) => Math.pow(params.voltage, 2) / params.resistance,
        formatAnswer: (answer) => Math.round(answer),
        answerUnit: {
            ru: "Вт",
            en: "W",
            uk: "Вт",
            de: "W",
            tr: "W",
            kk: "Вт"
        }
    }
    
];
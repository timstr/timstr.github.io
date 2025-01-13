try {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let log = document.getElementById("log");

    let spanNumWeeks = document.getElementById("numweeks")
    let spanNumDays = document.getElementById("numdays")
    let spanNumHours = document.getElementById("numhours")
    let spanNumMinutes = document.getElementById("numminutes")

    let spanWeeks = document.getElementById("weeks");
    let spanDays = document.getElementById("days");
    let spanHours = document.getElementById("hours");
    let spanMinutes = document.getElementById("minutes");

    const pixelSize = 8;
    const numCols = canvas.width / pixelSize;
    const numRows = canvas.height / pixelSize;

    const frameIntervalMs = 100;
    const startTime = Date.now();
    let state = { nextDrawTime: startTime + frameIntervalMs };

    function anim(x, y, t, progress) {
        const snakeTailX = 10;
        const snakeHeadX = Math.round(snakeTailX + progress * (102 - snakeTailX))
        const snakeThickness = Math.min(
            4,
            Math.max(0.5, 0.2 * (x - snakeTailX)),
            Math.max(0.5, 0.4 * (snakeHeadX - x)),
        );
        const mainWave = Math.round(2.0 * Math.sin(Math.PI * (2.0 * t + 0.1 * x)));
        const mainWaveAtHead = Math.round(2.0 * Math.sin(Math.PI * (2.0 * t + 0.1 * snakeHeadX)));
        const yFromSnakeWave = y + mainWave - 20;
        const yFromSnakeHead = y + mainWaveAtHead - 20;
        const xFromSnakeHead = x - snakeHeadX;
        const headMask = Math.hypot(0.6 * (xFromSnakeHead - 2), yFromSnakeHead) < 4 ? 1.0 : 0.0;
        const bodyTailMask = (x >= snakeTailX && x <= snakeHeadX && Math.abs(yFromSnakeWave) <= snakeThickness) ? 1.0 : 0.0;

        const tongueTime = Math.round(Math.abs(10 * Math.sin(t))) == 1;
        const tongueMask = ((Math.abs(yFromSnakeHead) < 1) && (Math.abs(xFromSnakeHead - 12) < 4)) ? tongueTime : 0.0;

        const checkerBoard = (Math.floor(x / 2) + Math.floor(y / 2)) % 2 == 0 ? 0.8 : 0.0;

        const checkerBoardMask = (Math.abs(x - 106.5) < 2.9) ? 1.0 : 0.0;

        const bodyMask = Math.min(1.0, headMask + bodyTailMask + tongueMask)

        const headFade = Math.max(0, Math.min(1, 0.05 * (snakeHeadX - x)));
        const headShade = Math.max(0, 0.2 * yFromSnakeHead)

        const shade = 0.7 - headFade * 0.2 * Math.sin(yFromSnakeWave * 0.25 * Math.PI) - 0.3 * (1 - headFade) * headShade

        const stripe = headFade * Math.round(Math.max(0, 1 - yFromSnakeWave / snakeThickness) * (0.5 + 0.5 * Math.cos(Math.PI * 0.2 * x)));

        const eyeball = Math.hypot(xFromSnakeHead - 2, 1.3 * yFromSnakeHead) < 2.1 ? 1.0 : 0.0
        const pupil = Math.hypot(xFromSnakeHead - 3, yFromSnakeHead) < 1 ? 1.0 : 0.0

        const skinR = Math.max(0, (1.2 * stripe - 1)) * shade;
        const skinG = ((1 - 0.75 * stripe) + Math.max(0, (1.2 * stripe - 1) * 1.5)) * shade;
        const skinB = 0;

        const tongueR = 0.5;
        const tongueG = 0;
        const tongueB = 0;

        const bodyNoTongueR = (1 - eyeball) * skinR + (eyeball * (1 - pupil));
        const bodyNoTongueG = (1 - eyeball) * skinG + (eyeball * (1 - pupil));
        const bodyNoTongueB = (1 - eyeball) * skinB + (eyeball * (1 - pupil));

        const bodyR = bodyNoTongueR + tongueMask * (tongueR - bodyNoTongueR);
        const bodyG = bodyNoTongueG + tongueMask * (tongueG - bodyNoTongueG);
        const bodyB = bodyNoTongueB + tongueMask * (tongueB - bodyNoTongueB);

        const r = checkerBoard + bodyMask * (bodyR - checkerBoard);
        const g = checkerBoard + bodyMask * (bodyG - checkerBoard);
        const b = checkerBoard + bodyMask * (bodyB - checkerBoard);

        const a = Math.min(1, bodyMask + checkerBoardMask);

        return [r, g, b, a];
    }

    const orderTime = Date.UTC(2024, 7, 20, 20);
    const expectedDelivery = Date.UTC(2025, 4, 25, 20);

    const secondsPerMinute = 60;
    const secondsPerHour = secondsPerMinute * 60;
    const secondsPerDay = secondsPerHour * 24;
    const secondsPerWeek = secondsPerDay * 7;

    function pluralize(s, n) {
        if (n == 1) {
            return s
        }
        return s + "s"
    }

    function redraw() {
        requestAnimationFrame(redraw);
        const time = Date.now();
        const animTime = (state.nextDrawTime - startTime) * 0.001;
        if (time < state.nextDrawTime) {
            return;
        }
        state.nextDrawTime = time + frameIntervalMs;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // TEST
        // const progress = Math.min(1, Math.max(0, 0.5 + 0.6 * Math.sin(animTime * 0.2)));
        // const timeRemainingMs = Math.max((1 - progress) * (expectedDelivery - orderTime), 0);

        const timeRemainingMs = Math.max(expectedDelivery - time, 0);
        const progress = timeRemainingMs / (expectedDelivery - orderTime);

        let timeRemainingS = timeRemainingMs * 0.001;

        const weeksRemaining = Math.floor(timeRemainingS / secondsPerWeek);
        timeRemainingS -= weeksRemaining * secondsPerWeek;
        const daysRemaining = Math.floor(timeRemainingS / secondsPerDay);
        timeRemainingS -= daysRemaining * secondsPerDay;
        const hoursRemaining = Math.floor(timeRemainingS / secondsPerHour);
        timeRemainingS -= hoursRemaining * secondsPerHour;
        const minutesRemaining = Math.floor(timeRemainingS / secondsPerMinute);

        spanNumWeeks.innerText = `${weeksRemaining}`
        spanNumDays.innerText = `${daysRemaining}`
        spanNumHours.innerText = `${hoursRemaining}`
        spanNumMinutes.innerText = `${minutesRemaining}`

        spanWeeks.innerText = `${pluralize("week", weeksRemaining)},`;
        spanDays.innerText = `${pluralize("day", daysRemaining)},`;
        spanHours.innerText = `${pluralize("hour", hoursRemaining)},`;
        spanMinutes.innerText = `${pluralize("minute", minutesRemaining)} to go`;

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const [r, g, b, a] = anim(j, i, animTime, progress);
                ctx.fillStyle = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
                ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
            }
        }

    }

    redraw();
} catch (err) {
    alert(`Oh drat: ${err}`)
}
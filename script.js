function calculate() {
    let probability = document.getElementById("probability").value;
    probability = parseFloat(probability) / 100; // 퍼센트를 소수로 변환

    if (probability <= 0 || probability > 1 || isNaN(probability)) {
        document.getElementById("result").innerText = "올바른 확률(0보다 크고 100 이하)을 입력하세요.";
        return;
    }

    let expectedTries = Math.ceil(1 / probability); // 기댓값 계산
    let ninetyPercentTries = Math.ceil(Math.log(0.1) / Math.log(1 - probability)); // 90% 확률로 획득하는 시도 횟수

    document.getElementById("result").innerHTML = 
        `평균적으로 ${expectedTries}번 시도하면 획득할 수 있습니다.<br>
        90% 확률로 획득하려면 약 ${ninetyPercentTries}번 시도하세요.`;
}
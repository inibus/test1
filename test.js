function submitForm() {
    var totalTime = parseInt(document.getElementById("totalTime").value, 10);
    // totalTime 값을 일의 자리에서 반올림
    totalTime = Math.round(totalTime / 10) * 10;
    var numberOfKids = parseInt(document.getElementById("numberOfKids").value, 10);
    var menuCount = parseInt(document.getElementById("menuCount").value, 10);

    // 서비스 적용 개수 계산
    var serviceCount;
    if (numberOfKids > menuCount) {
        serviceCount = menuCount;
    } else {
        serviceCount = numberOfKids;
    }

    // 기본 계산식 적용
    var result = (serviceCount * (totalTime - 60 - 30))/10* 1000;
    
    // 추가 요금 계산
    var extra = 0;
    if (numberOfKids > menuCount) {
        extra = ((numberOfKids - menuCount) * (totalTime - 60)) / 10* 1000;
    }

    // 최종값 계산
    var finalAmount = result + extra;

    // 결과, 추가 요금 및 최종값 표시
    var displayText = "(서비스 적용) 요금 계산 결과: " + result;
    if (extra > 0) {
        displayText += ", (서비스 미적용) 추가 요금: " + extra;
    }
    displayText += ", 총 비용: " + finalAmount;

    document.getElementById("info").innerText = displayText;
}

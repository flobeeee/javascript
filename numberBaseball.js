// gpt 생성

// 랜덤한 숫자 생성 함수
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 사용자 입력 받기 함수
  function getUserInput() {
    const input = prompt("세 자리 숫자를 입력하세요:");
    return input;
  }

  // 숫자 야구 게임 함수
  function playNumberBaseball() {
    const answer = generateRandomNumber(100, 999).toString();
    let tries = 0;

    while (true) {
      const guess = getUserInput();

      if (guess.length !== 3 || isNaN(guess)) {
        alert("세 자리 숫자를 입력해야 합니다.");
        continue;
      }

      let strike = 0;
      let ball = 0;

      for (let i = 0; i < 3; i++) {
        if (guess[i] === answer[i]) {
          strike++;
        } else if (answer.includes(guess[i])) {
          ball++;
        }
      }

      tries++;

      if (strike === 3) {
        alert(`축하합니다! 정답을 맞추셨습니다. ${tries}번 시도했습니다.`);
        break;
      } else {
        alert(`스트라이크: ${strike}, 볼: ${ball}`);
      }
    }
  }

  // 게임 실행
  playNumberBaseball();

async function test (text, time) {
	return new Promise((resolved, rejected) => {
		setTimeout(
			() =>
				typeof text === 'string'
					? resolved('문자열 들어옴')
					: rejected('문자열 아님'), time
		)
	})
}

// console.time("소요시간")
// await test("3초", 3000)
// await test("2초", 2000)
// await test("1초", 1000)
// console.timeEnd("소요시간") // 6.005s

// ! promise.all
// 순서가 보장되지 않아도 되는 상황에서, 병렬로 처리할 수 있다.

console.time("소요시간")
await Promise.all([
	test("3초", 3000),
	test("2초", 2000),
	test("1초", 1000)
])
console.timeEnd("소요시간") // 3.003s

// await 안붙이는 경우 -> 쓰지말기
console.time("소요시간1")
Promise.all([
	test("3초", 3000),
	test("2초", 2000),
	test("1초", 1000)
])
console.timeEnd("소요시간1") // 0.074s

// 비동기 처리가 실패했을 경우, 즉시 에러를 반환한다.

// 참고 : https://code-masterjung.tistory.com/91

// ! await 주의사항

async function timeSet () {
	console.time("소요시간3")
	await	test("3초", 3000)
	await test("3초", 3000)
	await test("3초", 3000)
	console.timeEnd("소요시간3")
}

timeSet() // 9초가량

async function timeSet1() {
	console.time("소요시간4")
	let promise01 = test("3초", 3000)
	let promise02 = test("3초", 3000)
	let promise03 = test("3초", 3000)
	
	await promise01;
	await promise02;
	await promise03;
	console.timeEnd("소요시간4")
}

timeSet1() // 3초가량
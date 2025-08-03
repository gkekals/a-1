// 칭찬 메시지 (20개)
const messages = [
    "넌 존재 자체가 소중해! 🌟",
    "세상에 하나뿐인 보물이야 💎",
    "오늘도 멋지게 버틴 너, 짱이야 👍",
    "네가 웃으면 나도 좋아져 😊",
    "어디서 그런 멋진 기운이 나와? 🔥",
    "진짜 매력 넘쳐!",
    "이 세상 귀여움 다 가져갔네? 🐥",
    "너 덕분에 세상이 밝아졌어 ☀️",
    "잘하고 있어, 지금도 충분해 😌",
    "넌 나의 히어로야 🦸‍♀️🦸‍♂️",
    "네 미소는 모두에게 큰 선물이에요 🎁",
    "너와 함께라서 정말 행복해 😊",
    "힘든 순간에도 포기하지 않는 모습 멋져요!",
    "오늘 하루도 빛나는 너에게 박수를! 👏",
    "넌 항상 나에게 영감을 줘 🌈",
    "네가 있어서 세상이 더 좋아졌어 🐾",
    "매일매일 너를 응원하고 있어요!",
    "네 긍정 에너지는 전염성이 있어요 ⚡",
    "힘든 날일수록 넌 더 강해지고 있어 💪",
    "오늘도 멋진 하루 보내자! 🕺"
];

// 배경 그라데이션
const gradients = [
    "linear-gradient(135deg, #ffd3ec, #c9e4ff)",
    "linear-gradient(135deg, #b2fefa, #ef96c5)",
    "linear-gradient(135deg, #fad0c4, #ffd1ff)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)"
];

// 비밀 메시지 (15개)
const secretMessages = [
    "넌 생각보다 훨씬 멋진 사람이야! 🌟",
    "너의 존재만으로 이미 큰 힘이 돼.",
    "여기까지 와준 너, 정말 고마워~",
    "힘들 땐 잠깐 쉬어도 괜찮아. 네가 얼마나 대단한지 잊지 마!",
    "누군가는 분명 너 덕분에 오늘 웃었을 거야 😊",
    "너 자신을 소중히! 너 없인 이 세상이 심심해~",
    "네 노력은 결코 헛되지 않을 거야!",
    "몰라도 괜찮아, 항상 다시 시작할 수 있어.",
    "작은 변화도 큰 성공의 시작이란 걸 기억해!",
    "네가 있는 세상은 더 따뜻해졌어 🧸",
    "오늘도 너를 위한 응원의 한 마디!",
    "네 마음이 편안해지길 진심으로 바래.",
    "힘들 때는 언제든 기대도 돼요.",
    "힘내! 넌 그 어떤 것보다 소중해.",
    "네가 있어 주는 것만으로도 큰 의미가 있어."
];

// 칭찬 메시지 보여주기
function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[randomIndex];
    document.getElementById("secretMsg").style.display = "none";
    // 춤추는 캐릭터 숨기기
    document.getElementById("danceArea").innerHTML = '';
}

// 비밀 메시지 보여주기
function showSecretMessage() {
    const msg = secretMessages[Math.floor(Math.random() * secretMessages.length)];
    const secretElem = document.getElementById("secretMsg");
    secretElem.style.display = "block";
    secretElem.textContent = msg;
    // 춤추는 캐릭터 숨기기
    document.getElementById("danceArea").innerHTML = '';
}

// 배경 바꾸기
function changeBackground() {
    document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)];
    // 춤추는 캐릭터 숨기기
    document.getElementById("danceArea").innerHTML = '';
}

// 칭찬 메시지 추가
function addCustomMessage() {
    const input = document.getElementById("customMessage");
    const value = input.value.trim();
    if (value) {
        messages.push(value);
        alert("네 칭찬이 추가됐어! 👏");
        input.value = "";
    }
}

// 춤 동작(랜덤) - 계속 춤추기
function showRandomDance() {
    const danceStyles = ['dance1', 'dance2', 'dance3', 'dance4', 'dance5'];
    const randomDance = danceStyles[Math.floor(Math.random() * danceStyles.length)];
    const danceHTML = `
        <div class="${randomDance}">
            <div class="dancer">
                <div class="dancer-head"></div>
                <div class="dancer-body"></div>
                <div class="dancer-arm left"></div>
                <div class="dancer-arm right"></div>
                <div class="dancer-leg left"></div>
                <div class="dancer-leg right"></div>
            </div>
        </div>
    `;
    document.getElementById("danceArea").innerHTML = danceHTML;
}

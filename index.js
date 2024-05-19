const questions = [
    {
        question: "理志くんはアメリカのどこで生まれたんですか？",
        options: ["インド", "カリフォルニア州", "テキサス州", "滋賀県"],
        correct: 1
    },
    {
        question: "理志くんは今年、何歳になるんですか？",
        options: ["24歳", "25歳", "22歳", "23歳"],
        correct: 3
    },
    {
        question: "理志くんは、靴を履かないと、何センチの身長になるんですか？",
        options: ["185センチ", "191センチ", "200センチ", "194センチ"],
        correct: 1
    },
    {
        question: "理志くんは、どんな仕事をしていますか？",
        options: ["代表取締役社長", "プログラマー", "デザイナー", "営業"],
        correct: 0
    },
    { // isolation question, so choose the one where rishi hasnt been to
        question: "理志くんは、以下のどんな都市に行ったことがありませんか？",
        options: ["福岡", "京都", "大阪", "名古屋"],
        correct: 0
    },
    { // another isolation, so choose the one where rishi hasnt eaten
        question: "理志くんは、以下のどんな日本食を食べたことがありませんか？",
        options: ["寿司", "うなぎ", "冷奴", "お刺身"],
        correct: 1
    },
    {
        question: "理志くんは、女の子の好きじゃないタイプはどれですか？",
        options: ["競争心が強い", "恥ずかしくがり屋", "おしゃべり", "声が低い"],
        correct: 0
    },
    {
        question: "理志くんは、女の子の好きなタイプはどれですか？",
        options: ["批判的", "偽善者", "攻撃的", "紗風楽ちゃん"],
        correct: 3
    },
    {
        question: "理志くんは、5人の子供が欲しいけど、その中で男の子と女の子の理想な割合はどれですか？",
        options: ["３男２女", "２男３女", "４男１女", "５男０女"],
        correct: 0
    },
    {
        question: "理志くんは、紗風楽ちゃんのどんな特徴が一番好きですか？",
        options: ["優しさ", "美しさ", "声", "以上の全て"],
        correct: 3
    },
    {
        question: "理志くんの誕生日はいつですか？",
        options: ["8月10日", "8月29日", "7月20日", "11月22日"],
        correct: 1
    },
    {
        question: "理志くんは、紗風楽ちゃんに何をプレゼントしたいですか？",
        options: ["ネックレス", "指輪", "世界の全て", "車"],
        correct: 2
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0
let score = 0;

function startQuiz() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('option-buttons').style.display = 'flex';
    document.getElementById('score').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = question.options[index];
        option.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Reset background color
    });
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
        score++;
        document.getElementById('correct').innerText = score + "点";
        document.querySelectorAll('.option')[selectedIndex].style.backgroundColor = '#81d8de';
    } else {
        document.querySelectorAll('.option')[selectedIndex].style.backgroundColor = '#96594e';
        document.querySelectorAll('.option')[question.correct].style.backgroundColor = '#81d8de';
    }

    currentQuestionIndex++;

    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

/*
0-25%
p: まじか。紗風楽ちゃんならこのテストを余裕でパスすると思ったのに。
p1: もし紗風楽ちゃんに面接をしたら、落ちてしまうかもしれないね。残念だよ、もっと期待していたんだ。
p2: でも、クイズにわざと落ちて、メッセージが変わるか試したかっただけかもしれないね。それでもやっぱりまだ可愛いけど。

25%-50%
p: まあまあ、良くはないけど悪くもないかな。でも、もっと期待してたんだけどな。
p1: 紗風楽ちゃんが可愛いのは間違いないけど、覚えるのがちょっと苦手かもね。
p2: それでも、次はもっと頑張ってほしいな。クイズにわざと落ちて、メッセージが変わるか試したかもしれないし。それでもやっぱり可愛いよ。

50%-85%
p: 悪くない、本当だ！もっと素晴らしくパスできると思うけど。
p1: 紗風楽ちゃんはもう少し面接の準備が必要かもしれないな。少なくとも、見た目には気を使ってね。
p2: 僕たちが初めて会うとき、僕はきちんとスーツを着て、ちゃんとひげを剃るよ。そうすれば紗風楽ちゃんも僕をハンサムだと思うだろうし、サフちゃんの美しさと僕のハンサムさがいいコンビになりそう。

85+% 
p: 完璧なパートナーになりそうだね。本当に素晴らしいよ。サフちゃんは美しいだけでなく、とても思慮深い。
p1: 紗風楽ちゃんの過去の関係がうまくいかなかったことを喜ばしく思う。僕に君を大切に扱わせて、幸せにしてあげたい。
p2: もちろん、僕はコードを書くだけではないよ。それで、紗風楽ちゃん、一緒に世界を征服しようか？僕が王様になって、紗風楽ちゃんが僕のクイーンになってくれない？でもちょっと身長を伸ばしたらいいのに。笑
*/

const endScreen = [
    { // 0-25%
        s1: "まじか。紗風楽ちゃんならこのテストを余裕でパスすると思ったのに。",
        s2: "もし紗風楽ちゃんに面接をしたら、落ちてしまうかもしれないね。残念だよ、もっと期待していたんだ。",
        s3: "でも、クイズにわざと落ちて、メッセージが変わるか試したかっただけかもしれないね。それでもやっぱりまだ可愛いけど。"
    },
    { // 25-50%
        s1: "まあまあ、良くはないけど悪くもないかな。でも、もっと期待してたんだけどな。",
        s2: "紗風楽ちゃんが可愛いのは間違いないけど、覚えるのがちょっと苦手かもね。",
        s3: "それでも、次はもっと頑張ってほしいな。クイズにわざと落ちて、メッセージが変わるか試したかもしれないし。それでもやっぱり可愛いよ。"
    },
    { // 50-85%
        s1: "悪くない、本当だ！もっと素晴らしくパスできると思うけど。",
        s2: "紗風楽ちゃんはもう少し面接の準備が必要かもしれないな。少なくとも、見た目には気を使ってね。",
        s3: "僕たちが初めて会うとき、僕はきちんとスーツを着て、ちゃんとひげを剃るよ。そうすれば紗風楽ちゃんも僕をハンサムだと思うだろうし、サフちゃんの美しさと僕のハンサムさがいいコンビになりそう。"
    },
    {
        s1: "完璧なパートナーになりそうだね。本当に素晴らしいよ。サフちゃんは美しいだけでなく、とても思慮深い。",
        s2: "紗風楽ちゃんの過去の関係がうまくいかなかったことを喜ばしく思う。僕に君を大切に扱わせて、幸せにしてあげたい。",
        s3: "もちろん、僕はコードを書くだけではないよ。それで、紗風楽ちゃん、一緒に世界を征服しようか？僕が王様になって、紗風楽ちゃんが僕のクイーンになってくれない？でもちょっと身長を伸ばしたらいいのに。笑"
    }
]
// '
// <div class="end-explanation">
// <p class="final-score-end">
//     最終スコア: <span id="final-score">0</span>
// </p>
// <p id="sentence-1">
//     おめでとう！クイズを終えました！
// </p>
// <p id="sentence-2">
//     どうでしたか？楽しかったですか？もし楽しかったら、他の人にも教えてあげてください！
// </p>
// <p id="sentence-3">
//     またプレイしてください！
// </p>
// </div>'
function endQuiz() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('option-buttons').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('end').style.display = 'block';
    document.getElementById('final-score').innerText = score;

    // Grab the new divs and change them accordingly (set #end to show block)
    const endExplanation = document.querySelector('.end-explanation');
    const sentence1 = document.getElementById('sentence-1');
    const sentence2 = document.getElementById('sentence-2');
    const sentence3 = document.getElementById('sentence-3');

    // Score/questionlength percentage calc
    const percentage = (score / questions.length) * 100;

    if (percentage < 25) {
        sentence1.innerText = endScreen[0].s1;
        sentence2.innerText = endScreen[0].s2;
        sentence3.innerText = endScreen[0].s3;
    }
    else if (percentage < 50) {
        sentence1.innerText = endScreen[1].s1;
        sentence2.innerText = endScreen[1].s2;
        sentence3.innerText = endScreen[1].s3;
    }
    else if (percentage < 85) {
        sentence1.innerText = endScreen[2].s1;
        sentence2.innerText = endScreen[2].s2;
        sentence3.innerText = endScreen[2].s3;
    }
    else {
        sentence1.innerText = endScreen[3].s1;
        sentence2.innerText = endScreen[3].s2;
        sentence3.innerText = endScreen[3].s3;
    }

    // Show the end screen
    document.getElementById('end').style.display = 'flex';

    // Set the final score
    document.getElementById('final-score').innerText = score;

    // Reset the score
    score = 0;

    // Reset the current question index
    currentQuestionIndex = 0;
}

function restartQuiz() {
    score = 0;
    document.getElementById('correct').innerText = score + "点";

    
    document.getElementById('end').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('option-buttons').style.display = 'flex';
    document.getElementById('score').style.display = 'block';
    showQuestion();
}
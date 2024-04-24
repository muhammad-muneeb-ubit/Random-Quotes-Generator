
let quotesGenerator = () => {
    let quotes = [
        "Spread love everywhere you go.",
        "Love for others what you love for yourself.",
        "Do good to others, and goodness will come back to you.",
        "Seek knowledge from the cradle to the grave",
        "The ink of the scholar is more sacred than the blood of the martyr.",
        "He who seeks knowledge, Allah will make his path to Paradise easy.",
        "Patience is a pillar of faith.",
        "Contentment is the greatest wealth",
        "Whoever is not grateful to people is not grateful to Allah.",
        "Optimism is a sunnah"
    ]
    let random = Math.floor(Math.random()*quotes.length);
    let para = document.querySelector(".quotes");
    para.innerText = quotes[random];
    console.log(random)
    
    }
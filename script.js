const game = ()=> {
    let pScore = 0 ;
    let cScore = 0 ;

    //This function below starts the game or has the fade transitions
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button') ;
        const introScreen = document.querySelector('.intro') ;
        const match = document.querySelector('.match') ;

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut') ;
            match.classList.add('fadeIn') ;
        }) ;
    } ; 
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button') ;
        const playerHand = document.querySelector('.player-hand') ;
        const computerHand = document.querySelector('.computer-hand') ;
        const hands = document.querySelectorAll('.hands img') ;

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "" ;
            }) ;
        })
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'] ;

        options.forEach((option)=>{
            option.addEventListener('click', function(){
            //computer generated choice
            const computerNumber = Math.floor(Math.random() * 3) ; 
            const computerChoice = computerOptions[computerNumber] ;

            setTimeout(() => {
            //This is where we call compare hands
            compareHands(this.textContent, computerChoice) ;

            //Update Images
            playerHand.src = `./assets/${this.textContent}.png` ;
            computerHand.src = `./assets/${computerChoice}.png` ;
            }, 2000) ;
            //Hand Animation
            playerHand.style.animation = "shakePlayer 2s ease" ;
            computerHand.style.animation = "shakeComputer 2s ease" ;
            }) ;
        }) ;

    } ;

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p') ;
        const computerScore = document.querySelector('.computer-score p') ;
        playerScore.textContent = pScore ;
        computerScore.textContent = cScore ;
    }

    const compareHands = (playerChoice, computerChoice) =>{
        //Update Text
        const winner = document.querySelector('.winner') ;
        //checking for a tie or draw
        if(playerChoice === computerChoice){
            winner.textContent = 'Whoa! A tie!' ;
            return;
        }
        //checking for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You Win!' ;
                pScore++ ;
                updateScore() ;
                return ;
            }else{
                winner.textContent = 'Computer Wins!' ;
                cScore++ ;
                updateScore() ;
                return ;
            }
        }
        //checking for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins!' ;
                cScore++ ;
                updateScore() ;
                return ;
            }else{
                winner.textContent = 'You Win!' ;
                pScore++ ;
                updateScore() ;
                return ;
            }
        }
        //checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins!' ;
                cScore++ ;
                updateScore() ;
                return ;
            }else{
                winner.textContent = 'You Win!' ;
                pScore++ ;
                updateScore() ;
                return ;
            }
        }
    } ;


    //call out all inner functions
    startGame() ; 
    playMatch() ;
} ;

game() ;
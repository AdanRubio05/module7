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
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'] ;

        options.forEach((option)=>{
            option.addEventListener('click', function(){
            //computer generated choice
            const computerNumber = Math.floor(Math.random() * 3) ; 
            const computerChoice = computerOptions[computerNumber] ;
            //This is where we call compare hands
            compareHands(this.textContent, computerChoice) ;

            //Update Images
            playerHand.src = `./assets/${this.textContent}.png` ;
            computerHand.src = `./assets/${computerChoice}.png` ;
            }) ;
        }) ;

    } ;

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
                return ;
            }else{
                winner.textContent = 'Computer Wins!' ;
                return ;
            }
        }
        //checking for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins!' ;
                return ;
            }else{
                winner.textContent = 'You Win!' ;
                return ;
            }
        }
        //checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins!' ;
                return ;
            }else{
                winner.textContent = 'You Win!' ;
                return ;
            }
        }
    } ;


    //call out all inner functions
    startGame() ; 
    playMatch() ;
} ;

game() ;
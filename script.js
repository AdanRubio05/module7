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
    //call out all inner functions
    startGame() ; 
} ;

game() ;
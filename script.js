const game = () => {
    let pScore = 0 ;
    let cScore = 0 ;

    //Start Game Screen
    const startGame = () => {
        const playBtn = document.querySelector('.intro button') ;
        const introScreen = document.querySelector('.intro') ;
        const match = document.querySelector('.match') ;

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut') ;
            match.classList.add('fadeIn') ;
        }) ;
    } ;
}


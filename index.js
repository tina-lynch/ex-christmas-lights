let btn = document.querySelector('.btn-container button');
let btnCont = document.querySelector('.btn-container');

let cont = document.querySelector('.container');
let lights = document.querySelectorAll('.lights');
// let stop = document.querySelector('.btn-container stop');

let faster = document.querySelector('.speed-container #faster');
let slower = document.querySelector('.speed-container #slower');
let speedCont = document.querySelector('.speed-container');


let speed = 300;
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const changeLights = async (speed) =>{
    lights.forEach(light => (light.classList.remove('small')));
    for (const light of lights){
        await wait(speed).then((light.classList.add('small')));
    }
  }

const handleClick = async () =>{ 
    btn.innerHTML = 'STOP';
    speedCont.classList.remove('hidden');
    cont.classList.remove('stop');

    btnCont.removeEventListener('click', handleClick);
    btnCont.addEventListener('click', stopLights);
    
    console.log('starting, speed is ' + speed)
    changeLights(speed)
}


const stopLights = () => {
    cont.classList.add('stop');

    let x = setInterval(() => {
        btn.innerHTML = 'STOPPING';
        if(document.querySelectorAll('.lights.small').length) {
            lights.forEach(light => (light.classList.remove('small')))
        } else {
           clearInterval(x);
           btn.innerHTML = 'RESTART';
           btnCont.addEventListener('click', handleClick);
        }
    }, 150 )
    console.log(speed)

    btnCont.removeEventListener('click', stopLights);
}

const changeSpeed = (e) => {
    switch(e.target) {
        case slower:
            speed = speed * 2;
            break;
        case faster:
            speed = speed / 2;
            break;
        default: 
            speed = 300;
    }
    console.log(speed)
    changeLights(speed);
}


btnCont.addEventListener('click', handleClick);
speedCont.addEventListener('click', changeSpeed);
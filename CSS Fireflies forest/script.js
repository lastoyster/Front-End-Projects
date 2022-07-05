const frame = document.createElement('div');
frame.classList.add('frame');
document.body.appendChild(frame);

for (i=1; i<=50; i++){
    const fly = document.createElement('div'),
    dot = document.createElement('div');
    fly.classList.add('fly');
    fly.classList.add('fly-'+i);
    frame.appendChild(fly);
    dot.classList.add('dot');
    dot.classList.add('dot-'+i);
    fly.appendChild(dot);
}
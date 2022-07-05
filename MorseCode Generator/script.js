const MORSE_CODE = {
  '._': 'a',
  '_...': 'b',
  '_._.': 'c',
  '_..': 'd',
  '.': 'e',
  '.._.': 'f',
  '__.': 'g',
  '....': 'h',
  '..': 'i',
  '.___': 'j',
  '_._': 'k',
  '._..': 'l',
  __: 'm',
  '_.': 'n',
  ___: 'o',
  '.__.': 'p',
  '__._': 'q',
  '._.': 'r',
  '...': 's',
  _: 't',
  '.._': 'u',
  '..._': 'v',
  '.__': 'w',
  '_.._': 'x',
  '_.__': 'y',
  '__..': 'z',
  '.____': '1',
  '..___': '2',
  '...__': '3',
  '...._': '4',
  '.....': '5',
  '_....': '6',
  '__...': '7',
  '___..': '8',
  '____.': '9',
  _____: '0',
  '|': ' ',
};
const my_screen = document.querySelector('.screen');
const letters = document.querySelectorAll('p');
letters.forEach((l) => {
  l.addEventListener('click', (el) => {
    if (el.target.classList.contains('send')) {
      const children = my_screen.children;
      let numDone = 0;
      const timer = setInterval((a) => {
        children[numDone].style.setProperty('display', 'none');
        numDone++;
        if (numDone == children.length) {
          clearInterval(timer);

          my_screen.innerHTML = ''; // potential memory leaki
        }
      }, 100);
    } else {
      const s =
        Object.keys(MORSE_CODE)[
          Object.values(MORSE_CODE).findIndex(
            (x) => x == el.target.innerHTML.toLowerCase()
          )
        ];

      const myscreen = document.querySelector('.screen');
      for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const div = document.createElement('div');
        div.classList.add(c == '.' ? 'dot' : 'dash');
        myscreen.append(div);
      }
      const div = document.createElement('div');
      div.classList.add('space');
      myscreen.append(div);
    }
  });
});

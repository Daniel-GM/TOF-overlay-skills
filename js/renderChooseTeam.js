let elementoPai = $('.choose-team')
armas = [
  'ruby',
  'king',
  'annabella',
  'Tsubasa'
]

for (let i = 0; i < armas.lenght; i++) {
  elementoPai.append('<input type="checkbox" id="myCheckbox">');
  elementoPai.append('<label for="myCheckbox">My Checkbox</label>');
}
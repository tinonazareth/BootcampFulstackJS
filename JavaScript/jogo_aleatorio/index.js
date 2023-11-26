const numeroMax = 100;
const aleatorio = Math.floor(Math.random() * numeroMax) + 1;

let advinha = prompt(`Tente adivinhar o número que eu escolhi entre 1 e 100 ${numeroMax}:`);

while (advinha != aleatorio) {
  if (advinha > aleatorio) {
    advinha = prompt(`O número que eu escolhi é menor do que ${advinha}. Tente novamente:`);
  } else {
    advinha = prompt(`O número que eu escolhi é maior do que ${advinha}. Tente novamente:`);
  }
}

alert(`Parabéns!!! Você adivinhou o número (${aleatorio}).`);

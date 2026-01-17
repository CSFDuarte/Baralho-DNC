import { CardSuit, CardValue } from './dealer';
import { translateSuit, translateValue } from './translation';

console.assert(translateSuit(CardSuit.HEARTS) === 'Copas', 'Test Failed: HEARTS should be Copas');
console.assert(translateSuit(CardSuit.DIAMONDS) === 'Ouros', 'Test Failed: DIAMONDS should be Ouros');
console.assert(translateSuit(CardSuit.CLUBS) === 'Paus', 'Test Failed: CLUBS should be Paus');
console.assert(translateSuit(CardSuit.SPADES) === 'Espadas', 'Test Failed: SPADES should be Espadas');

console.assert(translateValue(CardValue.ACE) === 'Ás', 'Test Failed: ACE should be Ás');
console.assert(translateValue('2') === 'Dois', 'Test Failed: 2 should be Dois');
console.assert(translateValue('10') === 'Dez', 'Test Failed: 10 should be Dez');
console.assert(translateValue(CardValue.KING) === 'Rei', 'Test Failed: KING should be Rei');

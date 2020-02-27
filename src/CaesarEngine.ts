export class CaesarEngine {
	
	private alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
	"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
	"Z", "Æ", "Ø", "Å"];
	
	public encrypt(message: string, key: number): string {
		var upperMessage = message.toUpperCase();       
		const keyMod = key % 29;
		var cipherText = "";
		for (var i = 0; i < upperMessage.length; i++) {
			cipherText = cipherText + this.handleCharacter(upperMessage.charAt(i), keyMod)
		}
		return cipherText;
	}
	
	public decrypt(cipherText: string, key: number): string {
		return this.encrypt(cipherText, -key)
	}

	public bruteForce(cipherText: string): string[] {
		var resultArray = new Array(this.alphabet.length);
    for (var i = 1; i < resultArray.length; i++) {
      resultArray[i] = this.decrypt(cipherText, i);
		}
		return resultArray;
	}

	private handleCharacter(char:string, key:number) {
    var shiftedIndex = 0;    
    var charIndex = this.alphabet.indexOf(char)
    if (charIndex !== -1) {
      shiftedIndex = (charIndex + key) % this.alphabet.length;
      if (shiftedIndex < 0) {
        //shiftedIndex is negative
        shiftedIndex = this.alphabet.length + shiftedIndex;
      }
      return this.alphabet[shiftedIndex];
    }
    return char;
	}
}
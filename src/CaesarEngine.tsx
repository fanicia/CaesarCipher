

export default class CaesarEngine {

  private alphabet: string[];

  public constructor() {
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", 
                      "Z", "Æ", "Ø", "Å"];
  }

  public encrypt(m:string, key:number) : string {
    m = m.toUpperCase();
    let keyMod = key % 28;
    let c = "";
    for (var i = 0; i < m.length; i++) {
      c = c + this.handleCharacter(m.charAt(i), keyMod)
    }
    return c;
  }

  public decrypt(m:string, key:number) : string {
    return this.encrypt(m, -key);
  }

  private handleCharacter(char:string, key:number) {
    let shiftedIndex = 0;    
    let charIndex = this.alphabet.indexOf(char)
    if (charIndex !== -1) {
      shiftedIndex = (charIndex + key) % this.alphabet.length;
      if (shiftedIndex < 0) {
        //shiftedIndex is negative
        shiftedIndex = this.alphabet.length + shiftedIndex;
      }
      console.log("Just shifted " + char + " to " + this.alphabet[shiftedIndex] + " for key: " + key);
      return this.alphabet[shiftedIndex];
    }
    console.log("skipped shifting char: " + char);
    return char;
  }

}
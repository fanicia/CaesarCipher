

export default class CaesarEngine {

  private alphabet: string[];

  public constructor() {
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
                      "Z", "Æ", "Ø", "Å"];
  }

  public encrypt(m:string, key:number) : string {
    m = m.toUpperCase();
    let keyMod = key % 29;
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
      return this.alphabet[shiftedIndex];
    }
    return char;
  }

}
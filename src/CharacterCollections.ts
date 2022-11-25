export class CharacterCollection {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length
  }
  
}

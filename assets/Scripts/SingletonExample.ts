export class SingletonExample {
  private static _instance: SingletonExample | null = null;
  private _value = 0;
  private constructor() {}

  public static getInstance(): SingletonExample {
    return this._instance ?? (this._instance = new SingletonExample());
  }

  public get value(): number { return this._value; }
  public set value(v: number) { this._value = v; }
}
/*
    Liskov Substitution princple aims that subclasses must have  props and behavours as same as their parent classes.
    Objects should be replaceble with its subtypes.
    For example, a sport car has sports mode, all cars that inherit this sport car must have sports mode.
*/
namespace WrongDesign {
  /*
        In this example, Penguin should fly according to design
    */
  class Bird {
    private speed: number;
    private position: number;

    constructor(speed: number) {
      this.speed = speed;
      this.position = 0;
    }

    get Position(): number {
      return this.position;
    }

    set Speed(speed: number) {
      this.speed = speed;
    }

    get Speed(): number {
      return this.speed;
    }

    fly = () => {
      this.position += this.speed;
    };
  }

  class Penguin extends Bird {
    override fly = () => {
      throw new Error("I can't fly");
    };
  }

  let p = new Penguin(5);
  p.fly();
}

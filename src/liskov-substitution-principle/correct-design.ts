/**
 * With this design you can change objects their sub types and You don't force penguin to fly
 */

namespace CorrectDesign {
  interface ICanFly {
    fly(): void;
  }

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

    set Position(position: number) {
      this.position = position;
    }

    set Speed(speed: number) {
      this.speed = speed;
    }

    get Speed(): number {
      return this.speed;
    }
  }

  class Eagle extends Bird implements ICanFly {
    fly(): void {
      this.Position += this.Speed;
    }
  }

  class Penguin extends Bird {
    run(): void {
      this.Position += this.Speed;
    }
  }

  let p = new Penguin(5);
  p.run();
}

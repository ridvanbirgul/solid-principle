namespace CorrectDesign {
  /**
   * When we change our design like that, an animal needs only implement it's actions
   */
  interface ICanFly {
    fly(): void;
  }

  interface ICanBark {
    bark(): void;
  }

  interface ICanRun {
    run(): void;
  }

  interface ICanSwim {
    swim(): void;
  }

  class Bird implements ICanFly, ICanRun {
    fly(): void {
      console.log("I am flying");
    }
    run(): void {
      console.log("I am running");
    }
  }

  class Fish implements ICanSwim {
    swim(): void {
      console.log("I am swimming.");
    }
  }

  class Dog implements ICanRun {
    run(): void {
      console.log("I am running");
    }
  }
}

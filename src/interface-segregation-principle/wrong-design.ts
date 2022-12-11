/**
 * Interface segregation principle says that interfaces should be divided according to needs.
 * Client shouldn't implement unnecessary methods in a class.
 */
namespace WrongDesign {
  /**
   * In this design, every animal must have all action methods, even they can't do it.
   */
  interface IAnimal {
    fly(): void;
    bark(): void;
    run(): void;
    swim(): void;
  }

  class Bird implements IAnimal {
    fly(): void {
      console.log("I am flying");
    }
    bark(): void {
      throw new Error("Method not implemented.");
    }
    run(): void {
      console.log("I am running");
    }
    swim(): void {
      throw new Error("Method not implemented.");
    }
  }

  class Fish implements IAnimal {
    fly(): void {
      throw new Error("Method not implemented.");
    }
    bark(): void {
      throw new Error("Method not implemented.");
    }
    run(): void {
      throw new Error("Method not implemented.");
    }
    swim(): void {
      console.log("I am swimming.");
    }
  }
}

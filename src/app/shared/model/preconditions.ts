export class Preconditions {
  static IsNotUndefinedOrNull(name, value) {
    if (value === undefined || value === null) {
      throw new Error(`'${name}' attribute required.`);
    }
  }

  static IsArrayNotEmpty(name, array) {
    if (array === null || array === undefined || array.length === 0) {
      throw new Error(
        `'${name}' array is empty and must have at least one item.`
      );
    }
  }
}

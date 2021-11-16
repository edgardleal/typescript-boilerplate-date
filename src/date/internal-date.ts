/**
 * date.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
function twoDigits(value: number): string {
  if (value < 10) {
    return `0${value}`;
  }
  return `${value}`;
}

/**
 * Represents a date with internal functionalities
 */
export default class InternalDate {
  private nativeDate: Date;

  constructor(date: Date = new Date()) {
    this.nativeDate = date;
  }

  get year(): number {
    return this.nativeDate.getFullYear();
  }

  get month(): number {
    return this.nativeDate.getMonth() + 1;
  }

  get day(): number {
    return this.nativeDate.getDate();
  }

  /**
   * return a copy of native Date instance
   *
   * @returns {Date}
   */
  getDate(): Date {
    return new Date(this.nativeDate);
  }

  toString(): string {
    const year = this.nativeDate.getFullYear();
    const month = twoDigits(this.nativeDate.getMonth());
    const day = twoDigits(this.nativeDate.getDay());

    const hour = twoDigits(this.nativeDate.getHours());
    const minutes = twoDigits(this.nativeDate.getMinutes());
    const seconds = twoDigits(this.nativeDate.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  }
}

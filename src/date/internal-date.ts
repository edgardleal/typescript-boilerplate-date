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
 * A simple interface with all date parts as differents
 * fields to be used in formatters functions
 */
export interface DateParts {
  year: string;
  month: string;
  day: string;
  hour: string;
  minutes: string;
  seconds: string;
}

function defaultDateFormatter(parts: DateParts): string {
  const {
    year,
    month,
    day,
    hour,
    minutes,
    seconds,
  } = parts;
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}

export type FormatterFunction = (parts: DateParts) => string;

/**
 * Represents a date with internal functionalities
 */
export default class InternalDate {
  private nativeDate: Date;

  private formatter: FormatterFunction;

  constructor(date: Date = new Date(), formatter: FormatterFunction = defaultDateFormatter) {
    this.nativeDate = date;
    this.formatter = formatter;
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
    const parts = {
      year: `${this.nativeDate.getFullYear()}`,
      month: twoDigits(this.nativeDate.getMonth()),
      day: twoDigits(this.nativeDate.getDate()),
      hour: twoDigits(this.nativeDate.getHours()),
      minutes: twoDigits(this.nativeDate.getMinutes()),
      seconds: twoDigits(this.nativeDate.getSeconds()),
    };
    return this.formatter(parts);
  }
}

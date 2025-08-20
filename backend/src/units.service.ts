import { Injectable } from '@nestjs/common';

@Injectable()
export class UnitsService {
  convert(from: string, to: string, value: number) {
    const kmValue = this.toKm(from, value);
    return this.fromKm(to, kmValue);
  }

  toKm(unit: string, value: number): number {
    switch (unit) {
      case 'km':
        return value;
      case 'milla_romana':
        return value * 1.48;
      case 'estadio':
        return value * 0.185;
      default:
        throw new Error(`Unsupported unit: ${unit}`);
    }
  }

  fromKm(unit: string, km: number) {
    switch (unit) {
      case 'km':
        return { unit: 'km', value: km };
      case 'milla_romana':
        return { unit: 'milla_romana', value: km / 1.48 };
      case 'estadio':
        return { unit: 'estadio', value: km / 0.185 };
      default:
        throw new Error(`Unsupported unit: ${unit}`);
    }
  }
}

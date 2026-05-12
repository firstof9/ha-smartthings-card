import { describe, it, expect } from 'vitest';
import { formatCountdown, getFilterColor, getAsset } from '../src/utils';

describe('formatCountdown', () => {
  const mockCurrentTime = new Date('2026-05-12T16:00:00Z').getTime();

  it('should return --:--:-- for unavailable or unknown', () => {
    expect(formatCountdown('unavailable', mockCurrentTime)).toBe('--:--:--');
    expect(formatCountdown('unknown', mockCurrentTime)).toBe('--:--:--');
    expect(formatCountdown('', mockCurrentTime)).toBe('--:--:--');
  });

  it('should return the string if it is already a duration', () => {
    expect(formatCountdown('00:10:00', mockCurrentTime)).toBe('00:10:00');
    expect(formatCountdown('1:30', mockCurrentTime)).toBe('1:30');
  });

  it('should calculate the difference correctly', () => {
    const targetTime = new Date('2026-05-12T16:10:05Z').toISOString();
    expect(formatCountdown(targetTime, mockCurrentTime)).toBe('00:10:05');
  });

  it('should return 00:00:00 if the time has passed', () => {
    const pastTime = new Date('2026-05-12T15:59:59Z').toISOString();
    expect(formatCountdown(pastTime, mockCurrentTime)).toBe('00:00:00');
  });

  it('should return --:--:-- for invalid dates', () => {
    expect(formatCountdown('not-a-date', mockCurrentTime)).toBe('--:--:--');
  });
});

describe('getFilterColor', () => {
  it('should return green for low usage', () => {
    expect(getFilterColor('10')).toBe('var(--success-color, #4caf50)');
    expect(getFilterColor('49')).toBe('var(--success-color, #4caf50)');
  });

  it('should return orange for medium usage', () => {
    expect(getFilterColor('50')).toBe('var(--warning-color, #ff9800)');
    expect(getFilterColor('79')).toBe('var(--warning-color, #ff9800)');
  });

  it('should return red for high usage', () => {
    expect(getFilterColor('80')).toBe('var(--error-color, #f44336)');
    expect(getFilterColor('99')).toBe('var(--error-color, #f44336)');
  });

  it('should return disabled color for invalid state', () => {
    expect(getFilterColor('unknown')).toBe('var(--disabled-text-color, #bdbdbd)');
  });
});

describe('getAsset', () => {
  it('should return the embedded asset if found', () => {
    // Note: This assumes 'refrigerator' and 'freezer-temp.png' are in ASSETS
    const result = getAsset('refrigerator', 'freezer-temp.png');
    expect(result).toContain('data:image/png;base64');
  });

  it('should return a fallback path if asset is not found', () => {
    const result = getAsset('unknown', 'missing.png');
    expect(result).toBe('/local/community/ha-smartthings-card/images/unknown/missing.png');
  });
});

import { ASSETS } from './assets';

/**
 * Formats a timestamp into a countdown string HH:MM:SS
 */
export function formatCountdown(timeStr: string, currentTime: number): string {
  if (!timeStr || ['unavailable', 'unknown'].includes(timeStr.toLowerCase())) return '--:--:--';
  
  // If it's already a duration string like "00:10:00", just return it
  if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(timeStr)) {
    return timeStr;
  }

  const targetTime = new Date(timeStr).getTime();
  // If invalid date, return '--:--:--'
  if (isNaN(targetTime)) {
    return '--:--:--';
  }

  const diff = targetTime - currentTime;
  if (diff <= 0) {
    return '00:00:00';
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hStr = hours.toString().padStart(2, '0');
  const mStr = minutes.toString().padStart(2, '0');
  const sStr = seconds.toString().padStart(2, '0');

  return `${hStr}:${mStr}:${sStr}`;
}

/**
 * Returns a color based on filter usage percentage
 */
export function getFilterColor(state: string): string {
  const usage = parseFloat(state);
  if (isNaN(usage)) return 'var(--disabled-text-color, #bdbdbd)';
  if (usage < 50) return 'var(--success-color, #4caf50)'; // Green — plenty of life left
  if (usage < 80) return 'var(--warning-color, #ff9800)'; // Orange — order soon
  return 'var(--error-color, #f44336)'; // Red — replace now
}

/**
 * Resolves an asset path, checking the embedded ASSETS first
 */
export function getAsset(appliance: string, filename: string): string {
  const asset = ASSETS[appliance]?.[filename];
  if (asset) return asset;
  return `/local/community/ha-smartthings-card/images/${appliance}/${filename}`;
}

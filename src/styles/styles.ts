import { css } from 'lit';

export const styles = css`
  ha-card {
    overflow: hidden;
  }
  .container {
    position: relative;
    width: 100%;
    display: flex;
  }
  .bg {
    width: 100%;
    height: auto;
    display: block;
  }
  .mode-icon {
    position: absolute;
    top: 33%;
    left: 77%;
    width: 20%;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: translate(-50%, -50%);
  }
  /* Right Panel — stacks timer + controls vertically */
  .right-panel {
    position: absolute;
    right: 5%;
    top: 0;
    bottom: 3%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 2px;
  }
  .timer-row {
    position: relative;
    white-space: nowrap;
  }
  .time-bg,
  .time-fg {
    font-family: 'segment7', monospace;
    font-size: clamp(40px, 8vw, 50px);
    white-space: nowrap;
  }
  .time-bg {
    color: var(--divider-color, #333);
  }
  .time-fg {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--accent-color, #ff9800);
  }

  /* Refrigerator Styles */
  .refrigerator .fridge-icon,
  .refrigerator .freezer-icon,
  .refrigerator .icemaker-icon {
    position: absolute;
    top: 33%;
    width: 20%;
    transform: translate(-50%, -50%);
    image-rendering: pixelated;
  }
  .refrigerator .fridge-icon { left: 33%; }
  .refrigerator .freezer-icon { left: 51%; }
  .refrigerator .icemaker-icon { left: 69%; cursor: pointer; }

  .refrigerator .fridge-value-bg,
  .refrigerator .fridge-value,
  .refrigerator .freezer-value-bg,
  .refrigerator .freezer-value {
    position: absolute;
    top: 74%;
    transform: translate(-100%, -50%);
    font-family: 'segment7', monospace;
    font-size: 50px;
    white-space: nowrap;
  }
  .refrigerator .fridge-value-bg,
  .refrigerator .fridge-value { left: 40%; }
  .refrigerator .freezer-value-bg,
  .refrigerator .freezer-value { left: 57%; }

  .refrigerator .fridge-value-bg,
  .refrigerator .freezer-value-bg { color: var(--divider-color, #333); }
  .refrigerator .fridge-value,
  .refrigerator .freezer-value { color: var(--accent-color, #ff9800); }

  .filter-status {
    position: absolute;
    bottom: 8%;
    right: 2%;
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--secondary-text-color, #888);
  }
  .filter-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .filter-label {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .filter-info-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
  }
  .progress-bar {
    flex-grow: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
  .filter-percentage {
    min-width: 25px;
    text-align: right;
  }
  .reset-btn-mini {
    background: transparent;
    border: none;
    color: #f44336;
    cursor: pointer;
    padding: 2px;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease, filter 0.2s ease;
  }
  .reset-btn-mini:hover {
    transform: scale(1.3);
    filter: brightness(1.3);
  }
  .reset-btn-mini ha-icon {
    --mdc-icon-size: 16px;
  }

  .door-overlay {
    position: absolute;
    left: 1.5%;
    width: 17%;
    border-radius: 4px;
    transition: all 0.4s ease;
  }
  .door-overlay.closed {
    background: rgba(76, 175, 80, 0.15);
    border: 1px solid rgba(76, 175, 80, 0.4);
  }
  .door-overlay.open {
    background: rgba(255, 82, 82, 0.25);
    border: 1px solid rgba(255, 82, 82, 0.7);
    box-shadow: 0 0 8px rgba(255, 82, 82, 0.3);
  }
  /* Cooler door — top section */
  .door-overlay.door-top {
    top: 8%;
    height: 42%;
  }
  /* CoolSelect drawer — middle section */
  .door-overlay.door-middle {
    top: 52%;
    height: 18%;
  }
  /* Freezer drawer — bottom section */
  .door-overlay.door-bottom {
    top: 72%;
    height: 22%;
  }

  /* Ice Maker States */
  .refrigerator .icemaker-icon.on {
    filter: drop-shadow(0 0 6px rgba(76, 175, 80, 0.8)) drop-shadow(0 0 12px rgba(76, 175, 80, 0.4));
  }
  .refrigerator .icemaker-icon.off {
    animation: ice-pulse 2s ease-in-out infinite;
  }
  @keyframes ice-pulse {
    0%, 100% { filter: drop-shadow(0 0 0px transparent); opacity: 0.6; }
    50% { filter: drop-shadow(0 0 8px rgba(255, 82, 82, 0.7)); opacity: 1; }
  }
  .refrigerator .controls {
    display: none; /* Replaced by icons */
  }
  .control-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--ha-card-background, var(--card-background-color, rgba(0, 0, 0, 0.6)));
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  .control-box.on {
    color: var(--accent-color, #ff9800);
    border-color: var(--accent-color, #ff9800);
    background: rgba(255, 152, 0, 0.1);
  }
  .control-box.off {
    color: var(--secondary-text-color, #666);
    background: var(--ha-card-background, var(--card-background-color, rgba(0, 0, 0, 0.3)));
  }
  .control-box .label {
    font-size: 9px;
    margin-top: 4px;
    font-weight: bold;
  }
  .control-box ha-icon {
    --mdc-icon-size: 28px;
  }
  .control-box.filter {
    cursor: default;
    min-width: 120px;
  }
  .filter-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
  .reset-btn {
    margin-top: 8px;
    background: var(--accent-color, #ff9800);
    border: none;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .reset-btn:hover {
    filter: brightness(1.2);
  }
  .reset-btn:active {
    transform: scale(0.95);
  }

  /* Job States Styles */
  .job-states {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .job-icon {
    position: absolute;
    top: 23%;
    width: 18%;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: translate(-50%, -50%);
    filter: grayscale(1);
    transition: all 0.5s ease;
  }
  .washer .job-icon,
  .dryer .job-icon,
  .dishwasher .job-icon {
    top: 33%;
  }
  .job-icon.active {
    filter: grayscale(0) drop-shadow(0 0 12px var(--accent-color, #ff9800));
    transform: translate(-50%, -50%) scale(1.05);
  }

  /* Secondary Icons (WiFi, Lock) */
  .secondary-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .secondary-icon {
    position: absolute;
    top: 73%;
    width: 10%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  }
  .secondary-icon.active {
  }

  /* Microwave Controls */
  .microwave-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: auto;
  }
  .control-group {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(0, 0, 0, 0.4);
    padding: 4px 10px;
    border-radius: 16px;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .light-control {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--secondary-text-color, #888);
    transition: all 0.3s ease;
  }
  .light-control.on {
    color: var(--accent-color, #ff9800);
    filter: drop-shadow(0 0 5px var(--accent-color, #ff9800));
  }
  .fan-control {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--secondary-text-color, #888);
  }
  .fan-control.on {
    color: var(--accent-color, #ff9800);
  }
  .fan-slider {
    width: 80px;
    height: 4px;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    outline: none;
  }
  .fan-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: var(--accent-color, #ff9800);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  .fan-control.on ha-icon {
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

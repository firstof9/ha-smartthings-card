import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, SmartthingsCardConfig } from './types';
import { styles } from './styles/styles';
import { ASSETS } from './assets';
import './editor';
import { version } from '../package.json';

/* eslint no-console: 0 */
console.info(
  `%c SMARTTHINGS-CARD %c v${version} `,
  'color: white; background: #008cc0; font-weight: 700;',
  'color: #008cc0; background: white; font-weight: 700;',
);

@customElement('smartthings-card')
export class SmartthingsCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private config!: SmartthingsCardConfig;
  @state() private _currentTime = new Date().getTime();
  private _timer?: number;

  public static getConfigElement() {
    return document.createElement('smartthings-card-editor');
  }

  public static getStubConfig() {
    return {
      appliance_type: 'microwave',
    };
  }

  public static override get styles() {
    return styles;
  }

  public setConfig(config: SmartthingsCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    this.config = { ...config };
    if (!this.config.appliance_type) {
      this.config.appliance_type = 'microwave';
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this._timer = window.setInterval(() => {
      this._currentTime = new Date().getTime();
    }, 1000);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timer) {
      clearInterval(this._timer);
    }
  }

  protected override shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('config')) {
      return true;
    }

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (oldHass) {
      const entities = [
        this.config.power_entity,
        this.config.mode_entity,
        this.config.job_state_entity,
        this.config.machine_state_entity,
        this.config.time_entity,
        this.config.fridge_temp_entity,
        this.config.freezer_temp_entity,
        this.config.ice_maker_entity,
        this.config.filter_status_entity,
        this.config.filter_reset_entity,
        this.config.wifi_entity,
        this.config.lock_entity,
        this.config.fan_entity,
        this.config.light_entity,
        ...(this.config.door_entities || []),
      ].filter(Boolean) as string[];

      return entities.some((entity) => oldHass.states[entity] !== this.hass.states[entity]);
    }

    if (changedProps.has('_currentTime')) {
      return true;
    }

    return true;
  }

  private _formatCountdown(timeStr: string): string {
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

    const diff = targetTime - this._currentTime;
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

  protected override render(): TemplateResult | void {
    if (!this.config || !this.hass) {
      return html``;
    }

    const powerStateObj = this.config.power_entity ? this.hass.states[this.config.power_entity] : null;
    const machineStateObj = this.config.machine_state_entity ? this.hass.states[this.config.machine_state_entity] : null;
    const modeStateObj = this.config.mode_entity ? this.hass.states[this.config.mode_entity] : null;
    const jobStateObj = this.config.job_state_entity ? this.hass.states[this.config.job_state_entity] : null;
    const timeStateObj = this.config.time_entity ? this.hass.states[this.config.time_entity] : null;

    // Power logic
    if (machineStateObj && !powerStateObj) {
      // Logic for background or overall state if needed
    }

    // Active mode logic (prioritize job state, but fallback to mode if job state is idle/others for microwave only)
    const rawJobState = jobStateObj?.state?.toLowerCase() || 'off';
    const rawModeState = modeStateObj?.state?.toLowerCase() || 'off';
    const isJobIdle = ['none', 'others', 'off', 'unknown', 'unavailable', 'idle'].includes(rawJobState);
    
    const activeMode = (isJobIdle && this.config.appliance_type === 'microwave') ? rawModeState : rawJobState;
    const isPoweredOff = powerStateObj?.state === 'off';
    const timeState = (timeStateObj && !isPoweredOff) ? this._formatCountdown(timeStateObj.state) : '--:--:--';

    // Base paths
    const bgImg = `hass-samsung-${this.config.appliance_type}-card-bg-black.png`;
    const bgSrc = this.config.bg_image || this._getAsset(this.config.appliance_type, bgImg);

    if (this.config.appliance_type === 'refrigerator') {
      return this._renderRefrigerator();
    }

    return html`
      <ha-card>
        <div class="container ${this.config.appliance_type}">
          <img class="bg" src="${bgSrc}" @error=${this._handleImageError} />

          ${this._renderJobStates(activeMode)} ${this._renderSecondaryIcons()}

          <div class="right-panel">
            <div class="timer-row">
              <div class="time-bg">88:88:88</div>
              <div class="time-fg">${timeState}</div>
            </div>
            ${this.config.appliance_type === 'microwave' ? this._renderMicrowaveControls() : ''}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderMicrowaveControls(): TemplateResult | void {
    const fanStateObj = this.config.fan_entity ? this.hass.states[this.config.fan_entity] : null;
    const lightStateObj = this.config.light_entity ? this.hass.states[this.config.light_entity] : null;

    if (!fanStateObj && !lightStateObj) return;

    return html`
      <div class="microwave-controls">
        <div class="control-group">
          ${lightStateObj
            ? html`
                <div class="light-control ${lightStateObj.state === 'on' ? 'on' : ''}" @click=${this._toggleLight}>
                  <ha-icon icon="${lightStateObj.state === 'on' ? 'mdi:lightbulb' : 'mdi:lightbulb-outline'}"></ha-icon>
                </div>
              `
            : ''}
          ${fanStateObj
            ? html`
                <div class="fan-control ${fanStateObj.state !== '0' && fanStateObj.state !== 'off' ? 'on' : ''}">
                  <ha-icon icon="mdi:fan"></ha-icon>
                  <input
                    type="range"
                    class="fan-slider"
                    min="0"
                    max="2"
                    step="1"
                    .value=${fanStateObj.state}
                    @change=${this._handleFanSpeed}
                  />
                </div>
              `
            : ''}
        </div>
      </div>
    `;
  }

  private _toggleLight(): void {
    if (!this.hass || !this.config.light_entity) return;
    const state = this.hass.states[this.config.light_entity].state;
    this.hass.callService('light', state === 'on' ? 'turn_off' : 'turn_on', {
      entity_id: this.config.light_entity,
    });
  }

  private _handleFanSpeed(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value;
    if (!this.hass || !this.config.fan_entity) return;
    
    const domain = this.config.fan_entity.split('.')[0];
    const service = domain === 'number' ? 'set_value' : 'set_percentage';
    const data: Record<string, any> = { entity_id: this.config.fan_entity };
    
    if (domain === 'number') {
      data.value = value;
    } else {
      data.percentage = parseInt(value, 10);
    }

    this.hass.callService(domain, service, data);
  }

  private _renderJobStates(activeMode: string): TemplateResult | void {
    const appliance = this.config.appliance_type;

    interface Stage {
      name: string;
      left: string;
      icon?: string;
    }

    const stages: Record<string, Stage[]> = {
      dishwasher: [
        { name: 'prewash', left: '33%' },
        { name: 'wash', left: '51%', icon: 'wash-plate' },
        { name: 'rinse', left: '69%', icon: 'rinse-plate' },
        { name: 'dry', left: '85%', icon: 'dry-plate' },
      ],
      washer: [
        { name: 'sensing', left: '35%' },
        { name: 'wash', left: '52%' },
        { name: 'rinse', left: '69%' },
        { name: 'spin', left: '86%' },
      ],
      dryer: [
        { name: 'dry', left: '45%' },
        { name: 'cool', left: '75%' },
      ],
      microwave: [
        { name: 'microwave', left: '77%' },
        { name: 'autocook', left: '77%' },
      ],
      oven: [
        { name: 'cooking', left: '77%', icon: 'microwave' },
      ],
    };

    if (!stages[appliance]) return;

    const currentMode = activeMode.toLowerCase();
    const isIdle = ['none', 'off', 'unknown', 'unavailable', 'idle', 'standby'].includes(currentMode);

    const isMicrowave = appliance === 'microwave';

    return html`
      <div class="job-states">
        ${stages[appliance].map((stage) => {
          const isActive = !isIdle && (
            currentMode === stage.name || 
            currentMode === stage.icon ||
            currentMode.startsWith(stage.name) || 
            (stage.icon && currentMode.startsWith(stage.icon))
          );
          
          // For microwave, only render the active one if it's a shared position
          // If none are active, pick 'autocook' as the default to show
          if (isMicrowave && stage.left === '77%') {
             const activeStage = stages[appliance].find(s => !isIdle && (currentMode.startsWith(s.name) || (s.icon && currentMode.startsWith(s.icon))));
             if (activeStage) {
                if (stage.name !== activeStage.name) return '';
             } else if (stage.name !== 'autocook') {
                return '';
             }
          }

          const iconBase = stage.icon || stage.name;
          let iconName = isActive ? `${iconBase}-on.png` : `${iconBase}.png`;
          
          // Special handling for microwave autocook icons
          if (appliance === 'microwave' && iconBase === 'autocook') {
            iconName = isActive ? 'autocook.png' : 'autocook-off.png';
          }

          let iconSrc = this._getAsset(appliance, iconName);
          
          // Fallback if -on icon is missing
          if (isActive && !iconSrc) {
            iconSrc = this._getAsset(appliance, `${iconBase}.png`);
          }

          // If still no icon (e.g. microwave-on.png doesn't exist), return early or handle
          if (!iconSrc) return '';

          return html`
            <img class="job-icon ${isActive ? 'active' : ''}" src="${iconSrc}" style="left: ${stage.left}" title="${stage.name}" />
          `;
        })}
      </div>
    `;
  }

  private _renderSecondaryIcons(): TemplateResult | void {
    const wifiState = this.config.wifi_entity ? this.hass.states[this.config.wifi_entity] : null;
    const lockState = this.config.lock_entity ? this.hass.states[this.config.lock_entity] : null;

    if (!wifiState && !lockState) return;

    const appliance = this.config.appliance_type;

    return html`
      <div class="secondary-icons">
        ${wifiState
          ? html`
              <img
                class="secondary-icon wifi ${wifiState.state === 'on' ? 'active' : ''}"
                src="${this._getAsset(appliance, wifiState.state === 'on' ? 'wifi-on.png' : 'wifi.png')}"
                style="left: 32%"
              />
            `
          : ''}
        ${lockState && appliance !== 'microwave'
          ? html`
              <img
                class="secondary-icon lock ${lockState.state === 'on' ? 'active' : ''}"
                src="${this._getAsset(appliance, lockState.state === 'on' ? 'lock-on.png' : 'lock.png')}"
                style="left: 45%"
              />
            `
          : ''}
      </div>
    `;
  }

  private _getAsset(appliance: string, filename: string): string {
    const asset = ASSETS[appliance]?.[filename];
    if (asset) return asset;
    return `/local/community/ha-smartthings-card/images/${appliance}/${filename}`;
  }

  private _renderRefrigerator(): TemplateResult {
    const fridgeTemp = this.config.fridge_temp_entity ? this.hass.states[this.config.fridge_temp_entity] : null;
    const freezerTemp = this.config.freezer_temp_entity ? this.hass.states[this.config.freezer_temp_entity] : null;
    const iceMaker = this.config.ice_maker_entity ? this.hass.states[this.config.ice_maker_entity] : null;
    const filterStatus = this.config.filter_status_entity ? this.hass.states[this.config.filter_status_entity] : null;

    // Parse door entities into labeled objects with positions
    const doorData = (this.config.door_entities || []).map((id) => {
      const stateObj = this.hass.states[id];
      const entityId = id.toLowerCase();
      let position = 'top';
      if (entityId.includes('coolselect')) position = 'middle';
      else if (entityId.includes('freezer')) position = 'bottom';
      else if (entityId.includes('cooler')) position = 'top';
      const label = stateObj?.attributes?.friendly_name || id;
      return { position, label, isOpen: stateObj?.state === 'on' };
    });

    const bgImg = `hass-samsung-fridge-card-bg-black.png`;
    const bgSrc = this.config.bg_image || this._getAsset('refrigerator', bgImg);

    const fTemp = fridgeTemp ? Math.round(parseFloat(fridgeTemp.state)).toString() : '--';
    const frzTemp = freezerTemp ? Math.round(parseFloat(freezerTemp.state)).toString() : '--';

    return html`
      <ha-card>
        <div class="container refrigerator">
          <img class="bg" src="${bgSrc}" @error=${this._handleImageError} />

          <!-- Icons Layer -->
          <img class="fridge-icon" src="${this._getAsset('refrigerator', 'fridge-temp.png')}" />
          <img class="freezer-icon" src="${this._getAsset('refrigerator', 'freezer-temp.png')}" />
          ${iceMaker
            ? html`
                <img
                  class="icemaker-icon ${iceMaker.state === 'on' ? 'on' : 'off'}"
                  src="${this._getAsset('refrigerator', iceMaker.state === 'on' ? 'icemaker_on.png' : 'icemaker_off.png')}"
                  @click=${this._toggleIceMaker}
                  title="Ice Maker: ${iceMaker.state === 'on' ? 'On' : 'Off'}"
                />
              `
            : ''}

          <!-- Values Layer -->
          <div class="fridge-value-bg">88</div>
          <div class="fridge-value">${fTemp}</div>

          <div class="freezer-value-bg">88</div>
          <div class="freezer-value">${frzTemp}</div>

          <!-- Extra Info -->
          ${filterStatus
            ? html`
                <div class="filter-status">
                  <div class="filter-label-row">
                    <span class="filter-label" style="color: ${this._getFilterColor(filterStatus.state)}">Water Filter</span>
                    <button class="reset-btn-mini" @click=${this._resetFilter} title="Reset Filter">
                      <ha-icon icon="mdi:restart"></ha-icon>
                    </button>
                  </div>
                  <div class="filter-info-row">
                    <div class="progress-bar">
                      <div
                        class="progress-fill"
                        style="width: ${100 - parseFloat(filterStatus.state)}%; background-color: ${this._getFilterColor(filterStatus.state)}"
                      ></div>
                    </div>
                    <span class="filter-percentage" style="color: ${this._getFilterColor(filterStatus.state)}">${filterStatus.state}%</span>
                  </div>
                </div>
              `
            : ''}

          ${doorData.length > 0
            ? html`
                ${doorData.map(
                  (door) => html`
                    <div
                      class="door-overlay door-${door.position} ${door.isOpen ? 'open' : 'closed'}"
                      title="${door.label}: ${door.isOpen ? 'Open' : 'Closed'}"
                    ></div>
                  `,
                )}
              `
            : ''}
        </div>
      </ha-card>
    `;
  }

  private _getFilterColor(state: string): string {
    const usage = parseFloat(state);
    if (usage < 50) return 'var(--success-color, #4caf50)'; // Green — plenty of life left
    if (usage < 80) return 'var(--warning-color, #ff9800)'; // Orange — order soon
    return 'var(--error-color, #f44336)'; // Red — replace now
  }

  private _resetFilter(): void {
    if (!this.hass || !this.config.filter_reset_entity) {
      return;
    }

    const domain = this.config.filter_reset_entity.split('.')[0];
    const service = domain === 'button' ? 'press' : 'turn_on';

    this.hass.callService(domain, service, {
      entity_id: this.config.filter_reset_entity,
    });
  }

  private _toggleIceMaker(): void {
    if (!this.hass || !this.config.ice_maker_entity) {
      return;
    }

    const state = this.hass.states[this.config.ice_maker_entity].state;
    const service = state === 'on' ? 'turn_off' : 'turn_on';
    const domain = this.config.ice_maker_entity.split('.')[0];

    this.hass.callService(domain, service, {
      entity_id: this.config.ice_maker_entity,
    });
  }

  private _handleImageError(ev: Event): void {
    const img = ev.target as HTMLImageElement;
    img.style.display = 'none';
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'smartthings-card',
  name: 'Smartthings Card',
  description: 'A custom card for Smartthings devices',
  preview: true,
});

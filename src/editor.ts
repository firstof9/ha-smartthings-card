import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, SmartthingsCardConfig } from './types';

@customElement('smartthings-card-editor')
export class SmartthingsCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config?: SmartthingsCardConfig;

  public setConfig(config: SmartthingsCardConfig): void {
    this._config = config;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <paper-input
          label="Name (Optional)"
          .value=${this._config.name}
          .configValue=${'name'}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <ha-entity-picker
          .label=${'Entity (Optional)'}
          .hass=${this.hass}
          .value=${this._config.entity}
          .configValue=${'entity'}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
      </div>
    `;
  }

  private _valueChanged(ev: any): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        const tmpConfig = { ...this._config };
        delete tmpConfig[target.configValue];
        this._config = tmpConfig;
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, SmartthingsCardConfig } from './types';

@customElement('smartthings-card')
export class SmartthingsCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private config!: SmartthingsCardConfig;

  public setConfig(config: SmartthingsCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    this.config = config;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('config')) {
      return true;
    }

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (oldHass) {
      // Only update if the entity state changed
      return (
        this.config.entity ? oldHass.states[this.config.entity] !== this.hass.states[this.config.entity] : false
      );
    }

    return true;
  }

  protected render(): TemplateResult | void {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entityId = this.config.entity;
    const entityState = entityId ? this.hass.states[entityId] : undefined;

    return html`
      <ha-card .header=${this.config.name || 'Smartthings'}>
        <div class="card-content">
          ${entityState
            ? html`
                <div class="state">
                  ${entityState.state}
                </div>
              `
            : html`
                <div class="not-found">
                  Entity not found
                </div>
              `}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      .card-content {
        padding: 16px;
      }
      .state {
        font-size: 24px;
        font-weight: bold;
      }
      .not-found {
        color: var(--error-color);
      }
    `;
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'smartthings-card',
  name: 'Smartthings Card',
  description: 'A custom card for Smartthings devices',
  preview: true,
});

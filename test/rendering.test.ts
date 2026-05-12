import { describe, it, expect, beforeEach } from 'vitest';
import '../src/smartthings-card';
import { SmartthingsCard } from '../src/smartthings-card';
import { mockHass } from './mocks';
import { HomeAssistant } from '../src/types';

describe('SmartthingsCard rendering', () => {
  let element: SmartthingsCard;

  beforeEach(async () => {
    element = document.createElement('smartthings-card') as SmartthingsCard;
    document.body.appendChild(element);
  });

  it('should not render the container if no config', () => {
    expect(element.shadowRoot?.querySelector('.container')).toBeNull();
  });

  it('should render the card with microwave configuration', async () => {
    element.setConfig({
      type: 'custom:smartthings-card',
      appliance_type: 'microwave',
      job_state_entity: 'sensor.microwave_job_state',
    });
    element.hass = mockHass as HomeAssistant;
    
    // Wait for update
    await element.updateComplete;

    const card = element.shadowRoot?.querySelector('ha-card');
    expect(card).toBeTruthy();
    
    const timeValue = element.shadowRoot?.querySelector('.time-fg');
    // timer row should show the formatted time (or --:--:-- if mocked time doesn't match)
    expect(timeValue).toBeTruthy();
  });
});
